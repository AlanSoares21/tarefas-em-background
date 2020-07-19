export default {
    host: process.env.REDIS_HOST,
    port:  process.env.REDIS_PORT,
    password:process.env.REDIS_PASSWORD,
    tls: {
        servername: process.env.REDIS_HOST
    }
}