import React, { useEffect, useState} from 'react';
import { Link ,useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/user';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setError] = useState(null);
    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (loginError !== null) {
            setTimeout(() => {
                setError(null)
            }, 3000)
        }
    }, [loginError])

    const handleSubmit = (e) => {
        e.preventDefault();
        let newItem = { email, password }
        dispatch(login(newItem)).then((res) => {
            console.log(res)
            if (!res.success) {
                setError(res.message)
            }
            
            else{
                // alert("Login successfull");
               navigate('/');
            }
            
        })
    }

    return (


        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            {loginError !== null && <p>{loginError}</p>}
            <form className="shape" autoComplete='off'>
                <p>
                    <label>Email address</label><br />
                    <input type="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                </p>
                <p>
                    <label>Password</label>
                    {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
                    <br />
                    <input type="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={handleSubmit}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/signup">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>

    )
}
