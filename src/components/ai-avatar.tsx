import { useRef, useEffect } from "react";

interface AIAvatarProps {
  isSpeaking: boolean;
}

export function AIAvatar({ isSpeaking }: AIAvatarProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isSpeaking) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isSpeaking]);

  return (
    <div className="relative w-32 h-32 mx-auto mb-6">
      {/* Gradient border effect */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 animate-pulse"
        style={{ padding: "2px" }}
      >
        {/* Video container */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
          <video
            ref={videoRef}
            className="absolute w-[150%] h-[150%] object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://storage.googleapis.com/eleven-public-cdn/video/voices/nicole.mp4"
            loop
            muted
            playsInline
          />
          {/* Overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>

      {/* Status indicator */}
      <div
        className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
          isSpeaking ? "bg-green-500" : "bg-blue-500"
        }`}
      />
    </div>
  );
}
