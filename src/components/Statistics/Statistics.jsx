import { useEffect, useState } from "react";
import PieChartStyle from "./PieChart";
import { setDataToLs } from "../SaveDonationToLs/SaveDonationToLs";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
    const [donation,setDonation] = useState(0);
    const [totalDonation,setTotalDonation] = useState(0);
    const loadDonation = useLoaderData();

    useEffect(()=>{
        const getDonationId = setDataToLs();
        setDonation(getDonationId.length);
        const toTallDonation = loadDonation.length - getDonationId.length;
        setTotalDonation(toTallDonation)
    },[loadDonation])

   

    return (
        <div className=" max-w-screen-xl mx-auto gap-4 px-6">
           
           <PieChartStyle donation={donation} totalDonation={totalDonation}></PieChartStyle>
        </div>
    );
};

export default Statistics;