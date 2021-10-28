var faker = require('faker')
const axios = require('axios')

var data = { users: [] }

for (var i = 1; i <= 5; i++) {
    data.users.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    })
}
console.log(JSON.stringify(data.users))

async function main() {
    try {
        const res = await axios.post('http://localhost:3000/users', data.user)
        console.log(res.data)
    } catch (err) {
        throw new Error(err)
    }
}
main()
