import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

function Downloader(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});

  const urlParams = new URLSearchParams(useLocation().search);

  useEffect(() => {
    fetch(`https://simple-twitter-ap.herokuapp.com/?id=${urlParams.get('link')}`)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result)
          setIsLoaded(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  console.log(items)
  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    if (items.extended_entities) {
      return (
        <div className="main-page">
          <section className="main-section">
            <h1>Twitter Video</h1>
            <img src={items.extended_entities.media[0].media_url} alt="Requested media from Twitter" />
            <p>
              Link to Video to download
            </p>
            <a
              className="search-button download"
              href={items.extended_entities.media[0].video_info.variants[1].url}
              target="_blank"
              rel="noreferrer"
            >Click Here</a>
            <p>
              <a href="/">Go Back</a>
            </p>
          </section>
          <footer>
            <p> This website does not host any pirated or copyright content on its server, and all the videos that you download are downloaded to your system directly from their respective CDN servers.</p>
            Created by @idrissdimson <a href="https://www.buymeacoffee.com/idrissdimson">buy me a coffee</a>
          </footer>
        </div>
      )
    } else {
      return (
        <div>
          <section className="main-section">
            <h1>Twitter Video</h1>
            It appears that content cannot be downloaded. Try another tweet!
            <p>
              <a href="/">Go Back</a>
            </p>
            {error}
          </section>
          <footer>
            <p> This website does not host any pirated or copyright content on its server, and all the videos that you download are downloaded to your system directly from their respective CDN servers.</p>
            Created by @idrissdimson <a href="https://www.buymeacoffee.com/idrissdimson">buy me a coffee</a>
          </footer>
        </div>)
    }
  }
}
export default Downloader
