import { useEffect, useState } from "react";
import { setDataToLs } from "../SaveDonationToLs/SaveDonationToLs";
import DonationPage from "../DonationPage/DonationPage";

const Donation = () => {
    const [dataPage, setDataPage] = useState([])
    const [seeMore, setSeeMore] = useState(false);

    useEffect(() => {
        const getDataFromLs = setDataToLs();
        if (getDataFromLs) {
            setDataPage(getDataFromLs);
        }
    }, []);
    return (
        <div>
            {
                <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:mx-4 px-8 md:px-32 mx-auto">
                            {
                                seeMore ? dataPage.map(data => <DonationPage key={data.id} data={data}></DonationPage>) :
                                    dataPage.slice(0, 4).map(data => <DonationPage key={data.id} data={data}></DonationPage>)
                            }

                        </div>
                        <div className="flex justify-center items-center">
                            {
                                dataPage.length > 4 && <button onClick={() => setSeeMore(!seeMore)} className={seeMore ? 'hidden' :
                                    'my-10 font-semibold text-white bg-[#009444] rounded-lg px-3 py-1 md:px-6 md:py-3'
                                }>See All</button>
                            }
                        </div>
                </div>
            }
            </div>
    );
};

export default Donation;