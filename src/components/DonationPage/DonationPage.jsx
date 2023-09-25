const DonationPage = ({ data }) => {
    const { picture, category, title, text_color, category_bg_color, card_bg_color, price } = data;
    return (
        <div style={{ backgroundColor: card_bg_color }} className="flex gap-3 md:gap-6 items-center rounded-lg">
            <div>
                <img className="w-full h-full" src={picture} alt="donation page" />
            </div>
            <div className="space-y-0 md:space-y-1 lg:space-y-2">
                <div className="flex">
                    <h2 className="px-1 md:px-3 rounded" style={{ color: text_color, backgroundColor: category_bg_color }}>{category}</h2>
                </div>
                <p className="text-[#0B0B0B] text-sm lg:text-2xl font-semibold">{title}</p>
                <p className="font-semibold" style={{ color: text_color }}>${price}</p>
                <button className="text-white p-0.5 md:p-1 lg:px-4 lg:py-2 rounded text-sm lg:text-lg" style={{backgroundColor : text_color}}>View Details</button>
            </div>
        </div>
    );
};

export default DonationPage;