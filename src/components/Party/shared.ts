import {
  addTracksToPlaylist,
  createPlaylist,
  getCurrentUserProfile,
  getPlaylist
} from 'spotify-web-sdk';

export const MOBILE_LIST_BREAKPOINT = '800px';

export async function createSpotifyPlaylist(
  tracksUris: string[],
  playlistName: string,
  isPublic: boolean
) {
  const { id } = await getCurrentUserProfile();
  const { id: playlistId } = await createPlaylist(id, playlistName, {
    public: isPublic
  });

  await addTracksToPlaylist(playlistId, tracksUris);

  return await getPlaylist(playlistId);
}
