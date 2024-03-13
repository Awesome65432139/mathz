var frozen = false;
var Ip;
/* Place your JavaScript in this file */
/* Add "https://api.ipify.org?format=json" statement
           this will communicate with the ipify servers in
           order to retrieve the IP address $.getJSON will
           load JSON-encoded data from the server using a
           GET HTTP request */

$.getJSON("https://api.ipify.org?format=json", function(data) {

  // Setting text of element P with id gfg
  $("#Ip").html(data.ip);
  Ip = data.ip;
})

function ban() {
  if (Ip == "97.116.104.112") {
    window.location.replace('https://portal.edinaschools.org/Home/Login?ReturnUrl=%2fSSO');
  }
}


function checkPswd() {
  var confirmPassword = "E";
  var pswrd = document.getElementById('password').value;
  var Ip = "170.76.198.131";
  var Ip2 = "170.76.198.132";
  if (pswrd == confirmPassword && (Ip == Ip || Ip == Ip2)) {
    goNext();
  } else {
    document.getElementById('password').value = Ip
  }
}

function goNext() {
  window.location.replace('./math.html');
}

function goHome() {
  window.location.replace('index.html');
}

function goFreeze() {
  frozen = true;
}

function openGame() {
  if (frozen == false) {
    var win = window.open()
    var url = "https://awesome65432139.github.io/mathz2/"
    var iframe = win.document.createElement('iframe')
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.padding = "none";
    iframe.src = url
    win.document.body.appendChild(iframe)
    window.location.replace('https://portal.edinaschools.org/Home/Login?ReturnUrl=%2fSSO');
  } else {
    window.location.replace('index.html');
    frozen = false;
  }
}

function openGame2() {
  if (frozen == false) {
    var win = window.open()
    var url = "https://void.praneeshpiraga1.repl.co/"
    var iframe = win.document.createElement('iframe')
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.padding = "none";
    iframe.src = url
    win.document.body.appendChild(iframe)
    window.location.replace('https://portal.edinaschools.org/Home/Login?ReturnUrl=%2fSSO');
  } else {
    window.location.replace('index.html');
    frozen = false;
  }
}

// Try later to create panic button
function panic() {
  window.location.replace('https://portal.edinaschools.org/Home/Login?ReturnUrl=%2fSSO');
}
