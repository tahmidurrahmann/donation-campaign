import { setDataToLs } from "../SaveDonationToLs/SaveDonationToLs";

const Statistics = () => {
    const myDonation = setDataToLs();
    const array = [
        {
            'myDonationNumber': 'myDonation',
            'totalDonationNumber': 12,
        }
    ]
    return (
        <div>
            <h1>all donation data : {myDonation.length}</h1>
        </div>
    );
};

export default Statistics;