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
import FlowerTeaBenefits from "./Charts";
import { Link, useNavigate } from "react-router-dom";

const ProductInfo = () => {
    const navigate = useNavigate();
    const goToCart = () => {
        navigate('/cart');
    }

    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState('')
    const [currentImage, setCurrentImage] = useState(0); // Slider state

    const { id } = useParams()

    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id))
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
        dispatch(addToCart(item));
        toast.success("Added to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Deleted from cart")
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    useEffect(() => {
        getProductData()
    }, [])

    // Slider functionality
    const images = [product?.productImageUrl, product?.amazonURL];
    const nextSlide = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
                {loading ?
                    <div className="flex justify-center items-center">
                        <Loader />
                    </div> :
                    <div className="max-w-6xl px-4 mx-auto">
                        <div className="flex flex-wrap mb-24 -mx-4">
                            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                {/* Image Slider */}
                                <div className="relative">
                                    <img
                                        className="w-full lg:h-[39em] rounded-lg"
                                        src={images[currentImage]}
                                        alt="product"
                                    />
                                    <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                                        &#10094;
                                    </button>
                                    <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                                        &#10095;
                                    </button>
                                </div>
                            </div>

                            <div className="w-full px-4 md:w-1/2">
                                <div className="lg:pl-20">
                                    <div className="mb-6">
                                        <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                            {product?.title}
                                        </h2>
                                        <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400">
                                            ₹ {product?.price}
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                                            Description:
                                        </h2>
                                        <p>{product?.description}</p>
                                    </div>

                                    <div className="flex flex-wrap items-center mb-3">
                                        {cartItems.some((p) => p.id === product.id)
                                            ? <button
                                                onClick={() => deleteCart(product)}
                                                className="w-full px-4 py-3 text-center text-white bg-red-500 border border--600 hover:bg-red-600 rounded-xl">
                                                Delete from cart
                                            </button>
                                            : <button
                                                onClick={() => addCart(product)}
                                                className="w-full px-4 py-3 text-center text-pink-600 bg-green-100 border border-pink-600 hover:bg-green-600 rounded-xl">
                                                Add to cart
                                            </button>
                                        }
                                    </div>

                                    <div className="flex flex-wrap items-center mb-3">
                                        <button
                                            // onClick={() => window.open('https://wa.me/917718823813?text=Hello,%20I%20am%20interested%20in%20your%20product.', '_blank')}
                                            onClick={goToCart}
 
                                          className="w-full px-4 py-3 text-center text-white bg-green-500 border border-green-600 hover:bg-green-600 rounded-xl flex items-center justify-center space-x-2">
                                            <span>View Cart</span>
                                        </button>

                                    </div>
                                </div>
                            </div>

                            {/* Flower Benefits Chart */}
                            <FlowerTeaBenefits selectedFlower={product.title} />
                            
                        </div>
                    </div>}
            </section>
        </Layout>
    );
}

export default ProductInfo;
