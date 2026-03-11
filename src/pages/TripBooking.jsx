import { AirportIcon, BuildingIcon, DestinationIcon, HeartIcon, LeafIcon, MakePaymentIcon, MapIcon, SendIcon } from "../assets/svgs";
import tripCardImage from "../assets/tripCardImage.png";

const TripBooking = () => {

    const bookingSteps = [
        {
            img: <DestinationIcon />,
            title: "Choose Destination",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        },
        {
            img: <MakePaymentIcon />,
            title: "Make Payment",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        },
        {
            img: <AirportIcon />,
            title: "Reach Airport on Selected Date",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        }
    ]
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-[105px] px-6 gap-16 lg:gap-5">
            <div className="flex flex-col items-start gap-2 ">
                <h1 className="text-[#5E6282] text-[18px] font-[600] font-[Poppins]">
                    Easy and Fast
                </h1>
                <p className="text-[#14183E] text-4xl lg:text-[50px] font-[700] font-[Volkhov] pb-6">
                    Book Your Next Trip <br />In 3 Easy Steps
                </p>
                <div className="grid grid-cols-1 max-w-[396px] gap-12">
                    {bookingSteps.map((item, index) => {
                        const isComponent = typeof item.img === "object";
                        return (
                            <div key={index} className="flex gap-6">
                                <div>
                                    {item.img && (isComponent ? item.img : <img src={item.img} alt={item.title} />)}
                                </div>
                                <p className="flex flex-col items-start gap-1">
                                    <span className="text-[#5E6282] text-sm lg:text-[16px] font-[700] font-[Poppins]">
                                        {item.title}
                                    </span>
                                    <span className="text-[#5E6282] text-sm lg:text-[16px] font-[400] font-[Poppins]">
                                        {item.description}
                                    </span>
                                </p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className="flex justify-center items-center bg-white relative">
                <div className="absolute right-15 top-18 w-[200px] h-[150px] bg-[rgba(89,177,230,1)] opacity-90 blur-[130px] rounded-[10px]"></div>{/* Main Card */}
                <div className="relative bg-white shadow-[0_15px_30px_1px_rgba(0,0,0,0.09)] rounded-[26px] p-5 flex flex-col gap-6">
                    <img
                        src={tripCardImage}
                        className="rounded-[18px] w-full h-[180px] object-cover"
                    />
                    <h2 className="text-[#080809] text-sm lg:text-[16px] font-[700] font-[Poppins]">
                        Trip To Greece
                    </h2>
                    <p className="flex flex-row gap-2 text-[#84829A] text-sm lg:text-[16px] font-[400] font-[Poppins]">
                        <span>
                            14-29 June|
                        </span>
                        <span>
                            by Robbin joseph
                        </span>
                    </p>
                    <div className="flex flex-row gap-4">
                        <LeafIcon />
                        <MapIcon />
                        <SendIcon />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-row gap-4 items-center">
                            <BuildingIcon />
                            <span>24 people going</span>
                        </div>
                        <button className="">
                            <HeartIcon />
                        </button>
                    </div>
                    <div className="absolute -right-19 bottom-14 bg-white rounded-2xl shadow-[8px_7px_30px_-10px_rgba(0,0,0,0.09)] p-4 w-[263px] flex gap-3 hidden md:flex">
                        <img
                            src={tripCardImage}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                            <p className="text-sm font-[400] text-[#84829A">
                                Ongoing
                            </p>

                            <h3 className="font-[400] text-lg text-[#080809]">
                                Trip to rome
                            </h3>

                            <p className="text-sm font-[400] mt-1">
                                <span className="text-[#8A79DF]">
                                    40%
                                </span>
                                <span className="text-[#080809]">
                                    completed
                                </span>
                            </p>
                            <div className="w-full h-2 bg-[#F5F5F5] rounded-full mt-2">
                                <div className="w-[40%] h-2 bg-[#8A79DF] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripBooking;