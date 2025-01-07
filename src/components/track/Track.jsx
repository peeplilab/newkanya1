import antiImage from "../category/anti.png";
import sportImage from "../category/sport.png";
import babyImage from "../category/baby.png";
import cosmeticsImage from "../category/cosmetics.png";

const Track = () => {
    return (
        <section>
            <div className=" container mx-auto px-5 py-10 md:py-14">
                {/* main  */}
                <div className="flex flex-wrap -m-4 text-center">
                    {/* Track 1 */}
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                            <img src={cosmeticsImage} alt="img" />
                            <h2 className="title-font font-medium text-lg text-gray-900" >Eco-Friendly Beauty</h2>
                            <p className="leading-relaxed">Your guide to guilt-free beauty.
                            </p>
                        </div>
                    </div>

                    {/* Track 2 */}
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                            <img src={sportImage} alt="img" />
                            <h2 className="title-font font-medium text-lg text-gray-900" >Activewear</h2>
                            <p className="leading-relaxed">Clothing focused on fitness, yoga, and active lifestyles..
                            </p>
                        </div>
                    </div>

                    {/* Track 3  */}
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                            <img src={antiImage} alt="img" />
                            <h2 className="title-font font-medium text-lg text-gray-900" >Anti-Aging Skincare
                            </h2>
                            <p className="leading-relaxed">solutions for women aged 35+.
                            </p>
                        </div>
                    </div>
                    {/* Track 4  */}
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                            <img src={babyImage} alt="img" />
                            <h2 className="title-font font-medium text-lg text-gray-900" >Maternity & Postpartum 
                            </h2>
                            <p className="leading-relaxed">Caring for moms, from bump to baby.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Track;
