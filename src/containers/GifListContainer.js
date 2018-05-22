import React from 'react'
import key from '../giphyKey'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=coffee&api_key=${key}&limit=5`)
    .then(res => res.json())
    .then(gifs => {
      const data = gifs.data
      const gifUrls = [data[0].embed_url, data[1].embed_url, data[2].embed_url]
      return this.setState({
        gifs: gifUrls
      })
    })
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
