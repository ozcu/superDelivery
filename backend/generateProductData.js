var faker = require('faker')
const axios = require('axios')

var data = { products: [] }

for (var i = 1; i <= 5; i++) {
    data.products.push({
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        category: faker.commerce.productDescription(),
    })
}
console.log(JSON.stringify(data.products))

async function main() {
    try {
        const res = await axios.post(
            'http://localhost:3000/products',
            data.products,
        )
        console.log(res.data)
    } catch (err) {
        throw new Error(err)
    }
}
main()
