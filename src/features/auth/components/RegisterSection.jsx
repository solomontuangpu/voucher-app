
"use client";

import { registerUser } from "@/services/auth";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const RegisterSection = () => {

  const { register, handleSubmit, watch, formState: {
    errors, isSubmitting
  } } = useForm();
  const password = watch("password");

  const onSubmit = async ({name, email, password, password_confirmation}) => {
    
   // console.log({name, email, password, password_confirmation});
    

      try {
        const res = await registerUser({
          name,
          email,
          password,
          password_confirmation
        });

        console.log(res);
        const json = await res.json();

        if(!res.ok){
          throw new Error(json.message || "Registration failed!");
        }
        toast.success("Successfully registered");
      } catch (error) {
        console.log(error.message);
        toast.error(error.message)
      }
  }

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <Link
          href='/'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
        >
          <img
            className='w-8 h-8 mr-2'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
            alt='logo'
          />
          Flowbite
        </Link>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create an account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-4 md:space-y-6'
              action='#'
            >
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Name
                </label>
                <input
                  type='text'
                  {...register("name", {
                    required: true,
                  })}
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@company.com'
                />

                {errors.name && (
                  <span className='text-red-500 text-sm'>
                    {" "}
                    *Please fill your name
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Email
                </label>
                <input
                  type='email'
                  {...register("email", {
                    required: true,
                  })}
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@company.com'
                />
                {errors.email && (
                  <span className='text-red-500 text-sm'>
                    {" "}
                    *Please fill your password
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  {...register("password", {
                    required: true,
                  })}
                  id='password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                {errors.name && (
                  <span className='text-red-500 text-sm'>
                    {" "}
                    *Please fill your password
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor='confirm-password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Confirm password
                </label>
                <input
                  type='password'
                  {...register("password_confirmation", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  id='confirm-password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                {errors.password_confirmation && (
                  <span className='text-red-500 text-sm'>
                    {" "}
                    * {errors.password_confirmation.message}
                  </span>
                )}
              </div>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='terms'
                    aria-describedby='terms'
                    type='checkbox'
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                  />
                </div>
                <div className='ml-3 text-sm'>
                  <label
                    htmlFor='terms'
                    className='font-light text-gray-500 dark:text-gray-300'
                  >
                    I accept the{" "}
                    <a
                      className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                      href='#'
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                {isSubmitting ? "Creating your account" : " Create an account"}
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Already have an account?{" "}
                <Link
                  href='/login'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
