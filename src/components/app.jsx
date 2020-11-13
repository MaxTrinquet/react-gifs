import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import Giflist from './gif_list';


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const gifs = [
      {id: "8A43ipRRY8dtC"} ,
      {id: "11ln5enb6p1YNG" } ,];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gifs">
            <Gif id="8A43ipRRY8dtC" />
          </div>
        </div>
          <div className="right-scene">
          <Giflist gifs={gifs} />
          </div>
      </div>
    );
  }
}

export default App;
