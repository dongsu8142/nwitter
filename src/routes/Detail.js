import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import DetailNweet from "components/DetailNweet";

const Detail = ({ match }) => {
  const [nweets, setNweets] = useState([]);
  useEffect(() => {
    dbService
      .collection("nweets")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const nweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNweets(nweetArray);
      });
  }, []);
  return (
    <div className="detail_nweet">
      {nweets
        .filter((nweet) => nweet.id === match.params.id)
        .map((nweet, key) => (
          <DetailNweet key={key} nweetObj={nweet} />
        ))}
    </div>
  );
};

export default Detail;
