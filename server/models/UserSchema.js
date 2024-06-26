const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema(
  {
    firstName:String,
    lastName:String,
    email:String,
    password: String,
    role: {
      type:String,
      enum:["admin","user"],
      default:"user"
    },
    isProjectManager:{
      type:Boolean,
      default:false
    },
    },{ timestamps: true }
);

Users.methods.toJSON = function(){
  let obj = this.toObject()
  delete obj.password
  return obj 
}

module.exports = mongoose.model("User", Users);
