import { React, useState } from "react";
import Song from "./song";

const fullPlaylist = (props) => {
  const [thumbnail, setThumbnail] = useState();

  const displaySongs = () => {
    let songNumber = 0;
    return props.songs.length != 0 ? (
      props.songs.map((song) => {
        return (
          <Song
            key={song.song_id}
            data={song}
            func={pull_data}
            songNum={songNumber++}
          />
        );
      })
    ) : (
      <> </>
    );
  };

  const pull_data = (data) => {
    setThumbnail(`https://img.youtube.com/vi/${data}/0.jpg`);
  };

  return (
    <div className="flex flex-col items-center  w-full">
      <div className=" w-full max-w-3xl">
        <div className="flex flex-col w-full  pt-4">
          <img
            className="self-center rounded-lg object-cover h-[220px] w-[400px]"
            src={thumbnail}
          />

          <div className="flex flex-col  text-[#000] font-bold px-[20px] pt-[48px] pb-2  ">
            <div className="text-[28px] mb-2">{props.data.title}</div>
            <div>{props.data.username}</div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-3xl justify-center pt-4 px-[20px] font-medium">
        <button className="w-full h-[36px] rounded-3xl mr-1">Play All</button>
        <button className="w-full h-[36px] rounded-3xl ml-1">Shuffle</button>
      </div>

      <ul className="p-4 w-full max-w-3xl">{displaySongs()}</ul>
    </div>
  );
};

export default fullPlaylist;
