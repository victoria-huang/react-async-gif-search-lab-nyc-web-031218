import React from 'react';

const GifList = (props) => {
  const gifs = props.gifs.map((url) => {
    return (<li><img src={url} alt="coffee-gif" /></li>)
  })

  return (
    <div className="column left">
      <ul>
        {gifs}
      </ul>
    </div>
  )
}

export default GifList
