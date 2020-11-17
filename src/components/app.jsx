import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import Giflist from './gif_list';
import giphy from 'giphy-api';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "8A43ipRRY8dtC"
    };
  }

search = (query) => {
  giphy('SZgLE5Mq6pMVrjhqQAErWcBcuRQA2gpK').search({
    q: query,
    rating: 'g',
    limit: 10,
  }, (err, res) => {
    this.setState({
      gifs: res.data
    });
  });
}

selectGif = (id) => {
  this.setState({
    selectedGifId: id
  });
}


render() {
  return (
    <div>
      <div className="left-scene">
        <SearchBar searchFunction={this.search} />
        <div className="selected-gifs">
          <Gif id={this.state.selectedGifId} />
        </div>
      </div>
        <div className="right-scene">
        <Giflist gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
    </div>
    );
  }
}

export default App;
