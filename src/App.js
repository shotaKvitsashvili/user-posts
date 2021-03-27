import { useState } from 'react';

import Users from './users/Users';
import Userposts from './user posts/UserPosts';
import UserComments from './user comments/UserComments';
import AddComment from './add comment/AddComment';

function App() {

  const [users, setusers] = useState([]);
  const userId = [];

  const getUsers = (user) => {
    setusers(user);
  }

  users.map(e => {
    return userId.push(e.id);
  });

  // const filteredUserName = users.filter(e => {
  //   return e.id === 1;
  // });

  console.log(users);

  return (
    <div className="container-fluid">
      <Users getUsers={getUsers} />

      <div className="row">
        <div className="col-5">
          <Userposts />
        </div>

        <div className="col-7">
          <UserComments />
          <AddComment />
        </div>
      </div>
    </div>
  );
}

export default App;
