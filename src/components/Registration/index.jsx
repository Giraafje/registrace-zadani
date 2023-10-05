import React, {useState} from 'react';
import './style.css'

const Registration = () => {
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '',
        passwordConfirm: '',
     })

     const handleEmail = (e) => {
        setUser({...user, email: e.target.value, username: user.username === '' && e.target.value.includes('@') ? e.target.value.split('@')[0] : user.username})
     }

     const handleUsername = (e) => {
        setUser({...user, username: e.target.value})
     }

     const handlePassword = (e) => {
        setUser({...user, password: e.target.value})
     }

     const handleConfirmPassword = (e) => {
        setUser({...user,  passwordConfirm: e.target.value})
     }

     const handleSubmit = (e) => {
        e.preventDefault()
        if (user.password.length < 8) {
            alert('Password must contain at least 8 characters.')
        }
        if (user.password !== user.passwordConfirm) {
            alert('Passwords did not match, please reconfirm your password.')
        } else {
            console.log(user)
        }
    }
 
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="userEmail" placeholder="Email Address" value={user.email} onChange={handleEmail} required></input>
            <input type="text" name="userName" placeholder="User Name" value={user.username} onChange={handleUsername} required></input>
            <input type="password" name="password" placeholder="Password" value={user.password} onChange={handlePassword} required></input>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={user.passwordConfirm} onChange={handleConfirmPassword} required></input>
            <button type="submit">REGISTER</button>
        </form>
    )
};

export default Registration;