import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Data from '../Data/Data';
import { useEffect, useState } from 'react';
const Home = () => {
    const donationData = useLoaderData();

    const [allData, setAllData] = useState([]);
    
    const handleSubmit = e => {
        e.preventDefault();
        const value = e.target.text.value;
        const filterData = donationData.filter(data => data.category === value);
        setAllData(filterData);
    }
     useEffect(()=>{
        setAllData(donationData)
     },[donationData]);
    return (
        <div>
            <div className='background h-[200px] md:h-[400px] lg:h-[600px] bg-slate-200 bg-blend-screen'>
                <div className='relative py-16 md:py-32  lg:py-60'>
                    <h1 className="mx-4 md:mx-0 mb-5 text-2xl md:text-5xl font-bold text-center">I Grow By Helping People In Need</h1>
                    <form onSubmit={handleSubmit} action="" className="flex justify-center items-center">
                        <input className="md:px-4 p-2 md:py-2 border border-[#DEDEDE] rounded-lg" type="text" name="text" id="" placeholder="Search here...." />
                        <input className="md:px-4 p-2 md:py-2 font-semibold text-white rounded-lg bg-[#FF444A]" type="submit" value="Search" />
                    </form>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-6 px-8 md:px-16 lg:px-32'>
                {
                    allData.map(data => <Data data={data} key={data.id}></Data>)
                }
            </div>
        </div>
    );
};

export default Home;