import { EmailIcon } from "../assets/svgs";

const SubscribeSection = () => {
    return (
        <div className="rounded-tl-[129px] rounded-tr-[20px] rounded-b-[20px] p-10 lg:p-22 bg-[#DFD7F9] flex flex-col gap-6 lg:gap-16 items-center justify-center">
            <div className="max-w-[881px]">
                <p className="text-[#5E6282] font-[600] font-[poppins] text-[33px] text-center">
                    Subscribe to get information, latest news and other interesting offers about Jadoo
                </p>
            </div>
            <div className="flex flex-wrap gap-6 items-center justify-center mx-auto">
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <EmailIcon />
                    </div>
                    <input
                        type="text"
                        placeholder="Your email"
                        className="w-full lg:w-[421px] h-[68px] rounded-[10px] bg-white pl-12 pr-4 text-[#39425D] font-[400] font-[Poppins] outline-none placeholder:text-[#39425D]"
                    />
                </div>
                <button className="w-[180px] h-[68px] rounded-[10px] text-[17px] text-white font-[400] font-[Poppins] bg-gradient-to-b from-[#FF946D] to-[#FF7D68]">
                    Subscribe
                </button>
            </div>
        </div>
    )
}

export default SubscribeSection;