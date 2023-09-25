import { handleDonate } from '../SaveDonationToLs/SaveDonationToLs';
import './DonationDetail.css'
const DonationDetail = ({ dataOfDonation }) => {
    const { picture, text_color , title, price, description } = dataOfDonation;
    return (
        <div className="px-8 md:px-36 mx-auto">
            <div className="flex justify-center items-center mt-16 relative">
                <img className="w-full" src={picture} alt="" />
                <div className="absolute detail text-xl flex p-3 md:p-6 lg:p-9">
                    <button onClick={()=>handleDonate(dataOfDonation)} className='text-base md:text-xl py-2 px-3 md:py-4 md:px-6 rounded-xl text-white font-semibold' style={{backgroundColor:text_color}}>Donate ${price}</button>
                </div>
            </div>
            <div>
                <h2 className="text-[#0B0B0B] text-4xl font-bold my-10">{title}</h2>
                <h1 className="mb-10 text-[#0B0B0BB2]">{description}</h1>
            </div>
        </div>
    );
};

export default DonationDetail;