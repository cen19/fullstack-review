import React from 'react';
import $ from 'jquery';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    // need to bind it when the element is rendered in order to have access
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
    $.ajax({
      url: 'http://127.0.0.1/repos/import',
      port: '1128',
      crossDomain: true,
      method: 'POST',
      error: (err) => { console.log('error sending request'); },
      success: function(data) {
        console.log('*+*+ GETTING DATA +*+*');
      }
    })
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.value} onChange={this.onChange}/>       
      <button onClick={this.search}> Add Repos </button>
    </div>) 
  }
}

export default Search;