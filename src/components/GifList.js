import React from 'react';

const GifList = (props) => {
  const gifs = props.gifs.map((url, idx) => {
    return <img src={url} alt="coffee-gif" key={idx} />
  })

  return (
    <div>
      {gifs}
    </div>
  )
}

export default GifList
