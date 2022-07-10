import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom"
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import './Login.scss'
import { BsGoogle } from "react-icons/bs"
import auth from '../../firebaseinit';
import Loading from '../../features/Loader/Loading';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, reseterror] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    if (guser || user) {
        toast("Welcome to your favourite Moviplace")
        navigate("/movie")
    }
    if (gloading || loading || sending) {
        return <Loading type="spokes" color="#DB0510"></Loading>
    }
    let signInError;
    if (gerror || error) {
        signInError = gerror?.message || error?.message;
    }

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
        reset()
    };
    console.log(email)
    return (
        <div className='login_section'>
            <h2>Sign in</h2>
            <form className='login_form' onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder='Enter Email'
                    {...register("email", { required: true })} onBlur={(e) => setEmail(e.target.value)} />
                {errors.email?.type === 'required' && "Email is required"}


                <input type="password" placeholder='Enter Password' {...register("password", { required: true })} />
                <p onClick={async () => {
                    if (!email) {
                        return alert("Write a valid email address")
                    }

                    sendPasswordResetEmail(email)
                        .then(() => {
                            toast("Check your mail to reset password")
                        })

                }} style={{ textAlign: "end", marginBottom: "10px", cursor: 'pointer' }} npm i react-toastify>Forget Password</p>
                {errors.password && <p>Password is required</p>}
                <p className='error'>{signInError?.includes("auth/wrong-password") && "Your Password didn't Match"}</p>
                <input type="submit" />
                <p >New to Cineflix ? <Link to="/signup" style={{ color: "antiquewhite" }}>SIgn Up Please</Link></p>
            </form>

            <div className="google" onClick={() => signInWithGoogle()}>
                <BsGoogle className='google_icon'></BsGoogle>
                Google
            </div>

        </div>
    );
};

export default Login;