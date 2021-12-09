module.exports = {
    devServer: {
        Proxy:{
            '/*': {
                target: 'https://secure-earth-58163.herokuapp.com/',
                changeOrigin: true
            }
        }
    }
}