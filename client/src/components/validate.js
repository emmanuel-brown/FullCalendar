import v from 'validator'

export default function validation(values, include){
    let errors = {}
    let show = {}
    if(!values.name){
        errors.name = "Please enter a name"
    }
    if(!values.email){
        errors.email = "Please enter an email"
    } else if(!v.isEmail(values.email)){
        errors.email = "Please enter a valid email"
    }
    if(!values.password){
        errors.password = "Please enter a password"
    }
    const includer = typeof include === "array" || include.length > 0
    includer && include.map(prop => errors[prop] ? show[prop] = errors[prop] : null)
    
    return includer ? show : errors
}