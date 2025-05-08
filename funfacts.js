const funFacts = [
  {
    minHours: 5,
    maxHours: 5,
    options: [
      {
        text: "Haber dormido casi 1 hora más al día durante una semana.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM25qbnVjZnA1eWZ2emdyemluOTZlOXpsejRqMGIyYTNtb3Vwb2R6aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3M7smiKhkOcw/giphy.gif",
      },
      {
        text: "Haber visto una temporada entera de White Lotus.",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazV6cWh1cGk0eHk1ZHYwYmhjY280d3M1OHh5N2V2OWVlMXc1cWljZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cxQTYJstFOycCuJPyP/giphy.gif",
      },
      {
        text: "Haber leído 'La Metamorfosis' de Kafka.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDNmNng2ejRmbzNmMzQ3Nzczd2FyamY2ZWV6M2NuczI3bWlpZGdsdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NFA61GS9qKZ68/giphy.gif",
      },
      {
        text: "Haber visto Coco 3 veces.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3B4YzA2ZXZ5YXFnNXYwZnozOHg3cW5tdTBlM28zM2o3dnY0bWRxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cjudF7TsDnKsqTVxAL/giphy.gif",
      },
      {
        text: "Haber estado jugando juegos de mesa con tus hijos.",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTl0NmxpZDY3YjdkbGMwanZuOWQ0ZHhhMXdoMnVtc3hwdW56ZzJlbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G5ViS34rQE2puf0QNh/giphy.gif",
      },
      {
        text: "Haber subido el Paso de Cortés.",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHdwZnV1ejIwbHV5OGF6YmV3aXF3c2RpZzd0M2NmeXZyaTdrb3IxdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QM8d5Zx9G5gLhDNJYc/giphy.gif",
      },
      {
        text: "Haber ido a un concierto de Shakira.",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzQ4NjliZDZ6b3Jwb2d5NnZwbjQ2N2pkZzB1eTA4d3YzbzJ6bzE1biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cywqNJr4SMCs0/giphy.gif",
      },
    ],
  },
  {
    minHours: 10,
    maxHours: 10,
    options: [
      {
        text: "Haber visto una temporada de Breaking Bad.",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3FiY3dkM2RlcGtsb3N3Yzl6a2hyYmpjYWZ3dnRsOG4xc3RhdjV2YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/R3S6MfUoKvBVS/giphy.gif",
      },
      {
        text: "Haber leído 1 libro.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDNmNng2ejRmbzNmMzQ3Nzczd2FyamY2ZWV6M2NuczI3bWlpZGdsdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NFA61GS9qKZ68/giphy.gif",
      },
      {
        text: "Haber tenido una cena romántica cada semana.",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmJxcDAyNm4yc3Vld2hpd3Rqc2pyZXRhYXM1M2Z1cjBhbGVxdDJwNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ohzAtO4O28tjoX7KU/giphy.gif",
      },
      {
        text: "Haber subido el Nevado de Toluca.",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHdwZnV1ejIwbHV5OGF6YmV3aXF3c2RpZzd0M2NmeXZyaTdrb3IxdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QM8d5Zx9G5gLhDNJYc/giphy.gif",
      },
    ],
  },
  {
    minHours: 15,
    maxHours: 15,
    options: [
      {
        text: "Haber dormido 30 minutos más todos los días.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM25qbnVjZnA1eWZ2emdyemluOTZlOXpsejRqMGIyYTNtb3Vwb2R6aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3M7smiKhkOcw/giphy.gif",
      },
      {
        text: "Haber leído 2 libros.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDNmNng2ejRmbzNmMzQ3Nzczd2FyamY2ZWV6M2NuczI3bWlpZGdsdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NFA61GS9qKZ68/giphy.gif",
      },
    ],
  },
  {
    minHours: 20,
    maxHours: 20,
    options: [
      {
        text: "Haber visto Titanic 6 veces.",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanlyOGgyMWIwbDhzcG1xeTUxOTh1dmd5MjFxdjBza3d0ZzQzMzQycyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOY5y7YXjTD7q/giphy.gif",
      },
      {
        text: "Haber ido al gimnasio 5 días a la semana.",
        gif: "https://media.giphy.com/media/hlh2xvhZOfzji/giphy.gif?cid=ecf05e47u1clxk23gimfi2ewq3rah82qa7vb5rmm1q77c7tv&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      },
      {
        text: "Haber subido el Nevado de Toluca 2 veces.",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHdwZnV1ejIwbHV5OGF6YmV3aXF3c2RpZzd0M2NmeXZyaTdrb3IxdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QM8d5Zx9G5gLhDNJYc/giphy.gif",
      },
      {
        text: "Haber tenido 10 comidas con tus papás.",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmJxcDAyNm4yc3Vld2hpd3Rqc2pyZXRhYXM1M2Z1cjBhbGVxdDJwNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ohzAtO4O28tjoX7KU/giphy.gif",
      },
    ],
  },
  {
    minHours: 25,
    maxHours: 25,
    options: [
      {
        text: "Haber visto una temporada de Grey's Anatomy.",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWxjenVjZ2o1bXhuMzRlNXh0ZjM0eG04aDZqOXdkZnM0aXRpenlkdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zzFZGURdAux6o/giphy.gif",
      },
      {
        text: "Haber leído 3 libros.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDNmNng2ejRmbzNmMzQ3Nzczd2FyamY2ZWV6M2NuczI3bWlpZGdsdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NFA61GS9qKZ68/giphy.gif",
      },
    ],
  },
  {
    minHours: 30,
    maxHours: 30,
    options: [
      {
        text: "Haber leído un libro a la semana.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDNmNng2ejRmbzNmMzQ3Nzczd2FyamY2ZWV6M2NuczI3bWlpZGdsdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NFA61GS9qKZ68/giphy.gif",
      },
      {
        text: "Haber ido todos los días a clases de yoga.",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnJoZGluZmwzZGlzY2l4YWtnODRnc256YnByNnl4ZjBrdzMzZXJzOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oKIPpaHCfN7ECPIGs/giphy.gif",
      },
      {
        text: "Haber ido todos los días al gimnasio.",
        gif: "https://media.giphy.com/media/hlh2xvhZOfzji/giphy.gif?cid=ecf05e47u1clxk23gimfi2ewq3rah82qa7vb5rmm1q77c7tv&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      },
    ],
  },
];
