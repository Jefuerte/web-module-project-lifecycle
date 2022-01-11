import React from 'react';
import User from "./components/User";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
 state = {
   currentUser: "jefuerte",
   user: {
    avatar_url: "https://avatars.githubusercontent.com/u/91096674?v=4",
    html_url: "https://github.com/Jefuerte",
    name: "Jessica Fuerte",
    login: "Jefuerte",
    public_repos: 32,
    followers: 2,
   },
   followers: [
     {
      login: "Cheyenneb96",
      avatar_url: "https://avatars.githubusercontent.com/u/75545636?v=4",
      html_url: "https://github.com/Cheyenneb96",
     },
     {
      login: "Cheyenneb96",
      avatar_url: "https://avatars.githubusercontent.com/u/75545636?v=4",
      html_url: "https://github.com/Cheyenneb96",
     }
   ]
 }
  render() {
    return(<div>
      <h1>Github Info</h1>
      <form>
        <input placeholder="Username" />
        <button>Search</button>
      </form>
      <User user={this.state.user} />

      <FollowerList followers={this.state.followers} />
    </div>);
  }
}

export default App;
