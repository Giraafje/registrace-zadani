import React, {useState} from 'react';
import './style.css'

const Registration = () => {
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '',
        passwordConfirm: '',
     })

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
            <input type="email" name="userEmail" placeholder="Email Address" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} required onBlur={() => setUser({...user, username: user.username === '' ? user.email.split('@')[0] : user.username})}></input>
            <input type="text" name="userName" placeholder="User Name" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} required></input>
            <input type="password" name="password" placeholder="Password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} required></input>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={user.passwordConfirm} onChange={(e) => setUser({...user, passwordConfirm: e.target.value})} required></input>
            <button type="submit">REGISTER</button>
        </form>
    )
};

export default Registration;