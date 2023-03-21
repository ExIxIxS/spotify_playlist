/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/playlist-page.scss'

fetch('./src/pages/playlist-page/assets/json/playlist.json')
    .then(response =>  response.json())
    .then(playlist => {
      document.querySelector('.playlist-page-main-component__playlist')
        .appendChild(createPlaylistContent(playlist));
    })
    .catch((e) => console.log(e));


function createPlaylistContent(playlist) {
  const fragment = document.createDocumentFragment();
  const songItemTemp = document.querySelector('#song-template');

  playlist.forEach((song) => {
    const songClone = songItemTemp.content.cloneNode(true);
    songClone.querySelector('.playlist-page-main-component__song-number').textContent = song.order;
    songClone.querySelector('.playlist-page-main-component__title').textContent = song.songTitle;
    songClone.querySelector('.playlist-page-main-component__subtitle').textContent = song.albumTitle;
    songClone.querySelector('.playlist-page-main-component__title--artist').textContent = song.artistName;
    songClone.querySelector('.playlist-page-main-component__title--time').textContent = song.duration;
    songClone.querySelector('.playlist-page-main-component__album-cover-img').src = song.coverLink;
    fragment.append(songClone);
  });

  return fragment;
}
