const mongoose = require('mongoose')

const Productschema = mongoose.Productschema({

imagepath :{
  type : String ,
  required : true 
},
productname :{

    type : String,
    required: true
},
information:{
 required: true,
    type :{
      storagecapacity : Number,
      numberofsim : String,
      cameraResolution : Number,
      dispalySize : Number

    }

},
  price:{

    type : Number,
    required : true
  }   
});
module.exports = mongoose.model("product", Productschema)