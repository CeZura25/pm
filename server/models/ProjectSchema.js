const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const{PROJECT_STATUS} = require ('../utils/constants')

const Projects = new Schema(
  {
    projectName:String,
    plannedStart:Date,
    plannedEnd:Date,
    actualStart:Date,
    actualEnd:Date,
    team:String,
    projectManager:String,
   projectStatus:{
      type:String,
      enum:Object.values(PROJECT_STATUS),
      default:PROJECT_STATUS.ON_TRACK
    },
    createdBy:{
      type: mongoose.Types.ObjectId,
      ref:'User',
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", Projects);
