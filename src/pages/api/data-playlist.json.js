import { playlists, allPlaylists, songs as allSongs } from '../../lib/data';

export function GET({ params, request }) {
  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get('id');

  const playlist = allPlaylists.find((playlist) => playlist.id === id);

  const songs = allSongs.filter((song) => song.albumId === playlist?.albumId);

  return new Response(JSON.stringify({ playlist, songs }), {
    Headers: {
      'Content-Type': 'application/json',
    },
  });
}
