import React from 'react'
import axios from 'axios'
import './account.scss'
import UseForm from '../../components/useForm'
import validate from '../../components/validate'



const SignUp = props =>{
    const include = []
    const submit = () => {
        axios.post('/users/signup', values)
            .then(res => console.log(res.data))
            .catch(() => console.log("something went wrong"))
    }


    const { handleChange, handleSubmit, values, errors } = UseForm(submit, validate, include)

    const input = (name, labelValue) =>{
        include.push(name)
        return(
            <div className="form-field">
                <label htmlFor={name} className="form-field-label">{labelValue}</label>
                <input type="text" className="form-field-text" name={name} id={name} value={ values[name] } onChange={ handleChange }/>
                {errors[name] && <p className="form-field-error">{errors[name]}</p>}
            </div>
        )
    }
    return(
        <>
            <main id="account">
                <header className="header">
                    <h1 className="header-txt">Sign Up</h1>
                </header>
                <form className="form" onSubmit={ handleSubmit }>
                    {input("name", "Name")}
                    {input("email", "Add Email")}
                    {input("password", "Create Password")}
                    <div className="form-field-bttns">
                        <input className="form-field-bttns-bttn" type="submit" value="Create Account"/>
                        <button className="form-field-bttns-bttn" onClick={ props.switch }>Login</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default SignUp