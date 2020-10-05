<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="generator()">generate</button>
    <div id="divImage"></div>

    <script>
        function generator() {
            var x=Math.floor((Math.random()*27)+1)
            console.log(x)
            document.getElementById("divImage").innerHTML= `<img src="images${x}.jpg" style="width:300px;">`
        }
    </script>
</body>
</html>