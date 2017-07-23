var crossfilter = require('crossfilter')

exports.data = function(input) {
  exports.ndx = crossfilter(input)
  
  return exports.ndx;
}
var internalConfig = {
  
}
var dimensionBuild = function(params) {
  //params could be a string or function
  if(typeof params == "string") {
   internalConfig['dimension'] = exports.ndx.dimension(function(d) {
      return d[params].toString()
    })
    return internalConfig['dimension']
  }
  else if(typeof params == "function") {
    internalConfig['dimension'] = exports.ndx.dimension(params)
    return internalConfig['dimension']
  }
  else if(typeof params == "object") {
    internalConfig['dimension'] =  exports.ndx.dimension(function(d) {
      var temp = ''
    //  console.log(params)
       for(var h = 0; h < params.length; h++ ) {
	 temp += d[params[h]].toString()
      
    }
    return temp;
    })
    return internalConfig['dimension']
   
  }
  else {
    console.warn('Invalid dimension operation on crossfilterPlus')
  }
}
exports.dimension = dimensionBuild
exports.group = function() {
}

exports.build = function(config) {
  if(!config || (typeof config != 'object')) {
    console.warn('Invalid configuration defined for build operation')
  }
  else {
    if(!config.hasOwnProperty('data')) {
      config['data'] = []
    }
    exports.ndx = crossfilter(config['data'])
    if(!config.hasOwnProperty('dimension')) {
      console.warn('Dimension is mandatory field in configuration')
      return;
    }
    exports.dimension(config.dimension)
    if(!config.hasOwnProperty('aggregate') || (config['aggregate'] == 'count')) {
      internalConfig['group'] = internalConfig['dimension'].group()
    }
    else if(config['aggregate'] == 'sum') {
      internalConfig['group'] = internalConfig['dimension'].group().reduceSum(function(d) {
	return d[config.measure]? d[config.measure]: 0
      })
    }
    else {
      //TODO
    }
    return internalConfig
    
    
    
  }
}



