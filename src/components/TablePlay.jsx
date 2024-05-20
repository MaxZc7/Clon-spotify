import { usePlayerStore } from '@/store/playerStore';

const PauseIcon = () => (
  <svg
    fill="currentColor"
    role="img"
    height="13"
    width="13"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

const PlayIcon = () => (
  <svg
    fill="currentColor"
    role="img"
    height="13"
    width="13"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

export default function tablePlay({ albumId, songId }) {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } =
    usePlayerStore((set) => set);

  const isPlayingSong =
    isPlaying &&
    currentMusic?.music?.id == songId &&
    currentMusic?.playlist.id == albumId;

  const handlePlay = () => {
    setCurrentMusic({ playlist: albumId });

    if (isPlayingSong) {
      setIsPlaying(false);
      return;
    }
    fetch(`/api/data-playlist.json?id=${albumId}`)
      .then((res) => res.json())
      .then((data) => {
        const { playlist, songs } = data;
        setIsPlaying(true);
        setCurrentMusic({
          playlist: playlist,
          musics: songs,
          music: songs[songId - 1],
        });
      });
  };
  return (
    <button onClick={() => handlePlay()}>
      {isPlayingSong ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}
