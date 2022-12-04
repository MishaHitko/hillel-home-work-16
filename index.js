function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const randomImg = getRandomIntInclusive(1, 9);
const img = document.createElement('img');
img.setAttribute('src', `img/${randomImg}.jpg`);
document.body.append(img);




//Вариант, если выводить картинки в рандомном порядке
const boxImg = document.createElement('div');
let arrayRandom = [];
for (let count = 0; arrayRandom.length < 9; count++) {
    const randomImg = getRandomIntInclusive(1, 9);
    while (!arrayRandom.includes(randomImg)) {
        arrayRandom.push(randomImg);
        const img = document.createElement('img');
        img.setAttribute('src', `img/${randomImg}.jpg`);
        boxImg.append(img);
    }
}
document.body.append(boxImg);

