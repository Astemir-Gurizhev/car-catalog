import { useRef } from "react";
const VideoPlayer = () => {
  const ref = useRef<HTMLVideoElement>(null);
  const handlePlay = () => {
    ref?.current?.play();
  };
  const handlePause = () => {
    ref?.current?.pause();
  };
  return (
    <>
      {/* <button>Play</button>
      <button>Pause</button>
      <video src='' ref={ref} width={300} /> */}
    </>
  );
};

export default VideoPlayer;
