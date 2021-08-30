import React, { useEffect } from "react";
import Hls from "hls.js";

const RefreshingImage = (props) => {
  const videoElRef = React.useRef(null);
  const videoSrc = props.imgUrl;

  useEffect(() => {
    const videoEl = videoElRef.current;
    videoEl.onloadedmetadata = () => videoEl.play();
    if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
      videoEl.src = videoSrc;
      //
      // If no native HLS support, check if HLS.js is supported
      //
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(videoEl);
      hls.on(Hls.Events.MANIFEST_PARSED, () => videoEl.play());
    }
  }, []);

  return (
    <video
      crossOrigin="anonymous"
      autoPlay
      controls
      muted="muted"
      ref={videoElRef}
    ></video>
  );
};
export default RefreshingImage;
