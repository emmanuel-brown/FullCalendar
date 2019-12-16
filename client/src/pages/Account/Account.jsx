import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SignUp from './SignUp'
import Login from './Login'
import './account.scss'




const Account = () =>{
    const [ type, setType ] = useState("")

    return(
        <>
            <Navbar />
            <div className="select" style={{display: `${type ? "none" : "block"}`}}>
                <button className="select-bttn" onClick={ () => setType("signUp") }>
                    <p className="select-bttn-txt">Sign Up</p>
                </button>
                <button className="select-bttn" onClick={ () => setType("login") }>
                    <p className="select-bttn-txt">Login</p>
                </button>
            </div>
            { type === "signUp" && <SignUp switch={ () => setType("login") } /> }
            { type === "login" && <Login switch={ () => setType("signUp") }/> }
        </>
    )
}

export default Account