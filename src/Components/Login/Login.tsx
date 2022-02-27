import React, { useEffect, useState } from "react";
import "./Login.css";

function Login(){

    const [login, loginInput] = useState();
    const [password, passwordInput] = useState();

    const [loginDirty, loginInputDirty] = useState(false);
    const [passwordDirty, passwordInputDirty] = useState(false);
    const [loginError, loginInputError] = useState("Логин не может быть пустым");
    const [passwordError, passwordInputError] = useState("Пароль не может быть пустым");
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(loginError || passwordError){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    }, [loginError, passwordError])

    function handleChange_login(){
        loginInput(login);
    }

    function handleChange_password(){
        passwordInput(password);
    }

    const loginHandler = (e:any) => {
        loginInput(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())){
            loginInputError('Некорректный логин')
        }else{
            loginInputError('')
        }
        switch (e.target.name){
            case "login":
                loginInputDirty(true)
                break
            case "password":
                passwordInputDirty(true)
                break
        }
    }

    return (
        <div className="AuthorizationForm">
            <h2>Авторизация</h2>
            <form>
                {(loginDirty && loginError) && <div style={{color: 'red'}}>{loginError}</div>}
                <input onBlur={e => loginHandler(e)} name="login" type="text" placeholder="логин" id="login" value={login} onChange={handleChange_login} /><br/>
                {(passwordError && passwordDirty) && <div style={{color: 'red'}}>{passwordError}</div>}
                <input onBlur={e => loginHandler(e)} name="password" type="password" placeholder="пароль" id="password" value={password} onChange={handleChange_password}/><br/>
                <button disabled={!formValid} type="submit">Вход</button>
            </form>
        </div>
    );
}

export default Login;