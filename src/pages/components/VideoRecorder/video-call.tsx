import { FormEvent, useEffect, useState } from 'react';

function usePlay(videoPlayer: any) {
  const [play, setPlay] = useState({
    playing: true,
    percentage: 0,
    volume: 100,
  });

  useEffect(() => {
    play.playing ? videoPlayer.current.play() : videoPlayer.current.pause();
  }, [play.playing, videoPlayer]);

  function handleTogglePlay() {
    setPlay({
      ...play,
      playing: !play.playing,
    });
  }

  function handleVolumeUpdate() {
    const currentPercentageVolume =
      (videoPlayer.current.value / videoPlayer.current?.currentVolume) * 100;

    setPlay({
      ...play,
      volume: currentPercentageVolume,
    });
  }

  function handleChangeVolumePercentage(e: FormEvent<any>) {
    const currentPercentageVolume = e.currentTarget.value;
    videoPlayer.current.volume = currentPercentageVolume / 100;

    setPlay({
      ...play,
      volume: currentPercentageVolume,
    });
  }

  function handleTimeUpdate() {
    const currentPercentage =
      (videoPlayer.current?.currentTime / videoPlayer.current?.duration) * 100;

    setPlay({
      ...play,
      percentage: currentPercentage,
    });
  }

  function handleChangeVideoPercentage(e: FormEvent<any>) {
    const currentPercentageValue = e.currentTarget.value;

    videoPlayer.current.currentTime =
      (videoPlayer.current?.duration / 100) * currentPercentageValue;

    setPlay({
      ...play,
      percentage: currentPercentageValue,
    });
  }

  return {
    play,
    handleTogglePlay,
    handleTimeUpdate,
    handleChangeVideoPercentage,
    handleVolumeUpdate,
    handleChangeVolumePercentage,
  };
}

export default usePlay;
