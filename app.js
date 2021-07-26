var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');


button.addEventListener('click', function(name)
{
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=68dd1d21af0f8556b327a8816f4c6f48')
.then(response => response.json())
.then(data =>
    {
        var tempvalue= data['main']['temp'];
        var namevalue= data['name']
        var descvalue= data['weather'][0]['description'];

        main.innerHTML = namevalue;
        desc.innerHTML= "Desc - "+descvalue;
        temp.innerHTML= "Temp - "+tempvalue;
        input.value="";
    })

    .catch(err=> alert("Wrong city name!"));
})