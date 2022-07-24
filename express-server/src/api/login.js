const express = require('express')
const router = express.Router();
const database = require('../db_connector/database')
// const cors = require('cors')


// const app = express()
const port = 3000;

// app.use(cors())
router.get('/login', async (req, res) => {
 await res.json({
      "statuscode": 200,
      "statusmessage":"success"
  })
})

// router.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports = router