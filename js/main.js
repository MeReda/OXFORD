// Start Switcher Script
let switcher = document.querySelectorAll("#menu li button");
let rows = document.querySelectorAll("#menu .row");

for (let i = 0; i < switcher.length; i++) {
  switcher[i].addEventListener("click", () => {
    for (let j = 0; j < rows.length; j++) {
      switcher[j].classList.remove("active");
      rows[j].classList.add("hidden");
    }
    rows[i].classList.remove("hidden");
    switcher[i].classList.add("active");
  });
}
// End Switcher Script

// Start MyMap Script
var map = L.map("map").setView([34.6565, -1.8990], 16);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=6KElTCjp60Yp0A1W1NzU",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

// Adding icon to the marker
var myIcon = L.icon({
  iconUrl: "imgs/restaurant-map-icon.png",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

// Adding marker
var marker = L.marker([34.6562, -1.8990], {
  icon: myIcon,
}).addTo(map);

// Adding Popups
marker
  .bindPopup(
    `
  <center>
    <span class="h4 mt-2" style="display:inline-block">OXFORD</span>
    <br/>
    <span class="h6" >welcom to our coffee shop</span>
    <br/>
    <span class="text-muted mt-2" style="display:inline-block">Addr: Hay El Qods, Oujda, Morocco</span>
    <br/>
    <span class="text-muted mt-2" style="display:inline-block">Phone : +212 623-998291</span>
    <br/>
    <a class="btn btn-outline-secondary card-btn rounded-pill mt-2" href="https://www.google.com/maps/dir/?api=1&destination=Hay%20El%20Qods%2C%20Oujda%2C%20Morocco" target="_blank">go to your map</a>
  </center>
`
  )
  .openPopup();



// to chose icons: https://www.flaticon.com/search?word=map%20marker%20restaurant
// the link of the current icon: https://www.flaticon.com/premium-icon/restaurant_5695138?term=map%20marker%20restaurant&related_id=5695138

// End MyMap Script
