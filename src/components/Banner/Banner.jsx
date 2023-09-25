const Banner = () => {
    return (
        <div>
            <div className='py-10 md:py-36 relative'>
                <h1 className="mx-4 md:mx-0 mb-5 text-2xl md:text-5xl font-bold text-center">I Grow By Helping People In Need</h1>
                <form action="" className="flex justify-center items-center">
                    <input className="md:px-4 p-2 md:py-2 border border-[#DEDEDE] rounded-lg" type="text" name="text" id="" placeholder="Search here...." />
                    <input className="md:px-4 p-2 md:py-2 font-semibold text-white rounded-lg bg-[#FF444A]" type="submit" value="Search" />
                </form>
            </div>
        </div>
    );
};

export default Banner;