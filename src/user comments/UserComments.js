import { useEffect, useState } from "react";

import ContentLoader from "react-content-loader";
import { Scrollbars } from 'react-custom-scrollbars';

import './styles.css';

const CommentLoader = () => (
    <ContentLoader>
        <rect x="0" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="0" y="37" rx="4" ry="4" width="250" height="13" />
        <rect x="0" y="67" rx="4" ry="4" width="500" height="43" />
    </ContentLoader>
);

export default function UserComments(props) {

    const [userComments, setUserComments] = useState([]);
    const [userReply, setUserReply] = useState([]);
    const [id, setId] = useState(0);

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
    let test = displayUserComments.find(e => e.id === id);
    const filterReply = userReply.filter(e => e);
    // let id = 0;
    // test.reply = filterReply;
    console.log(test);


    if (userComments.length > 0) {
        return (
            <div className="comment">
                <Scrollbars
                    renderThumbVertical={props => <div {...props} className="thumb-vertical" />}
                    thumbMinSize={150}
                    style={{ height: '100vh' }}
                    className="posts-scroll-container">
                    <div className="p-2">
                        <h2>Comments for post {props.userPostId}</h2>
                    </div>

                    {
                        displayUserComments.map((val, ind) => {
                            return <div key={ind}>
                                <h1>id: {val.id}</h1>
                                <div className="px-2 py-1">
                                    <span>User Name: {val.name}</span>
                                </div>

                                <div className="px-2 py-1">
                                    <span><i>{val.email}</i></span>
                                </div>

                                <div className="p-2">
                                    {val.body}
                                </div>

                                <div className={filterReply.length ? 'd-block py-2 px-5 comment__reply' : 'd-none'}>
                                    <div>
                                        {
                                            ind === id ? filterReply.map((v, i) => {
                                                return <span key={i}>
                                                    {v}
                                                    <br />
                                                </span>
                                            }) : null
                                        }
                                    </div>
                                </div>

                                <div className="p-2">
                                    <div className="comment__add-reply py-1">
                                        <input
                                            type="text"
                                            placeholder="Add reply.."
                                            onKeyDown={
                                                (event) => {
                                                    if (event.keyCode === 13) {
                                                        setUserReply(
                                                            [...userReply, event.target.value]
                                                        )
                                                        event.target.value = '';
                                                        setId(ind + 1);
                                                    }
                                                }
                                            } />
                                    </div>
                                </div>

                                <hr />
                            </div>
                        })
                    }
                </Scrollbars>
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