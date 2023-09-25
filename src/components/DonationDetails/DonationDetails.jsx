import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetail from "../DonationDetail/DonationDetail";

const DonationDetails = () => {
    const [dataOfDonation, setDataOfDonation] = useState([]);
    const donationData = useLoaderData();
    const {id} = useParams();
    // const idInt = parseInt(id);
    // console.log(id, donationData);
    useEffect(() => {
        const findDonation = donationData.find(donation => donation.id == id);
        setDataOfDonation(findDonation);
    }, [donationData, id]);
    // console.log(dataOfDonation);
    return (
        <div>
            <DonationDetail dataOfDonation={dataOfDonation}></DonationDetail>
        </div>
    );
};

export default DonationDetails;