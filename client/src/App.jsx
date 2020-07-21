import React, { useEffect, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";
import Post from "./components/Post";
import Posts from "./components/Posts";
import PostEdit from "./components/PostEdit";
import PostDetail from "./components/PostDetail";
import PostCreate from "./components/PostCreate"
import { verifyUser } from "./services/user";

function App() {
  const [user, setUser] = useState();

  async function getUserToState() {
    let verifiedUser = await verifyUser();
    console.log(verifiedUser);

    if (verifiedUser) {
      setUser(verifiedUser.user);
    }
  }

  useEffect(() => {
    getUserToState();
  }, []);

  return (
    <div className="app">
      <Route exact path="/" render={() => <Home user={user} />} />
      <Route exact path="/posts" render={() => <Posts user={user} />} />
      <Route
        exact
        path="/sign-up"
        render={() => <SignUp setUserOne={setUser} />}
      />
      <Route
        exact
        path="/sign-in"
        render={() => <SignIn setUserOne={setUser} />}
      />
      <Route exact path="/sign-out" render={() => <SignOut />} />
      <Route exact path="/post" render={() => <Post />} />
      <Route
        exact
        path="/add-post"
        render={() => (user ? <PostCreate /> : <Redirect to="#" />)}
      />
      <Route
        exact
        path="/post/:id/edit"
        render={() => (user ? <PostEdit /> : <Redirect to="#" />)}
      />
      <Route exact path="/post/:id" render={() => <Post user={user} />} />
    </div>
  );
}

export default App;
