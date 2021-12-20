const templates = require('../db/model')

const getHello = async (req, res) => {
  const {inputNum:num} = req.body;
  const result = (Number(num) * Number(num));
  await templates.create({result})
  res.status(200).send(result.toString())
}


module.exports={getHello}