import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimedUpdate, 1000));
function onTimedUpdate(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
};

player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time'))).then(function (seconds) {
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
            
    }
})
