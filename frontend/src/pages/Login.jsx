import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = () => {

    }

    const onSubmit = () => {

    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Login
                </h1>
                <p>Login and start creating goals</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                            type='email'
                            className='form-control'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type='password'
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter password'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Login</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Login;
