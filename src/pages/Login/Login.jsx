import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    commonError: '',
  });

  const { logIn, googleSignIn, logOut } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (userInfo.email.length === 0) return;
    if (!userInfo.password) return;
    logIn(userInfo.email, userInfo.password)
      .then((result) => {
        const loggedInUser = result.user;
        const user = {
          email: loggedInUser.email,
        };
        // console.log(user);
        // axios.post('/auth/acess-token', user).then((res) => {
        //   console.log(res.data);
        //   if (res.data.success) {
        toast.success('Successful Login');
        navigate(from, { replace: true });
        //   } else {
        //     logOut();
        //   }
        // });
      })
      .catch((error) => {
        form.reset();
        if (error.code === 'auth/network-request-failed') {
          toast.error('Network request failed');
          return;
        }

        setErrors({
          ...errors,
          commonError: 'Invalid email or password. Please try again.',
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success('Successful Login');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: 'Please enter a valid email address' });
      setUserInfo({ ...userInfo, email: '' });
    } else {
      setUserInfo({ ...userInfo, email: email });
      setErrors({ ...errors, email: '' });
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;

    if (password.length < 6) {
      setErrors({
        ...errors,
        password: 'Password must has at least 6 characters',
      });
      setUserInfo({ ...userInfo, password: '' });
    } else {
      setUserInfo({ ...userInfo, password: password });
      setErrors({ ...errors, password: '' });
    }
  };

  const handleEmailBlur = (e) => {
    const email = e.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setUserInfo({ ...userInfo, email: '' });
    } else {
      setUserInfo({ ...userInfo, email: email });
    }
  };

  const handleResetPassword = () => {
    // resetPassword(userInfo.email)
    //   .then(() => {
    //     console.log(userInfo.email);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
  };

  return (
    <div className="bg-[#1FACA5] sm:w-[350px] md:w-[400px] mx-6 sm:mx-auto my-10 md:my-20 rounded-md flex flex-col px-4 sm:px-10  justify-between shadow-lg py-8">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col justify-between  "
      >
        <h2 className="text-xl  md:text-2xl lg:text-3xl font-bold text-center">
          Log in
        </h2>

        <label className="label">
          <span className="label-text mt-2  font-semibold ">Your email</span>
        </label>
        <input
          className="input 
         border-none  input-bordered w-full"
          type="text"
          placeholder="E-mail address"
          name="emali"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          defaultValue={'isss@gmail.com'}
          required
        />
        <p className="text-red-600 text-sm font-semibold mt-1 ml-1">
          {errors.email}
        </p>

        <label className="label">
          <span className="label-text mt-2  font-semibold ">Password</span>
        </label>
        <input
          className="input border-none input-bordered  w-full"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handlePasswordChange}
          defaultValue={'aA1!11'}
          required
        />
        <p className="text-red-600 text-sm font-semibold mt-1 ml-1">
          {errors.password}
        </p>
        <p className="text-red-600 text-sm font-semibold mt-1 ml-1">
          {errors.commonError}
        </p>
        <button
          onClick={handleResetPassword}
          className="text-primary-color text-sm  ml-1 text-left"
        >
          Forget password
        </button>

        <button className="border-2 border-stone-800 px-8 py-2  uppercase font-semibold  mt-4 mx-auto w-full rounded-xl">
          Login
        </button>
        <p className="text-center text-cyan-100 mt-3">
          Don't have account?
          <Link to="/signup" className="link  text-stone-800">
            {''} Sign up
          </Link>
        </p>
        <p className="text-center text-cyan-100">----Or, Login with----</p>
      </form>
      <button
        onClick={handleGoogleSignIn}
        className="border-2 border-black p-3 rounded-full mt-4 flex items-center justify-center gap-2"
      >
        <FaGoogle className="" />
        <span className="font-semibold">Google</span>
      </button>
    </div>
  );
};

export default Login;
