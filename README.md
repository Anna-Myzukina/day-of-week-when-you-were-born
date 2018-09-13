День недели дня когда родился
A little HTML:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Birthday day</title>
    </head>
    <body>
        <h1>Day of week when you were born</h1>
        <script src="script.js"></script>
    </body>
    </html>

At file script.js next code (! at [correct value of your year/month/data of born] ) :

 
    var now = new Date([year], [month], [data] );
    alert(now.getDay())
