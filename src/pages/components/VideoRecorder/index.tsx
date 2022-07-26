import { useRef } from 'react';
import { FiPause, FiPlay, FiVolume, FiVolume2 } from 'react-icons/fi';

import usePlay from './video-call';

import * as C from './styles';
import Button from '../../../components/Button';

function VideoRecorder() {
  const videoPlayer = useRef<any>(null);

  const {
    play,
    handleTogglePlay,
    handleTimeUpdate,
    handleChangeVideoPercentage,
    handleVolumeUpdate,
    handleChangeVolumePercentage,
  } = usePlay(videoPlayer);

  return (
    <C.Container>
      <video
        ref={videoPlayer}
        loop
        onClick={handleTogglePlay}
        style={{ width: 1000 }}
        onTimeUpdate={handleTimeUpdate}
        onVolumeChange={handleVolumeUpdate}
        src="/emagrecentro-ads.mp4"
      />

      <C.FooterPlayer>
        <Button size="medium" colorStyle="filled" onClick={handleTogglePlay}>
          {play.playing ? (
            <FiPause size={20} color="#ffffff" />
          ) : (
            <FiPlay size={20} color="#ffffff" />
          )}
        </Button>

        <C.Input
          type="range"
          min="0"
          max="100"
          onChange={handleChangeVideoPercentage}
          value={play.percentage}
        />

        <Button size="medium" colorStyle="filled">
          <FiVolume2 size={20} color="#ffffff" />
        </Button>

        {/*   <C.Input
          type="range"
          min="0"
          max="100"
          onChange={handleChangeVolumePercentage}
          value={play.volume}
        /> */}
      </C.FooterPlayer>
    </C.Container>
  );
}

export default VideoRecorder;
