import { setDataToLs } from "../SaveDonationToLs/SaveDonationToLs";

const Donation = () => {
    const getDataFromLs = setDataToLs();
    console.log(getDataFromLs);
    return (
        <div>
            
        </div>
    );
};

export default Donation;