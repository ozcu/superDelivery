var multer = require('multer')
var express = require('express')
const router = express.Router()
const path = require('path')
const Product = require('../models/product')
const productService = require('../services/product-service')

const { Storage } = require('@google-cloud/storage')

//custom made date function
function dateBuilder() {
    let d = new Date()
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()
    return `${day}_${date}_${month}_${year}_`
}
const date = dateBuilder()

async function createProduct(productDataBody, publicUrl) {
    const product = new Product({
        name: productDataBody.name,
        description: productDataBody.description,
        photo: publicUrl,
        price: productDataBody.price,
        category: productDataBody.category,
    })
    console.log(product)
    await productService.insert(product)
}

const gcs = new Storage({
    keyFilename: path.join(
        __dirname,
        '../healthy-dolphin-330508-81155a774932.json',
    ),
    project_id: 'healthy-dolphin-330508',
})

//check multer
const fileFilter = (req, file, cb) => {
    // Reject other types file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
//file size control not working for now. not passing any object inside memorystorage check multer
var uploadHandler = multer({
    storage: multer.memoryStorage(),
    limits: {
        files: 1,
        fileSize: 1024 * 1024 * 30,
    }, //Limited to 30 Mb
    fileFilter: fileFilter,
})

//gcs.getBuckets().then((x) => console.log(x)) // shows succesfully paired with google cloud bucket

const bucket = gcs.bucket('super-delivery')

// GCP Bucket Image Upload

router.post('/', uploadHandler.any(), async (req, res) => {
    return new Promise((resolve, reject) => {
        console.log(req.files) // to show req.file is being passed through

        //parse the json string and assign it json object
        const productDataBody = JSON.parse(req.body.productData)
        console.log(productDataBody)

        const blob = bucket.file(date + req.files[0].originalname)
        const blobStream = blob.createWriteStream({
            metadata: {
                contentType: req.files[0].mimetype,
            },
            resumable: false,
        })

        blobStream.on('error', (err) => {
            next(err)
            console.log(err)
            return
        })

        blobStream.on('finish', () => {
            // the public url can be used to directly access the file via HTTP
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`

            resolve([productDataBody, publicUrl])
        })
        blobStream.end(req.files[0].buffer)
    })
        .then(async ([productDataBody, publicUrl]) => {
            await createProduct(productDataBody, publicUrl)
        })
        .catch((err) => {
            console.log('error is' + err)
        })
})

module.exports = router
