import { useState, useEffect, useRef } from 'react';
import { usePlayerStore } from '../store/playerStore';
import { Slider } from './Slider';

export const PauseIcon = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const PlayIcon = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

export const SoundSilenceIcon = () => (
  <svg
    fill="currentColor"
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    aria-label="Volumen apagado"
    viewBox="0 0 16 16"
  >
    <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
    <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
  </svg>
);

export const SoundIcon1 = () => (
  <svg
    fill="currentColor"
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    aria-label="Volumen alto"
    id="volume-icon"
    viewBox="0 0 16 16"
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
  </svg>
);
export const SoundIcon2 = () => (
  <svg
    fill="currentColor"
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    aria-label="Volumen alto"
    id="volume-icon"
    viewBox="0 0 16 16"
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"></path>
  </svg>
);
export const SoundIcon3 = () => (
  <svg
    fill="currentColor"
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    aria-label="Volumen alto"
    id="volume-icon"
    viewBox="0 0 16 16"
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
    <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
  </svg>
);

export const PlayBar = ({ audioRef }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', handleTimeChangue);

    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeChangue);
    };
  }, []);

  const handleTimeChangue = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const timeAdjust = (value) => {
    const segs = Math.floor(value / 60);
    const mins = Math.floor(value % 60)
      .toString()
      .padStart(2, '0');

    const totalTime = `${segs}:${mins}`;

    return totalTime;
  };

  const handleDragging = (value) => {
    if (!isDragging) {
      audioRef.current.currentTime = value;
    }
  };

  return (
    <div className="flex gap-2 text-base">
      <span className="w-8">
        {timeAdjust(currentTime) ? timeAdjust(currentTime) : '0:00'}
      </span>
      <Slider
        value={[currentTime]}
        max={audioRef?.current?.duration ?? 0}
        min={0}
        onValueChange={(value) => handleDragging(value)}
        className="w-[622px]"
      />
      <span className="w-8">
        {timeAdjust(audioRef?.current?.duration) != 'NaN:NaN'
          ? timeAdjust(audioRef?.current?.duration)
          : '-:--'}
      </span>
    </div>
  );
};

export default function Player() {
  const { currentMusic, isPlaying, setIsPlaying, volume, setVolume } =
    usePlayerStore((state) => state);
  const audioRef = useRef();

  {
    /* Volume control */
  }
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const volume1 = volume >= 0.01 && volume <= 0.33;
  const volume2 = volume > volume1 && volume <= 0.66;
  const volume3 = volume > volume2 && volume <= 1;

  const preVolumeValue = useRef(volume);

  const handleClickVolume = () => {
    if (volume < 0.1) {
      setVolume(preVolumeValue.current);
    } else {
      preVolumeValue.current = volume;
      setVolume(0);
    }
  };

  {
    /* Player and Duration */
  }
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    const { music, playlist } = currentMusic;
    if (music) {
      const src = `/music/${playlist?.id}/0${music.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.play();
    }
  }, [currentMusic]);

  const handlePlayAudio = () => {
    setIsPlaying(!isPlaying);
  };
  const { music, playlist } = currentMusic;

  return (
    <div className="flex justify-between flex-1 px-3 pt-2">
      {/* Music Viewer */}
      <div className="flex gap-4 relative w-[250px]">
        <picture className="w-14 h-14 bg-[#31323484] rounded-md">
          <img
            src={playlist?.cover}
            className=" rounded-sm"
            alt={playlist?.title}
          />
        </picture>
        <div className="flex flex-col justify-center ">
          <h1 className="text-sm font-semibold">{music?.title}</h1>
          <p className="text-xs opacity-75">{music?.artists.join(',')}</p>
        </div>
      </div>
      {/* Player and Duration */}
      <div className="flex flex-col gap-2 items-center">
        <button
          className=" bg-white  text-white p-2 rounded-full "
          onClick={() => handlePlayAudio()}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        <PlayBar audioRef={audioRef} />
      </div>
      {/* Volume control */}
      <div className="flex items-center gap-2 w-[250px] justify-end">
        <button className="" onClick={() => handleClickVolume()}>
          {volume1 ? (
            <SoundIcon1 />
          ) : volume2 ? (
            <SoundIcon2 />
          ) : volume3 ? (
            <SoundIcon3 />
          ) : (
            <SoundSilenceIcon />
          )}
        </button>
        <Slider
          onValueChange={(val) => {
            const newVal = val;
            setVolume(newVal / 100);
          }}
          type="range"
          defaultValue={[100]}
          value={[volume * 100]}
          min={0}
          max={100}
          className="w-24 h-[0.25rem] cursor-pointer accent-white hover:accent-green-600  rounded-2xl"
        ></Slider>
      </div>

      {/* audio */}
      <audio ref={audioRef}></audio>
    </div>
  );
}
