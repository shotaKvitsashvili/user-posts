import { useEffect, useState } from "react";

import ContentLoader from "react-content-loader";

const CommentLoader = () => (
    <ContentLoader>
        <rect x="0" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="0" y="37" rx="4" ry="4" width="250" height="13" />
        <rect x="0" y="67" rx="4" ry="4" width="500" height="43" />
    </ContentLoader>
);

export default function UserComments(props) {

    const [userComments, setUserComments] = useState([])

    useEffect(() => {
        async function getUsersComments() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
            const usersComments = await response.json();
            return usersComments;
        }

        getUsersComments().then(userComments => {
            setUserComments(userComments)
        });

    }, []);

    const displayUserComments = userComments.filter(e => e.postId === props.userPostId);

    if (userComments.length > 0) {
        return (
            <div>
                <div className="p-2">
                    <h2>Comments</h2>
                </div>

                {
                    displayUserComments.map((val, ind) => {
                        return <div key={ind}>
                            <h2>Postid: {val.postId}</h2>
                            <h2>Id: {val.id}</h2>
                            <div className="px-2 py-1">
                                <span>User Name: {val.name}</span>
                            </div>

                            <div className="px-2 py-1">
                                <span><i>{val.email}</i></span>
                            </div>

                            <div className="p-2">
                                {val.body}
                            </div>

                            <hr />
                        </div>
                    })
                }
            </div>
        )
    } else {
        return (
            <div>
                <div className="p-2">
                    <h2>Comments</h2>
                </div>
                <div>
                    <div className="p-2">
                        <CommentLoader />
                    </div>
                </div>
            </div>
        )
    }

}