import express from 'express'

const app = express()
const port = 80;

app.get('', (req, res, next) => {
  res.send("2차테스트")
})

app.listen(port, () => {
  console.log('listening...', port)
})
