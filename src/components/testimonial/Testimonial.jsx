/* eslint-disable react/no-unescaped-entities */

import TextSwitcher from '../../pages/textSwitcher/Headline';
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
                    <h1 className=' text-center text-3xl font-bold text-black'>Testimonials</h1>
                    {/* para  */}
                    {/* <h2 className=' text-center text-2xl font-semibold mb-10'>What our <span className=' text-pink-500'>customers are saying</span> <TextSwitcher /></h2> */}
                    <h2 className=' text-center text-2xl font-semibold mb-10'><TextSwitcher /></h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={KamalImage}/>
                            <p className="leading-relaxed">"Newkanya's Chamomile tea has become part of my evening ritual. Just one cup helps me unwind after a long day. The flavor is pure and floral, and I can feel the calm wash over me. I sleep better and wake up refreshed!"
                            </p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Tanya</h2>
                                {/* <p className="text-gray-500">Senior Product Designer</p> */}
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={GawriImage}/>
                                <p className="leading-relaxed">"The Blue Bloom tea is not only beautiful but works wonders for my skin. After a month of drinking it, I’ve noticed my skin feels more hydrated and looks radiant. Plus, watching the tea change color is such a fun experience!"
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
                                "I love the subtle, refreshing taste of the Rhododendron Brew. It’s light, floral, and leaves me feeling re-energized. Knowing it's rich in antioxidants and supports my heart health makes it even better. A perfect way to stay healthy!"
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
