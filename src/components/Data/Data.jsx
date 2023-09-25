import { Link } from "react-router-dom";

const Data = ({ data }) => {
    const {id, picture, category, title, text_color, category_bg_color, card_bg_color } = data;
    return (
        <div>
            <Link to={`/${id}`}><div style={{backgroundColor: card_bg_color}} className={`my-16 rounded-lg`}>
                <img className="w-full" src={picture} alt="donation-images" />
                <div className="p-5">
                    <div className="flex mb-2">
                    <h2 style={{backgroundColor:category_bg_color, color:text_color}} className='font-medium p-2 rounded-xl block'>{`${category}`}</h2>
                    </div>
                    <p style={{color:text_color}} className="text-xl font-semibold">{title}</p>
                </div>
            </div></Link>
        </div>
    );
};

export default Data;