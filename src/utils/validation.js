const validate = (val, rules) => {
  
  let isValid = true
  
  for(let rule in rules) {

    switch (rule) {
      case 'isNumber':
        isValid = isValid && numberValidation(val)
        break
      case 'minLength':
        isValid = isValid && numberIntValidation(val, rules[rule])
        break
      default:
        isValid=true
        break
    }
  }

  return isValid
}

const numberValidation = val => {
  return /(\$)[ ]*([1-9][0-9]*((,| )[0-9]{3})*|0)(\.[0-9]+)?[ ]*(B|b|M|m|K|k)?/g.test(val)
}

const intValidation = val => {
  return /^\d*[1-9]\d*$/g.test(val)
}

export default validate