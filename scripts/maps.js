class Map {
  initMap(data) {
    const coords = { lat: data.latitude, lng: data.longitude };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: coords,
    });

    const marker = new google.maps.Marker({
      position: coords,
      map: map,
      animation: google.maps.Animation.BOUNCE,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
      <h3>${data.ip} is located here in ${data.city}</h3><div ><br >${data.timezone}</br></div>`,
    });

    infoWindow.open(map, marker);
  }
}

window.initMap = new Map();

export default new Map();
