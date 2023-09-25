import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between px-8 md:px-32 my-8">
            <div>
                <img className="pl-10 mb-4 md:mb-0 md:pl-0 w-[65%]" src='https://i.ibb.co/jHn7Y8j/Logo.png' alt="" />
            </div>
            <div className="flex gap-8 justify-center items-center">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] text-lg underline" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/donation"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] text-lg underline" : ""
                    }
                >
                    Donation
                </NavLink>
                <NavLink
                    to="/statistics"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] text-lg underline" : ""
                    }
                >
                    Statistics
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;