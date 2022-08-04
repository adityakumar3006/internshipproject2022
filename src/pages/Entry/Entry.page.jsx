import React ,{ useState }from 'react'
import "./Entry.style.css";

import { LoginForm } from '../../components/login/login.comp';
import { ResetPassword } from '../../components/password-reset/passwordReset.comp';
export const Entry= () => {

const [email,setEmail]=useState("");
const [frmLoad,setFrmLoad]=useState("login")
const [password,setPassword]=useState("");

const handleOnChange=(e)=>{

        const {name,value}=e.target;
        switch(name)
         {
            case'email':
            setEmail(value)
            break
            case'password':
            setPassword(value)
            break;
            default:
                break


        }
        console.log(name,value)

};
const handleOnSubmit=e=>{
  e.preventDefault();

  if(!email|| !password)
  {
  return alert("fill the form ");
}};
const handleOnResetSubmit=e=>{
   e.preventDefault();

  if(!email)
  {
  return alert("please enter the email");
}
console.log(email)};

const formSwitcher=(frmType)=>{
  setFrmLoad(frmType);

}


  return (
    <div className='entry-page bg-info'>
  
  <div className='jumbotron'>
    {frmLoad==="login"&&
     <LoginForm   
    handleOnChange={handleOnChange}
    handleOnSubmit={handleOnSubmit}
formSwitcher={formSwitcher}
    email={email}
    pass={password}

    
    />}
   
     {frmLoad==="reset"&&
      <ResetPassword 
      handleOnChange={handleOnChange}
    handleOnResetSubmit={handleOnResetSubmit}
    formSwitcher={formSwitcher}
    email={email}
 />}
  </div>
    </div>
    )

}
