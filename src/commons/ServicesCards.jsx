

const ServicesCards = ({ index, img, title, description }) => {
    const isComponent = typeof img === "object";
    return (
            <div
                className={`flex flex-col gap-4 items-center justify-end transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_10px_15px_-4px_rgba(0,0,0,0.1)] hover:rounded-[36px] hover:pb-6 hover:-translate-y-1`}
            >
                <div>
                    {img && (
                        isComponent ? img : <img src={img} alt={title} />
                    )}
                </div>
                <h1 className="text-[#1E1D4C] text-base lg:text-[20px] font-[600] font-[Open Sans]">
                    {title}
                </h1>
                <p className="text-[#5E6282] text-sm lg:text-[16px] font-[400] font-[Poppins] text-wrap text-center max-w-[70%]">
                    {description}
                </p>
            </div>
    )
}

export default ServicesCards;