import "./styles.css";
import { useState } from "react";

const musicDB = {
  English: [
    {
      songName: "Despacito Remix",
      playbackSinger: "Justin Bieber",
      movie: "Independent Album"
    },

    {
      songName: "Friends",
      playbackSinger: "Anne-Marie",
      movie: "Independent Album"
    },
    {
      songName: "Memories",
      playbackSinger: "Maroon",
      movie: "Independent Album"
    }
  ],
  Hindi: [
    {
      songName: "Agar Tum Saath Ho",
      playbackSinger: "Arijit Singh",
      movie: "Tamasha"
    },
    {
      songName: "Channa Mereya",
      playbackSinger: "Arijit Singh",
      movie: "Ae Dil Hai Mushkil"
    },
    {
      songName: "Kalank",
      playbackSinger: "Arijit Singh",
      movie: "Kalank"
    }
  ],
  Tamil: [
    {
      songName: "Yaar Azhaippadhu",
      playbackSinger: "Sid Sriram",
      movie: "Maara"
    },
    {
      songName: "Rendu Kaadhal",
      playbackSinger: "Anirudh Ravichander",
      movie: "Rendu Kaadhal"
    },
    {
      songName: "Thangamey",
      playbackSinger: "Murugavel",
      movie: "Paava Kadhaigal"
    }
  ]
};

export default function App() {
  const [selectedSongLang, setSongLang] = useState("English");
  function clickSongLangHandler(songs) {
    setSongLang(songs);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span role="img" aria-label="emoji with headphone">
          🎧{" "}
        </span>{" "}
        MusicOnLoop
      </h1>
      <p>Checkout my favorite Songs</p>

      <div>
        {Object.keys(musicDB).map((songs) => (
          <button
            id="click-btn"
            onClick={() => clickSongLangHandler(songs)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {songs}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedSongLang].map((song) => (
            <li
              key={song.songName}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.songName}</div>
              <div style={{ fontSize: "smaller" }}> {song.playbackSinger} </div>
              <div style={{ fontSize: "smaller" }}> {song.movie} </div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <p>
          <span role="img" aria-label="emoji with Red Heart">
            Made with ❤️ by Vicki
          </span>
        </p>
      </footer>
    </div>
  );
}
