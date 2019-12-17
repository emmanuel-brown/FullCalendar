import React from 'react'
import axios from 'axios'
import {} from '../../actions'
import './account.scss'
import UseForm from '../../components/useForm'
import validate from '../../components/validate'



const Login = props =>{
    const include = []

    const submit = () => {
        console.table(values  )
        axios.post('/users/login', values)
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
                {errors[name] && <p>{errors[name]}</p>}
            </div>
        )
    }
    return(
        <>
            <main id="account">
                <header className="header">
                    <h1 className="header-txt">Login</h1>
                </header>
                <form className="form" onSubmit={ handleSubmit }>
                    {input("email", "Email")}
                    {input("password", "Password")}
                    <div className="form-field-bttns">
                        <input className="form-field-bttns-bttn" type="submit" value="Login"/>
                        <button className="form-field-bttns-bttn" onClick={ props.switch }>SignUp</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Login