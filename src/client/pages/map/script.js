

let center = [53.90110181472827,27.427368164062504];

function init() {
    let map = new ymaps.Map('map-test', {
        center: center,
        zoom: 17
    });

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'https://www.google.com/search?q=%D0%9A%D0%90%D0%A0%D0%A2%D0%98%D0%9D%D0%9A%D0%98+%D0%96%D0%A3%D0%A7%D0%9A%D0%90&rlz=1C1GCEA_enBY875BY875&sxsrf=ALiCzsYkelDYs4EQatR8A2LyX630L16Q-Q:1651334404427&tbm=isch&source=iu&ictx=1&vet=1&fir=-f-eRfYVGECI7M%252C6PmOQUb-gcygiM%252C_%253BRZJgABx4la-tRM%252Ch-Vzsai1x4SaZM%252C_%253BsB6zbWLq5h6GhM%252CUYcAmEleqy2ybM%252C_%253B0I88QlDAoA4dAM%252C-m4YqjbXo9V2xM%252C_%253BnsKYANQHGe3KKM%252C-m4YqjbXo9V2xM%252C_%253BKSZSXkEGAUc6OM%252CSTcdiVcLZZZnIM%252C_%253BbRcWa3nUcIxzJM%252CKcJx3W4UMUoGQM%252C_%253BYeHfQ2ZnxTkc_M%252Cmjlh6YORkVvoGM%252C_&usg=AI4_-kQVxW-CHzSaBeoUq0LBHhJVdue1Ag&sa=X&ved=2ahUKEwik1tKElLz3AhVt57sIHYkRCMwQ9QF6BAgDEAE&biw=1396&bih=721&dpr=1.38#imgrc=-f-eRfYVGECI7M',
        iconImageSize: [40, 40],
        iconImageOffset: [-19, -44]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
}

ymaps.ready(init);