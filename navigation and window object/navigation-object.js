
// here is some navigation object 


// Get browser name
const browserName = navigator.appName;
console.log("Browser Name:", browserName);

// Check for Chrome browser
const isChrome = navigator.userAgent.indexOf("Chrome") !== -1;
console.log("Is Chrome:", isChrome);

// Get user's preferred language
const userLang = navigator.language;
console.log("Preferred Language:", userLang);

// Check if user is online
const isOnline = navigator.onLine;
console.log("Is Online:", isOnline);


// Check for Geolocation API support
if (navigator.geolocation) {
    console.log("Geolocation is supported!");
    // Your code to use geolocation
  } else {
    console.log("Geolocation is not supported.");
  }