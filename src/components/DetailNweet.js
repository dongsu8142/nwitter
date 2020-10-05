import React from "react";

const DetailNweet = ({ nweetObj }) => {
  return (
    <>
      <h4>{nweetObj.text}</h4>
      {nweetObj.attachmentUrl && (
        <>
          <br />
          <img src={nweetObj.attachmentUrl} alt="사진" />
        </>
      )}
    </>
  );
};

export default DetailNweet;
