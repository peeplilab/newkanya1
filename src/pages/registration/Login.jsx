/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    // Go back to previous page
    const handleBack = () => {
        navigate(-1); // Navigates to the previous page
    };

    const userLoginFunction = async () => {
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required");
            return;
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
            const q = query(
                collection(fireDB, "user"),
                where('uid', '==', users?.user?.uid)
            );

            const data = onSnapshot(q, (QuerySnapshot) => {
                let user;
                QuerySnapshot.forEach((doc) => user = doc.data());
                localStorage.setItem("users", JSON.stringify(user));
                setUserLogin({ email: "", password: "" });
                toast.success("Login Successfully");
                setLoading(false);
                navigate(user.role === "user" ? '/user-dashboard' : '/admin-dashboard');
            });
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
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

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500 '>
                        Login
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={userLogin.email}
                        onChange={(e) => {
                            setUserLogin({ ...userLogin, email: e.target.value });
                        }}
                        className='bg-green-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userLogin.password}
                        onChange={(e) => {
                            setUserLogin({ ...userLogin, password: e.target.value });
                        }}
                        className='bg-green-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Login Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        onClick={userLoginFunction}
                        className='bg-green-500 hover:bg-green-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Login
                    </button>
                </div>

                {/* Signup Link and Buy Now Text */}
                <div className="text-center">
                    <h2 className='text-black'>
                    Want to buy?{" "}
                        <Link className='text-pink-500 font-bold' to={'/signup'}>
                            Signup
                        </Link>
                    </h2>
                    <p className="text-sm mt-3">
                        View flowers?{" "}
                        <Link className='text-green-500 font-bold' to={'/allproduct'}>
                            Browse Products
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Login;
