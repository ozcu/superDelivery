var multer = require('multer')
var express = require('express')
const router = express.Router()
const path = require('path')
const Product = require('../models/product')

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
console.log(date)

createProduct = (productDataBody, publicUrl) => {
    const product = new Product({
        name: productDataBody.name,
        description: productDataBody.description,
        photo: publicUrl,
        price: productDataBody.price,
        category: productDataBody.category,
    })
        .then(function () {
            console.log(product)
        })
        .catch(function () {
            console.log('cannot create product')
        })
}

const gcs = new Storage({
    keyFilename: path.join(
        __dirname,
        '../healthy-dolphin-330508-81155a774932.json',
    ),
    project_id: 'healthy-dolphin-330508',
})

//dont know yet if works need to check more into multer middleware
const fileFilter = (req, file, cb) => {
    // Reject other types file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
//file size control not working for now.
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
    try {
        //const promise = new Promise((resolve,reject)=>{}) //promisify the product generation

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

        // The err is not getting console logged even though it is not saving to the google cloud bucket properly?
        blobStream.on('error', (err) => {
            next(err)
            console.log(err)
            return
        })
        blobStream.on('finish', () => {
            // the public url can be used to directly access the file via HTTP
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
            console.log(publicUrl)
        })

        blobStream.end(req.files[0].buffer)

        //createProduct(matchedArray, publicUrl) //promisify the product generation
    } catch (err) {
        throw new Error('Post request failed!')
    }
})

module.exports = router
