<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="{{ asset('assets/icons/Grupo-FG-color.svg') }}" type="image/x-icon"/>
    <title>Competencies App</title>
    @viteReactRefresh
    @vite('resources/js/main.jsx')
    @routes
</head>

<body>
    <div id="root"></div>
</body>

</html>
