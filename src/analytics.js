import Common from '@common/common';
import * as $ from 'jquery';

function createAnalytics () {
    let counter = 0;
    let isDestroyed = false;
    const handleClick = () => { counter++; };

    document.addEventListener('click', handleClick);

    return {
        destroy: () => {
            document.removeEventListener('click', handleClick);
            isDestroyed = true;
        },
        get getAnalytics() {
            isDestroyed ?
                console.log('analytics is destroyed') :
                console.log('clicks count:', counter);
        }
    };
}

window.analytics = createAnalytics();
$('pre').append(`<p>${new Common().toString()}</p>`);