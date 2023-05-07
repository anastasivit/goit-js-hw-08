import Vimeo from '@vimeo/player/dist/player.js';
import throttle from 'lodash.throttle';

const player = new Vimeo(document.querySelector('#vimeo-player'));
const currentTimeKey = 'videoplayer-current-time';

const saveCurrentTime = time => {
  localStorage.setItem(currentTimeKey, time);
};

const getSavedTime = () => {
  return localStorage.getItem(currentTimeKey);
};

player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(seconds => {
      saveCurrentTime(seconds);
    });
  }, 1000)
);

const savedTime = getSavedTime();
if (savedTime) {
  player.setCurrentTime(savedTime);
}
