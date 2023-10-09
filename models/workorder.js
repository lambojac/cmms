
const mongoose=require("mongoose")
const schema=mongoose.schema
({
  name:String,
  type:String,
  location: String,
  description: String,
  assetId: mongoose.Schema.Types.ObjectId,
  assignedTo: String,
  status: String,
})

const users=model.exports("user",schema)
module.exports={users}