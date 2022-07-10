import React from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs"
import Loading from '../../../features/Loader/Loading';
import auth from '../../../firebaseinit';



const SignUp = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    if (guser || user) {
        toast("Welcome to your favourite Moviplace")
        navigate("/movie")
    }
    if (gloading || loading) {
        return <Loading type="spokes" color="#DB0510"></Loading>
    }
    let signInError;
    if (gerror || error) {
        signInError = error?.message || gerror?.message;
    }

    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email, data.password)
        reset()
    };
    return (
        <div className='login_section'>
            <h2>Sign Up</h2>
            <form className='login_form' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Enter Name'
                    {...register("name", { required: true })} />
                <small>{errors.name?.type === 'required' && "Name is required"}</small>

                <input type="email" placeholder='Enter Email'
                    {...register("email", { required: true })} />
                <small>{errors.email?.type === 'required' && "Email is required"}</small>

                <input type="password" placeholder='Enter Password' {...register("password", {
                    required: true,
                    minLength: {
                        value: 8,
                    }
                })} />
                {errors.password?.type === "required" && <small>Password is required</small>}
                {errors.password?.type === "minLength" && <small>Password should be at least 8 character</small>}
                <p style={{ textAlign: "end", marginBottom: "10px" }}>Forget Password</p>
                <p className='error'>{signInError?.includes("auth/wrong-password") && "Your Password didn't Match"}</p>
                <input type="submit" />
                <p >Aleady Registere? <Link to="/login" style={{ color: "antiquewhite" }}>Login Please</Link></p>
            </form>

            <div className="google" onClick={() => signInWithGoogle()}>
                <BsGoogle className='google_icon'></BsGoogle>
                Google
            </div>

        </div>
    );
};

export default SignUp;