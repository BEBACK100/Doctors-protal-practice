import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/UseToken';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(Authcontext)
    const [loginError, setloginError] = useState('')
    const [loginUserEmail, setloginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)

    // const location = useLocation();
    const navigate = useNavigate()



    if (token) {
        navigate('/dashboard');
    }
    const handleLOgin = data => {

        console.log(data);
        signIn(data.email, data.password)

            .then(result => {

                const user = result.user
                console.log(user);
                setloginUserEmail(data.email)

            })

            .catch(error => {
                console.log(error)
                setloginError(error.message)

            })

    }

    return (
        <div>
            <div><h1 className='text-5xl text-center'>Login </h1></div>
            <form onSubmit={handleSubmit(handleLOgin)} className=' text-center  w-1/3 mx-auto my-8 py-8'>


                <label className="label">
                    <span className="label mx-auto bg-slate-300  my-5 rounded-lg">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email", { required: 'email is required', })}
                    className="input input-bordered  w-full" required />
                {errors.email && <p>{errors.email?.message} </p>}

                <label className="label">
                    <span className="label mx-auto bg-slate-300 my-5 rounded-lg">Password</span>
                </label>
                <input type="password" placeholder="password" {...register("password", {
                    required: 'password is required',
                    minLength: { value: 6, message: 'Passsword must be six caractors' }

                })} className="input input-bordered w-full " required />


                {errors.password && <p className='text-xl text-red-600'>{errors.password?.message}  </p>}

                {loginError && <p className='text-red-400'>{loginError} </p>}

                <div> <input className='bg-blue-500 w-full  mt-5 p-3' type="Submit" />

                    <div><p>
                        Don't have an account <Link to='/signup'> <span className='text-blue-800 text-xl mt-3'>Sign up </span></Link> </p></div></div>

            </form>
        </div>
    );
};

export default Login;