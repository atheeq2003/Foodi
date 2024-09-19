import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="modal-box m-0 flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
                    <h3 className='font-bold text-lg'>Please Login!</h3>
                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required {...register("email")} />
                    </div>
                    {/* password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required {...register("password")} />
                        <label className="label mt-1">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    {/* login btn */}
                    <div className="form-control mt-6">
                        <input type="submit" value="Login" className="btn bg-green text-white" />
                    </div>
                    <p className='text-center my-2'>Do not have an account? <Link to="/signup" className='underline text-red ml-1'>Signup Now</Link></p>
                </form>
                <div className='text-center space-x-3 mb-5'>
                    <button className="btn btn-circle btn-outline hover:bg-green hover:text-white">
                        <FaGoogle />
                    </button>
                    <button className="btn btn-circle btn-outline hover:bg-green hover:text-white">
                        <FaFacebookF />
                    </button>
                    <button className="btn btn-circle btn-outline hover:bg-green hover:text-white">
                        <FaGithub />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup;
