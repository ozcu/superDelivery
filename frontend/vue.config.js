module.exports = {
    devServer: {
        disableHostCheck: true,
        proxy: 'https://backend-7z3lhywtla-ew.a.run.app:3000', //this is for CORS
        port: 8080,
        
    },
    
}
