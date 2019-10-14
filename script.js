/*Mobile navigation bar*/
$(document).ready(function(){
  $('.sidenav').sidenav();
})

if ( window.addEventListener ) {
    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
    window.addEventListener("keydown", function(e){
        kkeys.push( e.keyCode );

        if ( kkeys.toString().indexOf( konami ) >= 0 ) {
            var audio = document.getElementById("mgsalert");
            audio.play();
            alert('kept you waitin, huh?');
            kkeys = [];
        }
    }, true);
}

// Click specified times to rain words like Matrix movie.
var counter = 0;
var times = 10;
document.querySelector('#codeEffect').addEventListener('click', function() {
    if (counter === times) {
        alert('Wecolme to code World!')
        document.querySelectorAll('.container').forEach(function(el) {
            el.style.color = '#FFFFFF';
        });
        document.querySelectorAll('svg, path').forEach(function(el) {
            el.style.stroke = '#FFFFFF';
        });
        makeRainCode();
    }
    counter++;
})

function makeRainCode() {
    var canvasRain = document.getElementById("canvasRain");
    var ctx = canvasRain.getContext("2d");
    
    canvasRain.height = window.innerHeight;
    canvasRain.width = window.innerWidth;
    
    var stringFall = "qwertyuiopasdfghjklzxcvbnm";
    stringFall = stringFall.split("");
    
    var font_size = 10;
    var columns = canvasRain.width / font_size;
    var drops = [];
    
    for (var x = 0; x < columns; x++)
        drops[x] = 1;
    
    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvasRain.width, canvasRain.height);
    
        ctx.fillStyle = "#0F0"; // This color of chars.
        ctx.font = font_size + "px Helvetica";
        for (var i = 0; i < drops.length; i++) {
            
            var text = stringFall[Math.floor(Math.random() * stringFall.length)];
            
            ctx.fillText(text, i * font_size, drops[i] * font_size);
    
            if (drops[i] * font_size > canvasRain.height && Math.random() > 0.975)
                drops[i] = 0;
    
            drops[i]++;
        }
    }
    
    setInterval(draw, 33);
}
