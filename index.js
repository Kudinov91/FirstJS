//Greetings

const text = prompt("Как ваc зовут?");
if (text) {
  alert("Привет " + text);
  console.log("Привет " + text);
} else {
  alert("Введите своё имя.");
}

//Date

const currentYear = new Date().getFullYear();
const birthday = prompt("Введите год вашего рождения");
const birthdayNum = parseInt(birthday);
const age = currentYear - birthdayNum;
alert("Вам " + age + " лет");

//Perimeter

const sideWidth = prompt("Введите длину сторны квадрата");
const sideWidthNum = parseFloat(sideWidth);
if (sideWidthNum > 0) {
  alert("периметр квадрата " + 4 * sideWidthNum);
} else {
  alert("Введите положительное число");
}

//Radius

const radius = prompt("Введите радиус окружности");
const radiusNum = parseFloat(radius);
if (radiusNum > 0) {
  alert("Площадь окружности " + Math.PI * radiusNum ** 2);
} else {
  alert("Введите положительное число");
}

//Speed

const distance = prompt("Введите расстояние в км");
const time = prompt("Введите время");
const distanceNum = parseFloat(distance);
const timeNum = parseFloat(time);
if (distance > 0 && time > 0) {
  alert(
    "Чтобы добраться за " +
      time +
      " часов, нужно двигаться со скоростью " +
      distance / time +
      " км/ч"
  );
} else {
  alert("Введите положительное число");
}

//Currency

const euroCur = 0.85;
const dollarSum = parseFloat(prompt("Введите сумму"));
if (dollarSum < 0) {
  alert("Введите положительное число");
} else {
  const euroSum = (dollarSum * euroCur).toFixed(2);
  alert("Сумма в евро " + euroSum);
}

//Date

const fileSize = 820;
const flash = parseFloat(prompt("Введите обьём флешки в ГБ"));
if (flash && fileSize > 0) {
  const fileNum = Math.floor((flash * 1024) / fileSize);
  alert(
    "На флешку объемом " +
      flash +
      "Гб " +
      "поместиться " +
      fileNum +
      " файлов размером 820мб"
  );
} else {
  alert("Введите положительное число");
}
