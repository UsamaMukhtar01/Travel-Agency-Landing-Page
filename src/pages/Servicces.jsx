import { BestFlights, Customization, Weather } from "../assets/svgs"
import localEvents from "../assets/LocalEvents.png"
import ServicesCards from "../commons/ServicesCards";

const Services = () => {
    const serviceData = [
        {
            img: <Weather />,
            title: "Calculated Weather",
            description: "Built Wicket longer admire do barton vanity itself do in it."
        },
        {
            img: <BestFlights />,
            title: "Best Flights",
            description: "Engrossed listening. Park gate sell they west hard for the."
        },
        {
            img: localEvents,
            title: "Local Events",
            description: "Barton vanity itself do in it. Preferd to men it engrossed listening. "
        },
        {
            img: <Customization />,
            title: "Customization",
            description: "We deliver outsourced aviation services for military customers"
        },
    ]

    return (
        <div className="flex flex-col items-center gap-2 mt-[105px]">
            <h2 className="text-[#5E6282] text-[18px] font-[600] font-[Poppins]">
                CATEGORY
            </h2>
            <p className="text-[#14183E] text-4xl lg:text-[50px] font-[700] font-[Volkhov] pb-8">
                We Offer Best Services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
                {serviceData.map((item, index) => {
                    return (
                        <ServicesCards
                            key={index}
                            index={index}
                            img={item.img}
                            title={item.title}
                            description={item.description}
                        />

                    )
                })
                }
            </div>
        </div>
    )
}

export default Services;