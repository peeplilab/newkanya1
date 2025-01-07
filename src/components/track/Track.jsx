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
                            <h2 className="title-font font-medium text-lg text-gray-900" >RTI Filing</h2>
                            <p className="leading-relaxed">YGet the information you need from government bodies effortlessly
                            </p>
                        </div>
                    </div>

                    {/* Track 2 */}
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                            <img src={sportImage} alt="img" />
                            <h2 className="title-font font-medium text-lg text-gray-900" >Legal Advice</h2>
                            <p className="leading-relaxed">Expert legal guidance tailored to your specific needs
                            </p>
                        </div>
                    </div>

                    {/* Track 3  */}
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                            <img src={antiImage} alt="img" />
                            <h2 className="title-font font-medium text-lg text-gray-900" >Tax Filing
                            </h2>
                            <p className="leading-relaxed">Simplify tax filing with professional support and maximize your returns
                            </p>
                        </div>
                    </div>
                    {/* Track 4  */}
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                            <img src={babyImage} alt="img" />
                            <h2 className="title-font font-medium text-lg text-gray-900" >Financial Consultation 
                            </h2>
                            <p className="leading-relaxed">Plan your finances smartly with trusted expert advice
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Track;
