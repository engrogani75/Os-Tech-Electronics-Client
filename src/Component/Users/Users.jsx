import { useLoaderData } from "react-router-dom";


const Users = () => {
    const email = useLoaderData()
    console.log(email);



    return (
        <div>
            
        </div>
    );
};

export default Users;