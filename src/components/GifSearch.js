import React from 'react'

export default class GifSearch extends React.Component {
  state = {
    searchValue: ""
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.searchValue)
  }

  render() {
    return (
      <div className="column right">
        <form onSubmit={this.handleSearch} >
          <div className="form-group col-xs-7">
            <label htmlFor="search">Enter a Search Term:</label>
            <input type="text" className="form-control" id="search" onChange={this.handleChange} value={this.state.searchValue} />
            <button type="submit" className="btn btn-success">Find Gifs</button>
          </div>
        </form>
      </div>
    )
  }
}
