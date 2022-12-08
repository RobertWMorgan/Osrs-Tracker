import express from 'express'

const logger = (req, _res, next) => {
  console.log(`Incoming request on ${req.method} - ${req.url}`)
  next()
}

const startServer = async () => {
  const app = express()
  app.use(logger)
  app.use(express.json())
  
  

}
