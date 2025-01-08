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
                            <p className="leading-relaxed">"I never knew filing an RTI could be this simple! The expert guidance helped me uncover important details about a delayed government project in my area. Highly recommend this platform for anyone seeking transparency!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Tanya</h2>
                                {/* <p className="text-gray-500">Senior Product Designer</p> */}
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={GawriImage}/>
                                <p className="leading-relaxed">"I was struggling to get documents related to my land records. With the help of this service, I filed an RTI and received the information within weeks. The process was smooth, and the consultant was incredibly helpful."
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">S Mishra</h2>
                                {/* <p className="text-gray-500">UI Developer</p> */}
                            </div>
                        </div>

                      {/* Testimonial 3 */}
                      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={SaranyaImage}/>
                                <p className="leading-relaxed">
                                "Filing an RTI felt intimidating at first, but this platform made it straightforward. I successfully got answers regarding my pension delays. The consultant’s expertise made all the difference!"
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
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
