import React, {useState} from 'react';
import './style.css'

const Registration = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
     })

     const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }

    //TODO: instead of repeating email, extract only the first part of the email
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" name="userEmail" placeholder="Email Address" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}></input>
                <input type="text" name="userName" placeholder="User Name" value={user.username === '' ? user.email : user.username} onChange={(e) => setUser({...user, username: user.username === '' ? user.email : e.target.value})}></input>
                <input type="password" name="password" placeholder="Password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}></input>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={user.passwordConfirm} onChange={(e) => setUser({...user, passwordConfirm: e.target.value})}></input>
                <button style={{padding: '0.5rem', borderRadius: '10px', display: 'block', margin: '1rem auto', cursor: 'pointer'}} type="submit">REGISTER</button>
            </form>
        </>
    )
};

export default Registration;