import DestinationCards from "../commons/DestinationCards";

const Destinations = () => {

    const destinationsData = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4S-xLqS6-JY3RKY0DyXPYXNiksz0fppfvg&s",
            title: "Rome, Italy",
            duration: "10 Days Trip",
            price: "$5,42k",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0Ys3b3AR9ueX_7-BQkAfbagmgAjDTYaFIQ&s",
            title: "London, UK",
            duration: "12 Days Trip",
            price: "$4.2k",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HWlvXMIFc--XY1zXMsoHyUxmgOOtP8_XWg&s",
            title: "Full Europe",
            duration: "28 Days Trip",
            price: "$15k",
        }
    ]
    return (
        <div className="bg-red-10 flex flex-col items-center gap-2 mt-[105px] ">
            <h1 className="text-[#5E6282] text-lg lg:text-[18px] font-[600] font-[Poppins]">
                Top Selling
            </h1>
            <p className="text-[#14183E] text-4xl lg:text-[50px] font-[700] font-[Volkhov] pb-8">
                Top Destinations
            </p>
            <div className="flex flex-wrap gap-10 justify-center md:justify-between w-full">
                {destinationsData.map((destination, index) => {
                    return (
                        <DestinationCards
                            key={index}
                            img={destination.img}
                            title={destination.title}
                            duration={destination.duration}
                            price={destination.price}
                        />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Destinations;