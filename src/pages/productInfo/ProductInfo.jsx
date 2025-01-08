import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const ProductInfo = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState('')
    // console.log(product)

    const { id } = useParams()

    // console.log(product)

    // getProductData
    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id))
            // console.log({...productTemp.data(), id : productTemp.id})
            setProduct({ ...productTemp.data(), id: productTemp.id })
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        // console.log(item)
        dispatch(addToCart(item));
        toast.success("Save")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete")
    }

    // console.log(cartItems)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])


    useEffect(() => {
        getProductData()

    }, [])
    return (
        <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
                {loading ?
                    <>
                        <div className="flex justify-center items-center">
                            <Loader />
                        </div>
                    </>

                    :

                    <>
                        <div className="max-w-6xl px-4 mx-auto">
                            <div className="flex flex-wrap mb-24 -mx-4">
                                <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                    <div className="">
                                        <div className="">
                                            <img
                                                className=" w-full lg:h-[39em] rounded-lg"
                                                src={product?.productImageUrl}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="lg:pl-20">
                                        <div className="mb-6 ">
                                            <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                                {product?.title}
                                            </h2>
                                            <div className="flex flex-wrap items-center mb-6">
                                                <ul className="flex mb-4 mr-2 lg:mb-0">
                                                    <li>
                                                        <a href="">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                                <span>₹ {product?.price}</span>
                                            </p>
                                            <div className="flex flex-wrap items-center mb-3">

                                                {/* <button
                                              onClick={() => addCart(product)}
                                              className="w-full px-4 py-3 text-center text-pink-600 bg-green-100 border border-pink-600  hover:bg-green-600 hover:text-gray-100  rounded-xl"
                                          >
                                              Check current Price
                                          </button> */}

                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                                                Description :
                                            </h2>
                                            <p>{product?.description}</p>
                                        </div>

                                        <div className="mb-6 " />
                                        {/* <div className="flex flex-wrap items-center mb-3">
                                            {cartItems.some((p) => p.id === product.id)
                                                ?
                                                <button
                                                    onClick={() => deleteCart(product)}
                                                    className="w-full px-4 py-3 text-center text-white bg-red-500 border border--600  hover:bg-red-600 hover:text-gray-100  rounded-xl"
                                                >
                                                    Delete Save
                                                </button>
                                                :
                                                <button
                                                    onClick={() => addCart(product)}
                                                    className="w-full px-4 py-3 text-center text-pink-600 bg-green-100 border border-pink-600  hover:bg-green-600 hover:text-gray-100  rounded-xl"
                                                >
                                                    Save
                                                </button>
                                            }
                                        </div> */}
                                        <div className="flex flex-wrap items-center mb-3">
                                            <button
                                                onClick={() => window.open('https://wa.me/917718823813?text=Hello,%20I%20am%20interested%20in%20your%20product.', '_blank')}
                                                className="w-full px-4 py-3 text-center text-white bg-green-500 border border-green-600 hover:bg-green-600 hover:text-white rounded-xl flex items-center justify-center space-x-2"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 2.148.603 4.154 1.654 5.84L2 22l4.356-1.654A9.95 9.95 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8 0 1.885-.649 3.625-1.735 5.012l.399 1.599-1.632-.436A7.948 7.948 0 0112 20a8 8 0 110-16zM9.828 7c-.443 0-.885.168-1.172.506l-.172.205-.34.455-.203.289c-.335.476-.52 1.05-.52 1.649 0 .599.185 1.173.52 1.65l.203.289.34.455.172.205c.287.338.729.506 1.172.506.154 0 .308-.02.457-.06l.173-.05.336-.113c.218-.073.43-.163.635-.268l.225-.113c.147-.074.292-.156.434-.242l.186-.113.308-.203a4.828 4.828 0 001.268-1.268l.203-.308.113-.186c.086-.142.168-.287.242-.434l.113-.225c.105-.205.195-.417.268-.635l.113-.336.05-.173c.04-.15.06-.303.06-.457 0-.443-.168-.885-.506-1.172l-.205-.172-.455-.34-.289-.203c-.476-.335-1.05-.52-1.649-.52s-1.173.185-1.65.52l-.289.203-.455.34-.205.172A1.658 1.658 0 009.828 7z" clipRule="evenodd" />
                                                </svg>
                                                <span>Chat on WhatsApp</span>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
            </section>

        </Layout>
    );
}

export default ProductInfo;
