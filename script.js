function check() {
   var ifConnected = window.navigator.onLine;
   if (ifConnected) {
      var image1 = document.getElementById('wifi-image');
      image1.src = 'icon/wifi_FILL0_wght400_GRAD0_opsz48.png';
      document.getElementById('status').innerHTML = 'Internet Connected';
      document.getElementById('msg').innerHTML = 'You are now online';
   } else {
      var image2 = document.getElementById('wifi-image');
      image2.src = 'icon/wifi_off_FILL0_wght400_GRAD0_opsz48.png';
      document.getElementById('status').innerHTML = 'NO INTERNET !';
      document.getElementById('msg').innerHTML = 'You are now offline';
   }
}
setInterval(check, 1);