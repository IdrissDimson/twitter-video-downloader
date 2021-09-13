import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

function Home() {
  const [input, setInput] = useState('');
  let history = useHistory();

  function handleClick() {
    let expandedTweet = input.split('/');
    console.log(expandedTweet);
    if (expandedTweet[0] === 'https:') {
      let id = expandedTweet[expandedTweet.length - 1];
      console.log(id)
      history.push(`/video?link=${id.split('?')[0]}`)
    } else {
      console.log('This is not a link!');
    }
  }

  return (
    <div className="main-page">
      <section className="main-section">
        <div className="section">
          <h1>Tweet Video Downloader</h1>
        </div>
        <div>
          <p>Download your favorite Twitter videos</p>
        </div>
        <div className="search section">
          <input type="text"
            value={input}
            className="search-bar"
            placeholder="Paste the tweet link here!"
            onKeyPress={event => {
              if (event.key === 'Enter') {
                handleClick();
              }
            }}
            onInput={e => setInput(e.target.value)}
          />
          <button type="button" className="search-button" onClick={handleClick}>Tweet Search</button>
        </div>
      </section>
      <footer>
        <p> This website does not host any pirated or copyright content on its server, and all the videos that you download are downloaded to your system directly from their respective CDN servers.</p>
        Created by @idrissdimson <a href="https://www.buymeacoffee.com/idrissdimson">buy me a coffee</a>
      </footer>
    </div>
  )
}

export default Home
