document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('btnTema');
  boton.addEventListener('change', cambiar);

  function cambiar() {
    console.log(boton.value);

    if (boton.value === 'oscuro') {
      let body = document.getElementById('body');
      body.classList.replace('day', 'night');

      let logo = document.getElementById('logo').style.display = 'none';
      let logoNight = document.getElementById('logoNight').style.display = 'block';
    } else {
      let body = document.getElementById('body');
      body.classList.replace('night', 'day');
      let logo = document.getElementById('logo').style.display = 'block';
      let logoNight = document.getElementById('logoNight').style.display = 'none';
    }
  }


  fetch('https://api.giphy.com/v1/gifs/search?api_key=lFLiKKxsuzEVN2ILKWQ3mrHEFhYTqcPQ&q=vegeta')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {


      for (let i = 1; i < 4; i++) {
        s = new String('sug' + [i]);
        let sug = document.getElementById(s);
        sug.src = myJson.data[i].images.downsized.url;
        sug.setAttribute('width', '100%');
        sug.setAttribute('height', '100%');
      }

      let img1 = document.getElementById('img1');
      img1.src = myJson.data[9].images.downsized.url;;
      img1.setAttribute('width', '100%');
      img1.setAttribute('height', '100%');

      let img2 = document.getElementById('img2');
      img2.src = myJson.data[10].images.downsized.url;
      img2.setAttribute('width', '100%');
      img2.setAttribute('height', '100%');

      let img3 = document.getElementById('img3');
      img3.src = myJson.data[12].images.downsized.url;
      img3.setAttribute('width', '100%');
      img3.setAttribute('height', '100%');

      for (let i = 1; i < 8; i++) {
        t = new String('imgt' + [i]);
        let imgt = document.getElementById(t);
        imgt.src = myJson.data[i].images.downsized.url;
        imgt.setAttribute('width', '100%');
        imgt.setAttribute('height', '100%');
      }

      fetch('https://api.giphy.com/v1/gifs/search?api_key=lFLiKKxsuzEVN2ILKWQ3mrHEFhYTqcPQ&q=los+simpsons')
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          for (let i = 1; i < 5; i++) {
            s = new String('sug' + [i]);
            let sug = document.getElementById(s);
            sug.src = myJson.data[i].images.downsized.url;
            sug.setAttribute('width', '100%');
            sug.setAttribute('height', '100%');
          }
        });

    });

  const llamar = document.getElementById('btnbuscar');
  llamar.addEventListener('click', buscar);
  var busqueda = document.getElementById("busqueda");

  function buscar() {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=lFLiKKxsuzEVN2ILKWQ3mrHEFhYTqcPQ&q=' + busqueda.value)
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          for (let i = 1; i < 5; i++) {
            s = new String('bus' + [i]);
            let bus = document.getElementById(s);
            bus.src = myJson.data[i].images.downsized.url;
            bus.setAttribute('width', '100%');
            bus.setAttribute('height', '100%');
          }
        });
  }

});