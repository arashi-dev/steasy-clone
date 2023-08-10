"use client";

import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

type ItemProps = {
  videoSrc: string;
  posterSrc: string;
};

const Item: React.FC<ItemProps> = ({ videoSrc, posterSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      void videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="grid h-max grid-cols-[22px_1fr_22px] grid-rows-[22px_1fr_22px] md:p-5">
      <span className="col-[1/3] row-[2/4] block rounded-md bg-green-500 md:rounded-lg" />

      <div
        className="relative col-[2/4] row-[1/3]"
        onClick={() => setIsPlaying((prev) => !prev)}
      >
        <video
          ref={videoRef}
          className="rounded-md md:rounded-lg"
          poster={posterSrc}
          src={videoSrc}
          muted
          playsInline
        />

        <div
          className={clsx(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
            { "invisible opacity-0": isPlaying },
          )}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="40" fill="black"></circle>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.6194 39.5713C54.9431 39.7655 54.9431 40.2345 54.6194 40.4287L31.0912 54.5457C30.758 54.7456 30.334 54.5056 30.334 54.1169L30.334 25.8831C30.334 25.4944 30.758 25.2544 31.0912 25.4543L54.6194 39.5713Z"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

const Videos: React.FC = () => {
  return (
    <div className="mt-12 flex flex-col gap-12 md:flex-row">
      <div className="flex-1">
        <Item
          posterSrc="/video/Prepare_Poster.png"
          videoSrc="/video/prepare.mp4"
        />
      </div>

      <div className="mb-[8.5rem] flex-1 md:mt-[7.625rem]">
        <Item posterSrc="/video/Steam_Poster.png" videoSrc="/video/steam.mp4" />
      </div>
    </div>
  );
};

export default Videos;
