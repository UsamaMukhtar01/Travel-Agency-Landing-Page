import tripCardImage from "../assets/tripCardImage.png";
import alitalia from '../assets/alitalia.svg';
import axon from '../assets/axon.svg';
import expedia from '../assets/expedia.svg';
import jetstar from '../assets/jetstar.svg';
import qantus from '../assets/qantus.svg';



const Partners = () => {

    return (
        <div className="flex justify-center items-center py-20">
            <div className="flex flex-wrap items-center md:justify-between gap-8 lg:gap-16 w-full">
                <img src={axon} className="" />
                <img src={jetstar} className="" />
                {/* <div className="relative">
                </div> */}
                    {/* <div className="relative bg-white px-10 py- rounded-2xl shadow-xl">
                    </div> */}
                        <img src={expedia} className="" />
                <img src={qantus} className="" />
                <img src={alitalia} className="" />
            </div>
        </div>
    );
}

export default Partners;