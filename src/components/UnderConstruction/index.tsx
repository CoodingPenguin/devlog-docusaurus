import React from "react";
import YouTube from "react-youtube";
import styles from "./styles.module.css";

export default function UnderConstruction() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🚧 공사 중 🚧</h1>
      <p>공사하는 동안 간드러지는 찰리 푸스의 노래를 들어봅시당</p>
      <p>
        <del>(자동재생(AutoPlay)와 음소거(Mute)가 적용되어 있습니다)</del>
      </p>
      <YouTube
        className={styles.youtube}
        videoId="UTTHlzfl2SM"
        opts={{
          playerVars: {
            autoplay: 1,
            mute: 1,
          },
        }}
      />
    </div>
  );
}
