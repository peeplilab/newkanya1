/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    // Back to previous page
    const handleBack = () => {
        navigate(-1);  // Navigate to previous page
    };

    const userSignupFunction = async () => {
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required");
            return;
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                })
            };

            const userRefrence = collection(fireDB, "user");
            addDoc(userRefrence, user);

            setUserSignup({ name: "", email: "", password: "" });
            toast.success("Signup Successfully");
            setLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Signup Failed");
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className="login_Form bg-green-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">

                {/* Back Button */}
                <div className="mb-5">
                    <button 
                        onClick={handleBack} 
                        className='text-green-500 hover:text-green-700 font-bold'
                    >
                        ← Back
                    </button>
                </div>

                {/* Top Heading */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500'>
                        Signup
                    </h2>
                </div>

                {/* Full Name */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Full Name'
                        value={userSignup.name}
                        onChange={(e) => {
                            setUserSignup({ ...userSignup, name: e.target.value });
                        }}
                        className='bg-green-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Email */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={userSignup.email}
                        onChange={(e) => {
                            setUserSignup({ ...userSignup, email: e.target.value });
                        }}
                        className='bg-green-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Password */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userSignup.password}
                        onChange={(e) => {
                            setUserSignup({ ...userSignup, password: e.target.value });
                        }}
                        className='bg-green-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Signup Button */}
                <div className="mb-5">
                    <button
                        type='button'
                        onClick={userSignupFunction}
                        className='bg-green-500 hover:bg-green-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Signup
                    </button>
                </div>

                {/* Login and Buy Now Links */}
                <div className="text-center">
                    <h2 className='text-black'>
                        Have an account?{" "}
                        <Link className='text-pink-500 font-bold' to={'/login'}>
                            Login
                        </Link>
                    </h2>
                    <p className="text-sm mt-3">
                        Want to explore products?{" "}
                        <Link className='text-green-500 font-bold' to={'/allproduct'}>
                            Browse Now
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Signup;
