import { a as allPlaylists, s as songs } from './_id__BsYRURne.mjs';

function GET({ params, request }) {
  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get('id');

  const playlist = allPlaylists.find((playlist) => playlist.id === id);

  const songs$1 = songs.filter((song) => song.albumId === playlist?.albumId);

  return new Response(JSON.stringify({ playlist, songs: songs$1 }), {
    Headers: {
      'Content-Type': 'application/json',
    },
  });
}

export { GET };
