import { useEffect, useState } from "react";

import ContentLoader from "react-content-loader";
import { Scrollbars } from 'react-custom-scrollbars';

import './styles.css';

const PostsLoader = () => (
    <ContentLoader>
        <rect x="0" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="0" y="47" rx="4" ry="4" width="500" height="63" />
    </ContentLoader>
);


export default function Userposts(props) {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        async function getUsersPosts() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const usersPosts = await response.json();
            return usersPosts;
        }

        getUsersPosts().then(userpost => {
            setUserPosts(userpost)
        });

    }, []);

    if (userPosts.length > 0) {
        return (
            <Scrollbars
                renderThumbVertical={props => <div {...props} className="thumb-vertical" />}
                thumbMinSize={150}
                style={{ height: '100vh' }}
                className="posts-scroll-container">
                <div className="p-2">
                    <h2>Posts</h2>
                </div>

                {
                    userPosts.map((val, ind) => {
                        return <div className="posts pr-2">
                            <div key={ind}>
                                <div className="p-2">
                                    <span className="posts__title">Title: {val.title}</span>
                                </div>

                                <div className="p-2">
                                    <p className="posts__body">{val.body}</p>
                                </div>

                                <div className="px-2">
                                    <div className="p-2 posts__button">
                                        <div>See comments</div>
                                    </div>
                                </div>

                                <hr />
                            </div>
                        </div>
                    })
                }
            </Scrollbars>
        )
    } else {
        return (
            <div>
                <div className="p-2">
                    <h2>Posts</h2>
                </div>
                <div>
                    <div className="p-2">
                        <PostsLoader />
                    </div>
                </div>
            </div>
        )
    }
}

