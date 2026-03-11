import travellerImg from '../assets/Image.svg'
import { PlayButton } from '../assets/svgs'

const HeroContent = () => {
    return (
        <div className="flex flex-col md:flex-row items-center w-full gap-12 mt-[105px]">
            <div className="max-w-xl flex flex-col gap-6 text-center md:text-left">
                <p className="text-[#DF6951] text-sm sm:text-base lg:text-[20px] font-[700] font-[Poppins]">
                    Best Destinations around the world
                </p>
                <p className="text-[#181E4B] text-4xl sm:text-5xl lg:text-[84px] font-[700] font-[Volkhov] leading-tight :leading-[89px] tracking-tight lg:tracking-[-4px]">
                    Travel, enjoy
                    <br />
                    and live a new
                    <br />
                    and full life
                </p>
                <p className="text-[#5E6282] text-sm sm:text-base font-[Poppins]">
                    Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening. Park gate sell
                    they west hard for the.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <button className="bg-[#F1A501] w-[170px] h-[55px] rounded-[10px] text-white">
                        Find out more
                    </button>
                    <button className="flex items-center gap-3">
                        <PlayButton />
                        <span className="text-[#686D77] font-[Poppins]">Play Demo</span>
                    </button>
                </div>
            </div>
            <div className="w-full max-w-xl lg:max-w-[783px]">
                <img
                    src={travellerImg}
                    alt="traveller"
                    className="w-full h-auto"
                />
            </div>
        </div>
    )
}

export default HeroContent