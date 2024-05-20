import { usePlayerStore } from '../store/playerStore';

import { PauseIcon, PlayIcon } from './Player';
export default function CardItem({ PlaylistId }) {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } =
    usePlayerStore((set) => set);

  const isPlayingPlaylist =
    isPlaying && currentMusic?.playlist.id == PlaylistId;

  const handlePlay = () => {
    setCurrentMusic({ playlist: PlaylistId });

    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    fetch(`/api/data-playlist.json?id=${PlaylistId}`)
      .then((res) => res.json())
      .then((data) => {
        const { playlist, songs } = data;
        setIsPlaying(true);
        setCurrentMusic({
          playlist: playlist,
          musics: songs,
          music: songs[0],
        });
      });
  };

  return (
    <button
      className="rounded-full bg-green-600 p-4"
      onClick={() => handlePlay()}
    >
      {isPlayingPlaylist ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}
