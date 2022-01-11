import React from 'react';
import axios from 'axios';
import User from "./components/User";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
 state = {
   currentUser: "jefuerte",
   user: {
      
   },
   followers: [
   ]
 }

 componentDidMount () {
   axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then(resp=> {
     this.setState({
       ...this.state,
       user: resp.data
     })
    })
 }

componentDidUpdate (prevProps, prevState) {
  if(this.state.user !== prevState.user) {
    axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
    .then(resp=> {
      
      this.setState({
       ...this.state,
       followers: resp.data
      })
    })
  }
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
