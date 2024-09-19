export default function mockMarkerList(count) {
    const markers = [];
    const minLongitude = 73; // 最小经度
    const maxLongitude = 135; // 最大经度
    const minLatitude = 18; // 最小纬度
    const maxLatitude = 54; // 最大纬度

    const getRandomSrc = () => {
        const srcs = ["/marker/event.gif","/marker/overSpeed.gif","/marker/bridge.gif", "/marker/weather.gif"];
        return srcs[Math.floor(Math.random() * srcs.length)];
    };

    for (let i = 1; i <= count; i++) {
        const id = i;
        const longitude = Math.random() * (maxLongitude - minLongitude) + minLongitude;
        const latitude = Math.random() * (maxLatitude - minLatitude) + minLatitude;
        const src = getRandomSrc();
        const title = `自定义图层点位${i}`;

        markers.push({
            id,
            longitude,
            latitude,
            src,
            title,
        });
    }

    return markers;
}
