export default (config, target) => {
  validate(config, (checkedData) => {
    const data = checkedData
    // Create the table
  })
  
  function validate(config, processData) {    
    if (!config) {
      console.error('Missing Configuration!')
      return
    }
    if (!config instanceof Array) {
      console.error('Configuration has to be an Array!')
      return
    }
    if (!config.data instanceof Object) {
      console.error('Error: Config.data needs to be an Object!')
      return
    }
    
    const countHeaders = Object.keys(config.data.headers).length

    processData(config)
  }
}
