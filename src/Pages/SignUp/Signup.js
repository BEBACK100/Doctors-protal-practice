import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { basic_eye_closed } from 'react-icons-kit/linea/basic_eye_closed'
// import { basic_eye } from 'react-icons-kit/linea/basic_eye'
import Icon from 'react-icons-kit';
import { Authcontext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../Hooks/UseToken';
// import { GoogleAuthProvider } from 'firebase/auth';


const Signup = () => {
    const { createuser, updateUser } = useContext(Authcontext)
    const [createuserEmail, setcreateuserEmail] = useState('')
    const [token] = useToken(createuserEmail)


    const [signUperror, setsignUperror] = useState('')
    const [type, setType] = useState("password")
    const { handleSubmit, formState: { errors }, register } = useForm();
    const navigate = useNavigate();


    if (token) {
        navigate('/');
    }

    // const googleprovider = new GoogleAuthProvider
    const onSubmit = data => {
        console.log(data);
        createuser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('User Create Successfully')
                const userinfo = {
                    Name: data.Name

                }
                updateUser(userinfo)
                    .then(() => {
                        saveUser(data.Name, data.email);
                        console.log(saveUser)
                    })

                    .catch(error => console.log(error))
            })
            .catch(error => {

                console.log(error)
                setsignUperror(error.message)
            })
    }
    const saveUser = (Name, email) => {
        const user = { Name, email };
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setcreateuserEmail(email)

            })

    }



    // const handlegooglesignin = () => {

    //     googleSignin(googleprovider)
    //         .then(result => {
    //             const user = result.user;

    //             console.log(user)
    //         })
    //         .catch(error => console.error(error))
    // }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)} className=' text-center bg-slate-300 w-1/3 mx-auto my-8 py-8'>
                <h1 className='text-4xl font-bold'>Sign Up First</h1>

                <label className="label mx-auto bg-slate-300 w-1/3">
                    <span className="label mx-auto bg-slate-300   rounded-lg">Name</span>
                </label>
                <input type="text" placeholder="name" {...register("Name")} className="input input-bordered w-full" required />
                <label className="label">
                    <span className="label mx-auto bg-slate-300  rounded-lg">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email")} className="input input-bordered w-full" required />
                <label className="label">
                    <span className="label mx-auto bg-slate-300   rounded-lg">Password</span>
                </label>
                <input type={type}
                    placeholder="password" {...register("password",

                        {
                            required: 'password is required',
                            minLength: { value: 6, message: 'Passsword must be six caractors' },
                            // pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, message: 'Password must be Strong' }

                        })} className="input input-bordered w-full" required />
                <span className='icon-span' onclick={() => setType('text')}>
                    <Icon icon={basic_eye_closed}></Icon>
                </span>


                {errors.password && <p className='text-xl text-red-600'>{errors.password?.message}  </p>}

                {signUperror && <p className='text-red-400'>{signUperror} </p>}
                <div>  <input className='bg-blue-500 w-full  mt-5 p-3' type="submit" />
                    <div><p>
                        If you  have an account <Link to='/login'> <span className='text-blue-400 text-xl'>Login please </span></Link> </p></div></div>
                <div className="divider divider-horizontal mx-auto">OR</div>
                <div><button className="btn btn-outline btn-secondary rounded-lg w-full mx-auto">With Google Login</button></div>

            </form>
        </div>
    );
};

export default Signup;