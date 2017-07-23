var crossfilter = require('crossfilter')

exports.data = function(input) {
  exports.ndx = crossfilter(input)
  return exports.ndx;
}
var internalConfig = {
  
}
exports.dimension = function(params) {
  //params could be a string or function
  if(typeof params == "string") {
    return exports.ndx.dimension(function(d) {
      return d[params]
    })
  }
  else if(typeof params == "function") {
    return exports.ndx.dimension(params)
  }
  else if(typeof params == "object") {
    return exports.ndx.dimension(function(d) {
      var temp = ''
       for(var h = 0; h < params.length; h++ ) {
	 temp += d[h]
      
    }
    return temp;
    })
   
  }
  else {
    console.warn('Invalid dimension operation on crossfilterPlus')
  }
}

