import { NavigationArrow } from "../assets/svgs";


const DestinationCards = ({ img, title, duration, price }) => {
    const isComponent = typeof img === "object";
    return (
        <div
            className="flex flex-col max-w-[315px] h-[457px] rounded-[24px] shadow-[0_15px_30px_1px_rgba(0,0,0,0.05)]"
        >
            {img && (
                isComponent ? img : <img src={img} alt={title} className="w-full h-full object-cover rounded-t-[24px]" />
            )}
            <div className="grid grid-cols-2 px-4 py-9 gap-3 rounded-b-[24px] items-end mt-auto">
                <h1 className="text-[#5E6282] text-sm lg:text-[18px] font-[400] font-[Poppins]">
                    {title}
                </h1>
                <p className="text-[#5E6282] text-sm lg:text-[18px] font-[400] font-[Poppins] text-right">
                    {price}
                </p>
                <p className="text-[#5E6282] text-sm lg:text-[16px] font-[400] font-[Poppins] flex flex-row gap-2">
                    <NavigationArrow />
                    {duration}
                </p>
            </div>
        </div>
    )
}

export default DestinationCards;