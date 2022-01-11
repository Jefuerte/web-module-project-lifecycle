import React from 'react';

class App extends React.Component {
  render() {
    return(<div>
      <h1>Github Info</h1>
      <form>
        <input placeholder="Username" />
        <button>Search</button>
      </form>
      <div id="userInfo">
      <img src="https://avatars.githubusercontent.com/u/91096674?v=4"/>
      <a target="_blank" href="https://github.com/Jefuerte"><h3>Jessica Fuerte</h3></a>
      <p>(Jefuerte)</p>
      <p>Total Repos: 32</p>
      <p>Total Followers: 2</p>
      </div>

      <div id="followers">
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/85258866?v=4" />
         <a target="_blank" href="https://github.com/peterdavidconley"> <p>Cheyenneb96</p></a>
        </div>
      </div>

      <div id="followers">
        <div className="follower">
          <img src="https://avatars.githubusercontent.com/u/75545636?v=4" />
         <a target="_blank" href="https://github.com/Cheyenneb96"> <p>Cheyenneb96</p></a>
        </div>
      </div>
    </div>);
  }
}

export default App;
