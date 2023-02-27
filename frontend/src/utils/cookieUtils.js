// https://www.w3schools.com/js/js_cookies.asp
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies/remove
// taking in a cookie name, telling us if cookie exists in the browser
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

// function removeCookie(tabs) {
//   let removing = browser.cookies.remove({
//     url: tabs[0].url,
//     name: "favorite-color"
//   });
//   removing.then(onRemoved, onError);
// }

export {getCookie};