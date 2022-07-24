const express = require('express')
const router = express.Router();
const database = require('../db_connector/database')
// const cors = require('cors')


// const app = express()
const port = 3000;

// app.use(cors())
router.post('/api/login', async (req, res) => {

 const body = await req.body;
 return res.send({
      "statuscode": 200,
      "statusmessage":"success",
      "token":"BGUUOLHJKJKSKLIOOPNMAJNJWKLKLKJJJO5565GGCGXFDXYYUUYDFSDHGJHGJHGJHGGH"
  })
})

// router.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports = router