import { useEffect, useState } from "react";


export default function Users(props) {

    const [users, setusers] = useState([])

    useEffect(() => {
        async function getUsersList() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const usersList = await response.json();
            return usersList;
        }

        getUsersList().then(user => {
            setusers(user)
        });
    }, []);

    if (users.length > 0) {

        props.getUsers(users);

        return (
            <div></div>
        )
    } else {
        return <div></div>
    }
}