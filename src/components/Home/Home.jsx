import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Home.css'
import Data from '../Data/Data';
const Home = () => {
    const donationData = useLoaderData();
    return (
        <div>
            <div className='background bg-slate-200 bg-blend-screen'>
            <Banner></Banner>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 lg
           
           md:px-16 lg:px-32'>
                {
                    donationData.map(data => <Data data={data} key={data.id}></Data>)
                }
            </div>
        </div>
    );
};

export default Home;