module.exports = {
    devServer: {
        proxy: 'http://localhost:3000', //this is for CORS
        port: 8080,
    },
}
