export function hello() {
  const phrases = [
    "Hoje é um ótimo dia para codar!",
    "Café + código = felicidade.",
    "Bug encontrado? Feature descoberta!",
    "Code hard, nap harder.",
  ];

  const random = Math.floor(Math.random() * phrases.length);
  console.log(phrases[random]);
}