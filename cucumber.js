module.exports = {
    default: {
      require: [
        'tests/steps/**/*.steps.js',  
        'tests/support/**/*.js'        
      ],
      format: ['progress'],           
      paths: ['tests/features/**/*.feature'],  
      publishQuiet: true              
    }
  };
  