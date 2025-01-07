/* eslint-disable react/no-unescaped-entities */

import KamalImage from './businesswoman.png';
import GawriImage from './woman.png';
import SaranyaImage from './woman2.png';
const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black'>Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10'>What our <span className=' text-pink-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={KamalImage}/>
                            <p className="leading-relaxed">"I've always struggled to find products that speak to my needs and desires as a woman. Consult Mitra's curated collection is a breath of fresh air. Every piece feels like it was made just for me. The moment I bought something from here, I could feel the love and care that goes into it. It's more than shopping; it's about celebrating myself!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Tanya</h2>
                                {/* <p className="text-gray-500">Senior Product Designer</p> */}
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={GawriImage}/>
                                <p className="leading-relaxed">"As a working mom, finding the time to shop for myself can be overwhelming. But with Consult Mitra, I can find beautiful, affordable products in a few clicks. It’s become my go-to destination for everything, from clothes to accessories, and it’s made me feel more confident and empowered."</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">S Mishra</h2>
                                {/* <p className="text-gray-500">UI Developer</p> */}
                            </div>
                        </div>

                      {/* Testimonial 3 */}
                      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={SaranyaImage}/>
                                <p className="leading-relaxed">"As a working mom, finding the time to shop for myself can be overwhelming. But with Consult Mitra, I can find beautiful, affordable products in a few clicks. It’s become my go-to destination for everything, from clothes to accessories, and it’s made me feel more confident and empowered."</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Saranya H.</h2>
                                {/* <p className="text-gray-500">UI Developer</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial;
