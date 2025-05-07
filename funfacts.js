const funFacts = [
  {
    minHours: 1,
    maxHours: 1,
    options: [
      {
        text: "El corazón de un colibrí habría latido unas 10,000 veces.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGJrNGpndjhsczR3MzFoOXBtYjEwMGV3dmVreGlsZ3B1b3dhMnlqcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ibXn69zjwkB5Hdl1Z4/giphy.gif",
      },
      {
        text: "Google habría generado ~1.5 millones de dólares en ingresos publicitarios.",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHJxb3hmeHhnZnpjYjBiaHJxeGl3bmdoNTI2N3E4bGFnd2IzbTNveSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/67ThRZlYBvibtdF9JH/giphy.gif",
      },
      {
        text: "Se subieron ~30,000 videos nuevos a YouTube.",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExazcxNmx2eDExaXJrb3gxZDNqazdpcGhnZzhnM3kxcnRqYWtic3drMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zkGwxGWIEVYGI/giphy.gif",
      },
      {
        text: "McDonald’s vendió ~4,500 Big Macs.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXFuNnphZmQ4b2FwczJzZDU1bnZ2dWU3aTU1bHVjc3NsbmI3d290bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IgOEWPOgK6uVa/giphy.gif",
      },
      {
        text: "La Tierra viajó ~107,000 km alrededor del Sol.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2R5ajNoOTlqNHdjcHJ5YTFyMGRkejU5dTVrZjkydW1ueG0xZzFzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VGbUTteIsJG4QwCUen/giphy.gif",
      },
      {
        text: "Amazon envió ~800,000 paquetes.",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGJibXU5MzI4ODNtN2NlbnEzN2l0aWIyODRldG9hYnhobTB1N2d0biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2QDSKSkhqITBLYBy/giphy.gif",
      },
      {
        text: "El corazón humano promedio latió ~4,000 veces.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3piYzlkNXNhYjJ2Z3UxZHppdmFjajRzdjQ5ZGxubW5jdzY5dnE2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZOStzpF9H5syI/giphy.gif",
      },
      {
        text: "Se publicaron ~6,000 selfies en Instagram.",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW11bWJqd2I3YWxiMWt2cXYzdThoNmZueTdzZnF3M2pyOXhqMWRuaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YOvG4yvubQL2e22BdC/giphy.gif",
      },
      {
        text: "Jeff Bezos ganó ~1.5 millones de dólares.",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHJxb3hmeHhnZnpjYjBiaHJxeGl3bmdoNTI2N3E4bGFnd2IzbTNveSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/67ThRZlYBvibtdF9JH/giphy.gif",
      },
      {
        text: "Se enviaron ~600,000 correos electrónicos.",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Q0azU0aHN6MHoxb2pnOXl5czlzOHZ0NWlocWRrc2VuNzl4ZGYydCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d8v55gXkiNj3y/giphy.gif",
      },
      {
        text: "Una persona promedio parpadeó ~900 veces.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHk0bnR1dmdobm8xbGUyaXJzdTc0aHE4N3VwYm9sMG5zcHc4OGhkNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ycagKBYEmaili/giphy.gif",
      },
      {
        text: "Una ballena azul respiró unas 8 veces.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnhqazZmNWF4MnM3a2piODRxcG1ueGNkaWhsNHpxNnA2a2EzYmpvbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7FgDPLLKh1v4d2XLkl/giphy.gif",
      },
    ],
  },
  {
    minHours: 2,
    maxHours: 2,
    options: [
      {
        text: "Eliud Kipchoge corrió el maratón más rápido de la historia.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNrNjkya2Rvc3VuYjBpcjF5MTU3MnU0bmgxODFrcGR0N3J2eDJlZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H7wDWXvJhjtkn6QURb/giphy.gif",
      },
      {
        text: "El vuelo comercial promedio de Londres a París.",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2FwcmM5c29iZmFhbnBveWp6cnJrd3FyNmJjdXllajdzcGoyc2kxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t06x4H3AeuowbhdZFU/giphy.gif",
      },
      {
        text: "Una carrera de Fórmula 1 completa.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDN5NzlhNWtvbDhnZW1pYjJqN2E2Zm5sOG4ycHQ2Yms0OTIxdXpwZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F3JhKaucb9QqSF7bSS/giphy.gif",
      },
      {
        text: "El tren Eurostar de Londres a París.",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2FwcmM5c29iZmFhbnBveWp6cnJrd3FyNmJjdXllajdzcGoyc2kxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t06x4H3AeuowbhdZFU/giphy.gif",
      },
      {
        text: "La Estación Espacial Internacional da una vuelta a la Tierra.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXZ3cXVkNmluN3FnZGlvd3NyY2Z1czN1NG41MTB0eDFiOHNhMXJjNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yKqEFne7oWs7e/giphy.gif",
      },
      {
        text: "El vuelo transatlántico más rápido (Concorde) casi llega a destino.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHZ1ZWVjejlqMjlueG96OGJ2OXVvMXJyNWVjNGsxOTlkamJjemlmMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7abAHdYvZdBNnGZq/giphy.gif",
      },
      {
        text: "El corazón de un colibrí latió unas 20,000 veces.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGJrNGpndjhsczR3MzFoOXBtYjEwMGV3dmVreGlsZ3B1b3dhMnlqcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ibXn69zjwkB5Hdl1Z4/giphy.gif",
      },
      {
        text: "Un perezoso avanzó unos 70 metros.",
        gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDlzbHU2Y2EwYTY4cHdiODRqMWZtMHkwZ2R5aHJpcm90ZGRrdjJiZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3NtY188QaxDdC/giphy.gif",
      },
      {
        text: "Nacieron unos 1,500 bebés en el mundo.",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDk4Y3RtN3c2bmx5ZXFvZnluaHk5cTVxcTgwNmxrb3k3OGJwbmJzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11kcEW8uNh8RwY/giphy.gif",
      },
      {
        text: "Una persona promedio parpadeó unas 1,800 veces.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHk0bnR1dmdobm8xbGUyaXJzdTc0aHE4N3VwYm9sMG5zcHc4OGhkNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ycagKBYEmaili/giphy.gif",
      },
      {
        text: "Se resolvieron 1,824 cubos Rubik en un récord mundial.",
        gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHFuYXpnejRrenJ1YjlkeHFjeXNzbm5icGQyczZ5Mm1uOXl5anBhNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xt5UnsuPoxoFq/giphy.gif",
      },
      {
        text: "Amazon envió unos 1.6 millones de paquetes.",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGJibXU5MzI4ODNtN2NlbnEzN2l0aWIyODRldG9hYnhobTB1N2d0biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2QDSKSkhqITBLYBy/giphy.gif",
      },
      {
        text: "Se realizaron unos 500,000 viajes en Uber.",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3M5dm8zdTA5ZGNxdjNrOTY2cDJ3cXFuNnJ2bGt0dmh0MXdwa2VybiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ah2YxX0t177pu/giphy.gif",
      },
      {
        text: "Podrías haber escuchado “Baby Shark” en repetición unas 36 veces.",
        gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGZ0bW9ocHo2ZWN3bjJ1NzA5ejd1aXcwdzNhbXN4dXRlcmcxcmhiOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dBaMGwH09JuGmHM1TA/giphy.gif",
      },
    ],
  },
  {
    minHours: 3,
    maxHours: 3,
    options: [
      {
        text: "Podrías haber visto 13 episodios de Peppa Pig.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDN6bm90bmk4eGhnOHg0YmN2dnViM3hha3ViaW9leWRobTc4YjBhYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SUbYGyL0tlTtzglUps/giphy.gif",
      },
      {
        text: "Podrías haber completado una caminata o carrera de 10–15 km.",
        gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGh5N296MzI1Nzl6ZTU0NjlucmEyNWszY3pucmJ2ejk1bG16dXFoeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6Z3D5t31ZdoNW/giphy.gif",
      },
      {
        text: "Google generó unos 3 millones de dólares en ingresos publicitarios.",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHJxb3hmeHhnZnpjYjBiaHJxeGl3bmdoNTI2N3E4bGFnd2IzbTNveSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/67ThRZlYBvibtdF9JH/giphy.gif",
      },
      {
        text: "Tu corazón latió unas 8,000 veces.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3piYzlkNXNhYjJ2Z3UxZHppdmFjajRzdjQ5ZGxubW5jdzY5dnE2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZOStzpF9H5syI/giphy.gif",
      },
      {
        text: "Se enviaron 1.2 millones de correos electrónicos.",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Q0azU0aHN6MHoxb2pnOXl5czlzOHZ0NWlocWRrc2VuNzl4ZGYydCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d8v55gXkiNj3y/giphy.gif",
      },
      {
        text: "Unas 20,000 personas deslizaron a la derecha en Tinder.",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTBhNXdjeXJrZ2lzdWE4NDJ4NWJhYmYwcnNkNXRrMjd6c2F5Nzh2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v2rilyQAQJk9G/giphy.gif",
      },
      {
        text: "La Tierra recorrió más de 214,000 km en el espacio.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2R5ajNoOTlqNHdjcHJ5YTFyMGRkejU5dTVrZjkydW1ueG0xZzFzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VGbUTteIsJG4QwCUen/giphy.gif",
      },
      {
        text: "Un caracol podría haber recorrido unos 90 metros.",
        gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW54YWFrYjk5dXp4NHVveW84bjRtMW43aGo5M3Z3dXZ3Ym1ybnp4eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Bn6GYND33DsW9ANwwC/giphy.gif",
      },
      {
        text: "Nacieron 240,000 bebés en el mundo.",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDk4Y3RtN3c2bmx5ZXFvZnluaHk5cTVxcTgwNmxrb3k3OGJwbmJzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11kcEW8uNh8RwY/giphy.gif",
      },
      {
        text: "McDonald’s vendió unos 9,000 Big Macs.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXFuNnphZmQ4b2FwczJzZDU1bnZ2dWU3aTU1bHVjc3NsbmI3d290bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IgOEWPOgK6uVa/giphy.gif",
      },
      {
        text: "El cabello humano creció unos 0.00003 cm.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW1oajJzc2hkOGpiYWJ0OTFmdGJ5enFmcmN0dnNmODQybzFvdHp4YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xThuWhoaNyNBjTGERa/giphy.gif",
      },
      {
        text: "El corazón de una ballena azul latió solo una vez.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnhqazZmNWF4MnM3a2piODRxcG1ueGNkaWhsNHpxNnA2a2EzYmpvbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7FgDPLLKh1v4d2XLkl/giphy.gif",
      },
    ],
  },
  {
    minHours: 4,
    maxHours: 4,
    options: [
      {
        text: "Podrías haber visto la película de Coco de Disney 3 veces.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3B4YzA2ZXZ5YXFnNXYwZnozOHg3cW5tdTBlM28zM2o3dnY0bWRxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cjudF7TsDnKsqTVxAL/giphy.gif",
      },
      {
        text: "Podrías haber manejado de CDMX a Tepotzotlán para comer barbacoa.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXFtY25sb3dodjVrcWg5b2J3MGZnaXd0NXV4bHRrdXhhZWc3YmVsZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYzsXKJlSVIFYUE/giphy.gif",
      },
      {
        text: "Podrías haber leído la mitad de “Harry Potter y la piedra filosofal”.",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzRtaTc3OWd2bGpxc3EyNGdrOGZxZWc1cThoc3FrOTZlbXAwZ21reCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mz1kJeDVueKC4/giphy.gif",
      },
    ],
  },
  {
    minHours: 5,
    maxHours: 5,
    options: [
      {
        text: "Podrías haber hecho una ida y vuelta a Tepoztlán para comer quesadillas.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXFtY25sb3dodjVrcWg5b2J3MGZnaXd0NXV4bHRrdXhhZWc3YmVsZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYzsXKJlSVIFYUE/giphy.gif",
      },
      {
        text: "Podrías haber cocinado una cena de tres tiempos para amigos y lavado todo.",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXZ3cHc2ODl4bWo4OW4wZXB4aTAxaTE5MjVneDVyeWNuM2hyeTlmciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eYESDEALOQnjTz5qtn/giphy.gif",
      },
    ],
  },
  {
    minHours: 6,
    maxHours: 6,
    options: [
      {
        text: "Podrías haber viajado en autobús de CDMX a Querétaro.",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWcwdGR2M3o1dGc1eTZzYzBicnhqMWR2aDNlMmFlOHk1aTRxeGRvYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CEyKnXJ02b0qI/giphy.gif",
      },
      {
        text: "Podrías haber terminado de leer “Cien años de soledad”.",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTg4NHB3bmU3Z3VoY2VhNzR0MDdwbTY1cm4xYmx5NmpweXQzdnQyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WoWm8YzFQJg5i/giphy.gif",
      },
      {
        text: "Podrías haber maratoneado la primera temporada de “Stranger Things”.",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmlpd2VndDlqdWpwN3NldndkcnJ5dGpyam02cHU0MHR4b254YnZ5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohhwfZXnlXE0UfFjW/giphy.gif",
      },
    ],
  },
];
