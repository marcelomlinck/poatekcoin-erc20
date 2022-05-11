module.exports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        secret: 'PoatekTreeJWTToken2022'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'http://localhost:3000/api' // production api
    }
}
