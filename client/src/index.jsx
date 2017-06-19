import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  
  }

  search (term) {
    console.log(`${term} was searched`);
    // todo - new position for the POST

    $.ajax({
      url: 'http://127.0.0.1:1128/repos/import',
      method: 'POST',
      data: {username: `${term}`},
      // contentType: 'application/json', // not needed until bodyParser.json works
      error: (err) => { console.log('error sending request to express server'); },
      success: function(data) {
        console.log(data);
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));