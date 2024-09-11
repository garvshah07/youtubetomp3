import React, { useState } from "react";

const Content = () => {
  const [link, setLink] = useState("");
  const [quality, setQuality] = useState("");

  const downloadHandler = async (e) => {
    e.preventDefault();
    if (link === "" || quality === "" || quality === "Select") {
      return alert(
        "Please enter the YouTube URL and choose the quality to download."
      );
    } else if (link.length <= 32) {
      return alert("Please enter a valid YouTube URL.");
    }

    const url = `https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/custom/?url=${link}&quality=${quality}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9be3f91948mshe0544002329ee6ep1be8eajsn5204e76d6ad6",
        "x-rapidapi-host": "youtube-mp3-downloader2.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    setLink("");
    setQuality("");
    console.log(quality);
  };

  return (
    <>
      <form onSubmit={downloadHandler}>
        <input
          placeholder="Paste a YouTube video link here"
          type="search"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <select value={quality} onChange={(e) => setQuality(e.target.value)}>
          <option value="">Select</option>
          <option value="320 KBPS">320 KBPS</option>
          <option value="256 KBPS">256 KBPS</option>
          <option value="192 KBPS">192 KBPS</option>
          <option value="128 KBPS">128 KBPS</option>
          <option value="64 KBPS">64 KBPS</option>
        </select>
        <button className="text-black h-2 border-red-600" type="submit">
          Convert
        </button>
      </form>
    </>
  );
};

export default Content;
