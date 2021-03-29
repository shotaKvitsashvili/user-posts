import { useState } from 'react';

import Users from './users/Users';
import Userposts from './user posts/UserPosts';
import UserComments from './user comments/UserComments';

function App() {

  const [users, setusers] = useState([]);
  const userId = [];
  const [userPostId, setUserPostId] = useState(0);

  const getUsers = (user) => {
    setusers(user);
  }

  const getUserPostsId = (postId) => {
    setUserPostId(postId + 1);
    console.log(userPostId);
  }

  users.map(e => {
    return userId.push(e.id);
  });

  // const filteredUserName = users.filter(e => {
  //   return e.id === 1;
  // });


  return (
    <div className="container-fluid">
      <Users getUsers={getUsers} />

      <div className="row">
        <div className="col-5">
          <Userposts getUserPostsId={getUserPostsId} />
        </div>

        <div className="col-7">
          <UserComments userPostId={userPostId} />
        </div>
      </div>
    </div>
  );
}

export default App;
