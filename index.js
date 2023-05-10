window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"),{
        center: {lat: 35.7037608, lng: 139.699684},
        zoom: 10
    });

    const window = [
        {lable: "H", name:"후쿠오카 타워", lat:33.593265, lng:130.3480729},
        {lable: "O", name:"오호리 공원", lat:33.5843886, lng:130.376337},
        {lable: "G", name:"구시다신사", lat:33.592959, lng:130.407884},
        {lable: "", name:"마린월드 우미노나카미치", lat:33.6608554, lng:130.3608381},
        {lable: "H", name:"후쿠오카 성터", lat:33.5852496, lng:130.380641},
    ];

    window.forEach(({lable, lat, lng}) => {
        new google.maps.Marker({
            position: {lat, lng},
            lable,
            map
        });
    })
};