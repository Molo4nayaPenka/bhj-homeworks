'use strict'

function rotateAds() {

    let index = 0;

    function toggleClass(item) {
        item.classList.toggle('rotator__case_active')
    }

    const ads = Array.from(document.querySelectorAll('.rotator__case'));
    const amount = ads.length;

    return function () {
        const activeAd = document.querySelector('.rotator__case_active');

        const changeAd = () => {
            ads[index].style.color = ads[index].dataset.color;
            toggleClass(activeAd);
            toggleClass(ads[index]);
        }

        if (index !== amount - 1 && ads[index] !== activeAd) {
            changeAd();
        } else if (index === (amount - 1) && ads[index] !== activeAd) {
            changeAd();
            index = -1;
        }

        index++;
    }
}

const rotate = setInterval(rotateAds(), 1000);

window.addEventListener('load', rotate);


// то же, но через onload
// function rotateAds() {

//     let index = 0;

//     function toggleClass(item) {
//         item.classList.toggle('rotator__case_active')
//     }

//     const ads = Array.from(document.querySelectorAll('.rotator__case'));
//     const amount = ads.length;

//     return function () {
//         const activeAd = document.querySelector('.rotator__case_active');
//         if (index !== amount - 1 && ads[index] !== activeAd) {
//             toggleClass(activeAd);
//             toggleClass(ads[index]);
//         } else if (index === (amount - 1) && ads[index] !== activeAd) {
//             toggleClass(activeAd);
//             toggleClass(ads[index])
//             index = -1;
//         }

//         index++;
//     }

// }

// window.onload = setInterval(rotateAds(), 1000);