const mongoose=require('mongoose')

const infoSchema=mongoose.Schema({
    name:{type:String,require:true},
    location:{type:String,require:true},
    cuisine:{type:String,require:true},
    rating:{type:Number,require:true},
    menu:[{name:mongoose.Schema.Types.ObjectId,
          name:{type:String,require:true},
          description:{type:String},
          price:{type:Number,require:true},
    }]

})


module.export=mongoose.model('menu',infoSchema);