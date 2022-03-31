import React, { useState, useEffect } from "react";
import axios from "axios";

import { instagramData } from "../../constants";
import "./Instagram.css";

const Instagram = () => {
  const [iData, setiData] = useState(null);
  let content = null;
  let url =
    "https://graph.instagram.com/" +
    instagramData.instagram.userId +
    "/media?fields=media_url,permalink&access_token=" +
    instagramData.instagram.accessToken;

  useEffect(() => {
    axios.get(url).then((response, error) => {
      if (error) {
        throw error;
      } else {
        setiData(response.data);
      }
    });
  }, [url]);

  if (iData) {
    content = (
      <div id="instagram-section">
        <h2>
          <a id="instagram-header" href="https://www.instagram.com/beralashnz/">
            @beralashnz
          </a>
        </h2>
        <div id="instagram-wrapper" className="row">
          {iData.data.length > 0 &&
            iData.data.map(
              (data, index) =>
                index < 8 && (
                  <div className="posts">
                    <a href={data.permalink}>
                      <img src={data.media_url} alt="instagram"></img>
                    </a>
                  </div>
                )
            )}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};
export default Instagram;
