if(navigator.geolocation){
    // if battery API is working
    navigator.geolocation()
      .then(function(battery) {
  
          // Get current battery level .
          var batteryLevel = battery.level * 100;
          console.log(batteryLevel);
      })
      .catch(function(e) {
          console.error(e);
      });
  }
  else{
    // if battery API is not working
    console.log(" it is not working");
  }
  
  
  
  