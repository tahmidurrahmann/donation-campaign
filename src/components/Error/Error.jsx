import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="text-center">
                <p className="text-xl">
                    <i>{error.statusText || error.message}</i>
                </p>
                {
                    error.status === 404 && <div>
                         <h1 className="text-xl">Page Not Found!</h1>
                    </div>
                }
            </div>
        </div>
    );
};

export default Error;