import React from 'react'
import key from '../giphyKey'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=coffee&api_key=${key}&limit=5`)
    .then(res => res.json())
    .then(gifs => {
      const data = gifs.data
      const gifUrls = [data[0].images.fixed_height.url, data[1].images.fixed_height.url, data[2].images.fixed_height.url]
      return this.setState({
        gifs: gifUrls
      })
    })
  }

  handleSubmit = (searchValue) => {
    let searchTerm;

    if (searchValue) {
      searchTerm = searchValue.toLowerCase().split(' ').join('+');
    } else {
      searchTerm = "coffee"
    }

    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${key}&limit=5`)
    .then(res => res.json())
    .then(gifs => {
      const data = gifs.data
      const gifUrls = [data[0].images.fixed_height.url, data[1].images.fixed_height.url, data[2].images.fixed_height.url]
      this.setState({
        gifs: gifUrls
      })
    })
  }

  render() {
    return (
      <div className="row">
        <GifList gifs={this.state.gifs} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
