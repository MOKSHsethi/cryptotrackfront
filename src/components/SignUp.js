import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { register } from '../redux/actions/user';
import { useDispatch } from 'react-redux';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [signuperror, setError] = useState(null);

    useEffect(() => {
        if (signuperror !== null) {
            setTimeout(() => {
                setError(null)
            }, 3000)
        }
    }, [signuperror])

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let newItem = { email, password, username }
        console.log(newItem);
        dispatch(register(newItem)).then((res) => {
            if (!res.success) {
                setError(res.message)
            }
            else {
                alert("registration successfull");
            }
        })
        // dispatch
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            {signuperror !== null && <p>{signuperror}</p>}
            <form className="shape" autoComplete='off'>
                <p>
                    <label>Email address</label><br />
                    <input type="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                </p>
                <p>
                    <label>UserName</label><br />
                    <input type="text" name="username" required onChange={(e) => setUserName(e.target.value)} />
                </p>
                <p>
                    <label>Password</label><br />
                    <input type="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" onClick={handleSubmit} disabled={email.trim().length < 1 || username.trim().length < 1 || password.trim().length < 1}>Register</button>
                </p>
            </form>
            <footer>
                <p>Already have an account?<Link to="/login">Move to login page</Link></p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
