//Задача. Создайте переменную str и присвойте ей значение 'abcde'.
//Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.

/* let str = "abcde";
console.log(str[0]);
console.log(str[1]);
console.log(str[4]); */

//Задача. Напишите скрипт, который считает количество секунд в часе.

/* console.log('секунд в часе:'+ 60*60); */

//Задача. Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=,
//++, --. Количество строк кода при этом не должно измениться. Код для переделки:

/* var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);
*/
/* var num = 1;
num += 12;
num -= 14;
num *= 5;
num /=7;
num += 1;
num -= 1;
console.log(num); */

//Создайте переменную num и присвойте ей значение 3. 
//Выведите значение этой переменной на экран с помощью метода alert.

/* let num = 3;
console.log(num); */

//Создайте переменные a=10 и b=2. 
//Выведите на экран их сумму, разность, произведение и частное (результат деления).

/* let a=10, b=2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b); */

//Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. 
//Выведите на экран значение переменной result.

/*  let c=15, d=2;
 let result =c+d;
 console.log(result); */

// Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.

/* let a=10, b=2, c=5;
 console.log(a+b+c);*/

//Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. 
//Затем создайте переменную d, присвойте ей значение 7. 
//Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.

/*     let a = 17, b = 10, d = 7;
    let c = a - b;
    let result = c + d;
    console.log(result); */

//Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.    

/*  let str = "Hello world!";
 console.log(str); */

//Создайте переменные str1='Привет, ' и str2='Мир!'. 
//С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.

/* let str1 = "Hello", str2 = "World!"
console.log(str1 + ", "+ str2); */

//Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.

/* let name = "Alexei";
console.log("Hello, " + name); */

//Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.

/* let age = 24;
console.log('I am ' + age + ' years old'); */

//Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.

/*  let name = prompt('Your name?', 'name');
 console.log('Your name is: ' + name); */

//Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.

/* let number = prompt('enter the number!', );
alert(number * number); */

//Создайте переменную str и присвойте ей значение 'abcde'. 
//Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

/* let str = 'abcde';
console.log(str[0] + ' ' + str[2] + ' ' + str[4]); */

//Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.

/*  let num = '12345';
 console.log(num / 2); *///?????

//Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

/* let oneHour = 60*60, oneDays = 24* oneHour,  oneMonth = oneDays * 30;
console.log(`one hour: ${oneHour} sec, one days: ${oneDays} sec, one month: ${oneMonth} sec`) */

// Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.

/*   let hour = 14, minutes = 48, sec = 25;
  console.log("now is the time "+ hour +':' + minutes+':' + sec) ; */

//Переделайте этот код так, чтобы в нем использовались операции ++ и --. Количество строк кода при этом не должно измениться.

/* var num = 10;
num = num + 1;
num = num + 1;
num = num - 1;
alert(num); */

/* var num = 10;
num = ++num;
num = ++num;
num = --num;
console.log(num); */

// Решим немного другую задачу: дан массив с элементами 'Привет, ', 'мир' и '!'. 
//Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести на экран содержимое этой переменной

/* let arr = ['hello', 'world', '!'] , text = arr[0] + arr[1] + arr[2];
console.log(text); */

//Дан массив ['Привет, ', 'мир', '!']. 
//Необходимо записать в нулевой элемент этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ').

/* let arr = ['hello', 'world', '!'];
arr[0] = 'bay';
console.log(arr); */

//Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.

/*     let obj = {Alex: 200, Petya: 600, kolea: 350};
    console.log(obj.Petya +" "+ obj.kolea );*/

//Создайте массив arr с элементами 1, 2, 3, 4, 5 двумя различными способами.

/*  let arr = [1, 2 ,3 ,4 ,5];
 let arrr = Array (1, 2, 3, 4, 5, 6);
 let arays = [];
 arays[0] = 1;
 arays[1] = 2;
 arays[2] = 3;
 arays[3] = 4;
 arays[4] = 5;
 console.log(arr);
 console.log(arrr);
 console.log(arays); */

//Задача. Дан многомерный массив arr, Выведите с его помощью слово 'голубой'

/* var arr = {
     'ru':['голубой', 'красный', 'зеленый'],
     'en':['blue', 'red', 'green'],
 };

 console.log(arr['ru'][0]);
 console.log(arr['en'][2]); */

//Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. 
//Результаты сложите, присвойте переменной result. 
//Выведите на экран значение этой переменной.

/*  let arr = [2, 5, 3, 9];
 let result = (arr[0]*arr[1]) + (arr[2]*arr[3]);
 console.log(result); */

//Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:

/* let obj = {a: 1, b: 2, c: 3};
console.log(obj['c']);
console.log(obj.c); */

//Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). 
//Выведите на экран текущий день недели.

/*  let obj = {
    first: 'monday',
    second: 'tuesday',
    third: 'Thursday',
    fourth: 'wednesday',
    fifth: 'friday',
    sixth: 'saturday',
    seventh: 'sunday',
}
console.log(obj['first']); */

// Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. 
//Выведите день недели, соответствующий значению переменной day

/*  let day = 'fourth';
 console.log(obj[day]);
*/

// Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

/*  let arr= [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9],
 ];
 console.log(arr[1][0]); */

//Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery

/*  let obj = {
     js:['jQuery', 'Angular'],
     php: 'hello', css: 'world'
 };
 console.log(obj.js[0]);
*/

//Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. 
//Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. 
//Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).

/* let arr = {
   ru:['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
   en:['monday', 'tuesday', 'Thursday', 'wednesday', 'friday', 'saturday', 'sunday'],
} */
//console.log(arr.ru[0] + ' ' + arr.en[2]); 

//Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня. 
//Выведите словом день недели, соответствующий переменным lang и day. 
//То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.

/*  let lang = prompt('select the languages', );
 let day = prompt('select number of the week', );
 console.log(day)
 console.log(arr[lang][day]); */

//В переменной min лежит число от 0 до 59. 
//Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

/* let min = prompt('select the hour', 00);

switch (min){
    case (min >= 0 & min <= 15):
        console.log('min попадает в первую четверть');
        break;
    case(min >15 & min <= 30):
        console.log('min попадает в вторую четверть');
        break;
    case(min > 30 & min <= 45):
        console.log('min попадает в ттретью четверть');
        break
    default:
        console.log('min попадает в четвертую четверть');
        break;
} */

//Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', 
//то в переменную arr запишем массив дней недели на русском языке, 
//а если имеет значение 'en' – то на английском. Решите задачу через 2 if, 
//через switch-case и через многомерный массив без ифов и switch.

/*let lang = prompt('selected languages!', );

let arr = [];

 if (lang == "en"){
    arr = ['monday', 'tuesday', 'Thursday', 'wednesday', 'friday', 'saturday', 'sunday'];
} ;
if(lang == 'ru')  {
    arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'];
}; */

/* switch (lang){
    case 'ru':
        arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'];
        break;
    default:
        arr = ['monday', 'tuesday', 'Thursday', 'wednesday', 'friday', 'saturday', 'sunday'];
        break;
}
 console.log(arr);
*/
/* let obj = {
    'en': ['monday', 'tuesday', 'Thursday', 'wednesday', 'friday', 'saturday', 'sunday'],
    'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
}

console.log(obj[lang]); */

//Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном 1, 0, -3.

/*     let num = prompt('select number !', );
    if(num == 0) {console.log('верно')} else {console.log('неверно')}; */

//Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', 
//иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.

/* let num = Number(prompt('write a number!'));
if (num == 1 & num === 1){console.log('Correct!!')} else {console.log('Incorrect ;(')}; */

// Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. 
//Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

/* let num = +prompt('write a number!');

if (num === 0 || num === 2){
    num += 7;
    console.log(num);
} else {
    num /= 10;
    console.log(num);
} */

//Если переменная a равна или меньше 1, а переменная b больше или равна 3, 
//то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). 
//Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

/* let numA = +prompt('select number a!'), numB = +prompt('write number b!');
if (numA <= 1 & numB >= 3 ){
    console.log(`result: ${numB + numA}`);
} else {
    console.log(` result: ${numB - numA}`);
} */

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', 
//если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

/* let num =  +prompt('write a number', 0);
switch (num){
    case 1:
        console.log('primavara');
        break;
    case 2:
        console.log('vara');
        break;
    case 3:
        console.log('toamna');
        break;
    case 4:
        console.log('iarna');
        break;
    default:
        console.log('not a number 0..4 :(');
        break;
} */

//В переменной day лежит какое-то число из интервала от 1 до 31. 
//Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

/* let day = prompt('write a number 1..31!', 0);
console.log(day);

    if (day >= 1 & day <= 10){console.log('prima decada')}
    else if(day > 10 & day <= 20){console.log('a doua decada')}
    else if (day > 20 & day <= 31){console.log('a treia decada')}
    else {console.log('incorrect!')}; */

//В переменной month лежит какое-то число из интервала от 1 до 12. 
//Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

/* let month = prompt('select number of month 1..12 ', 0);

if(month == "12" || month == "1" || month == '2' ){
    console.log('зима');
} else if (month == "3" || month == "4" || month == '5' ){
    console.log("весна")
} else if (month == "6" || month == "7" || month == '8' ){
    console.log("лето");
} else if (month == "9" || month == "10" || month == '11' ){
    console.log("осень")
} else {
    console.log('something wrong!')
} */

//Дана строка, состоящая из символов, например, 'abcde'. Проверьте, 
//что первым символом этой строки является буква 'a'. 
//Если это так - выведите 'да', в противном случае выведите 'нет'.

/* let str = prompt('write a string!');
if (str[0] == 'a'){
    console.log('yes')
} else {
    console.log('No!')
} */

//Дана строка с цифрами, например, '12345'. Проверьте, 
//что первым символом этой строки является цифра 1, 2 или 3. 
//Если это так - выведите 'да', в противном случае выведите 'нет'.   

/* let str = prompt('write a number!', 00000);
if (str[0] == '1' || str[0]=='2' || str[0]=='3'){
   console.log('yes')
} else {
   console.log('No!')
}
*/

//Дана строка из 3-х цифр. Найдите сумму этих цифр. 
//То есть сложите как числа первый символ строки, второй и третий.

/* let sstring =prompt('wrie a string-number'), a = +(sstring[0]), b = +(sstring[1]), c = +(sstring[2]);
console.log(`number sum:${a+b+c}`); */

//Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
//Если это так - выведите 'да', в противном случае выведите 'нет'.

/* let sstring ='123123', a=+(sstring[0]),  b = +(sstring[1]), c = +(sstring[2]);
let d=+(sstring[3]), e=+(sstring[4]), f=+(sstring[5]), sum1= a+b+c, sum2= d+e+f;
if(sum1 == sum2){ console.log('yes')} else {console.log('No')}; */

//Выведите столбец чисел от 1 до 50

/*let i = 1;
   while( i <= 50){
    document.write(i + '<br>');
    i++;
}

for( let i=1; i<=50; i++){
   document.write(i + '<br>');
}*/

//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

/* let arr =[1, 2, 3, 4, 5];

for (let i=0; i < arr.length; i++ ){
    document.write(arr[i] + '<br>');
} */

//Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.

/* let result = 1 ;
let arr = [2, 3, 4, 5];

for (let i=0; i<arr.length; i++ ){
    result *= arr[i];
    console.log(result);
    document.write(result + "<br>");
} */

//Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. 
//С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.

/* let obj={
    'Минск':"беларусь",
    "Москва": "Россия",
    "Киев": "Украина",
}

for (key in obj){
    console.log(`${key}- is a - ${obj[key]}`);
} */

//Выведите столбец чисел от 1 до 100.
//Выведите столбец чисел от 11 до 33.

/*  for (let i=0; i<=100; i++){
    document.write(i + '<br>');
} */

//Выведите столбец четных чисел в промежутке от 0 до 100.

/* for(i=0; i<=100; i++){
    if (i % 2 == 0 ){document.write(i + '<br>')};
} */

//С помощью цикла найдите сумму чисел от 1 до 100.

/* let sum = 1;
for(let i = 0 ; i <= 100; i++){
    sum += i
}
document.write(sum); */

//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

/* let arr = [1, 2, 3, 4, 5];
for (let i = 0 ; i<arr.length;i++){ document.write(arr[i] + ' ')}; */

//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. 
//Запишите ее в переменную result.

/* let arr = [1, 2, 3, 4, 5], result = 0 ;
for (i= 0 ; i< arr.length; i++){
    result += arr[i];
    console.log(result);
}
document.write('result: '+ result ); */

//Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
/*
    var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};

    for(key in obj){
        document.write(' '+key+':'+obj[key] );
    } */

//Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. 
//С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

/* let obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400',
}

for(key in obj){
    document.write(key+ '-money-'+ obj[key]+ ' $ '+'<br>');
} */

//Дан массив с элементами 2, 5, 9, 15, 0, 4. 
//С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

/* let arr = [2, 5, 9, 15, 0, 4];
for(i = 0 ; i<arr.length; i++){
    if(arr[i] > 3 & arr[i] < 10 ){document.write('<h1>' + arr[i] + '<br>')}
}; */

//Дан массив с числами. Числа могут быть положительными и отрицательными. 
//Найдите сумму положительных элементов массива.

/*  let sum = 0;
 let arr = [2, -5, 9, -15, 32, 4, -10, -16, 5, 32, -58];
 for(i = 0 ; i<arr.length; i++){
     if(arr[i] > 0  ){
         sum += arr[i];
         document.write('<h1>' + sum + '<br>')
     }
 }
 document.write('<h1>'+ sum + '<br>'); */

//Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. 
//С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. 
//Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

/* let arr = [1, 2, 5, 9, 4, 13, 4, 10];

    for(let i = 0 ; i<arr.length; i++){
        if(arr[i] == 4 ){
            document.write('Есть! значение 4!');
            break;
        }
        console.log(arr[i]);
    } */

//Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. 
//Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
/*
    let arr =[10, 20, 30, 50, 235, 3000];

    for(let i =0 ; i<arr.length; i++){
        string = String(arr[i]);
        console.log(typeof string);
        if ( string[0] == '1' || string[0]== '2' || string[0]== '5'){
            document.write(string + '<br>');
        }

    } */

//Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

/* let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(let i = 0; i<arr.length; i++){
        document.write(`-${arr[i]}`);
    }
*/

//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

/* let arr = ['luni', 'marti', 'miercuri', 'joi', 'vineri', 'simbata', 'duminica'];

    for(let i = 0 ; i<arr.length ; i++){
        if(i>=0 & i<5 ){
            document.write(arr[i] + "<br>");
        } else{
            document.write("<strong>"+arr[i]+ "<br>");
        }
    } */

//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. 
//Текущий день должен храниться в переменной day.

/*  let day = 'marti', arr = ['luni', 'marti', 'miercuri', 'joi', 'vineri', 'simbata', 'duminica'];
        console.log(typeof arr[2]);
for(let i = 0 ; i<arr.length; i++){
  if(arr[i] !== day){
      document.write(`${arr[i]} <br>`);
  } else {
      document.write('<strong>' + arr[i] + '</strong>' + '<br>');
  }
}  */

//Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
/* let num  = 0;
for(let n = 1000; n > 50 ; num++ ){
       n /= 2;
       console.log(n);
}
console.log('Nr de iteratiuni' + num);  */

//Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b. Показать решение.

/*   let a = 10, b = 3 ;
  result = a % b;

  console.log(result); */

//Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, 
//иначе выведите 'Делится с остатком' и остаток от деления. Показать решение.

/* let a=12, b=35;

if( a % b == 0){console.log('se imprateste fara rest')} else {document.write('nu se imparteste')}; */

//Возведите 2 в 10 степень. Результат запишите в переменную st.

/* let st = Math.pow(2, 10);
document.write(st); */

//Найдите квадратный корень из 245.

/* let result = Math.sqrt(245);
console.log(result); */

//Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. 
//Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

/* let arr = [4, 2, 5, 19, 13, 0, 10], sumCoub, sumSqrt;

for (let i = 0; i < arr.length; i++){
   sumCoub =  Math.pow(arr[i], 2);
   sumSqrt = Math.sqrt(sumCoub);
    document.write(sumSqrt + ' ');
} */

//Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

/* let num = Math.sqrt(379);
console.log(num);
console.log(Math.round(num));
console.log(num.toFixed(2));
console.log(num.toFixed(3)); */

//Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, 
//запишите результаты округления в объект с ключами 'floor' и 'ceil'.

/* let num = Math.sqrt(587);
let obj = {}, floor = Math.floor(num), ceil = Math.ceil(num);
obj.ceil = ceil;
obj.floor = floor; */

//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число


/* document.write(Math.max(4, -2, 5, 19, -130, 0, 10)+ '<br>');
document.write(Math.min(4, -2, 5, 19, -130, 0, 10)); */

//Выведите на экран случайное целое число от 1 до 100.

/* function getRandomNumber(min, max){
    return Math.floor(Math.random()* (max - min +1 )) + min;

}
document.write(getRandomNumber(1, 100));
*/

//Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while). 

/* let arr = [];
for (let i = 0; i < 10; i++){
    arr[i] = getRandomNumber(1, 10);
}
console.log(arr);

function getRandomNumber(min, max){
    return Math.floor(Math.random()* (max - min +1 )) + min;

} */

//Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. 
//Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. 
//Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

/* let a = prompt('a'), b = prompt('b'), c=Math.abs(a-b);
console.log(c); */

//Дан массив arr. Найдите среднее арифметическое его элементов. 
//Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

/*    let arr = [12, 15, 20, 25, 59, 79], sum = 0, result;

for (let i = 0; i<arr.length; i++  ){
   sum += arr[i];
   console.log(sum);
   if(i == arr.length - 1){
       result = sum / (i + 1);
   }
}

console.log(sum);
console.log(result); */

//Напишите скрипт, который будет находить факториал числа. 
//Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. 
//Например, 4! = 1*2*3*4.

/* let n = prompt('select number of factorial'), m = n;

for (let i = n-1; i >= 1; i--){
      m = m *(n-i);
      console.log(m);
} */

// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

/*  let str = 'aaa@bbb@ccc';
 let newstr = str.replace(/@/g, '!');
 console.log(newstr) */

//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами

/* let str = 'aaa bbb ccc';

console.log(str.slice(3, 7));
console.log(str.substring(3, 7));
console.log(str.substr(3, 4)); */

//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.

/* let data = '2025-12-31';
let arrData = data.split('-');
console.log(arrData);
 arrData = arrData.reverse();
console.log(arrData);
console.log(arrData.join('//')); */

//Дана строка 'js'. Сделайте из нее строку 'JS'.
//Дана строка 'JS'. Сделайте из нее строку 'js'.

/* let str = "js", str1 = 'JS';
console.log(str.toUpperCase());
console.log(str1.toLowerCase()); */

//Дана строка 'я учу javascript!'. Найдите количество символов в этой строке

/*  let str = 'я учу javascript!', symbols = 0, space = 0;
 let arrstr = str.split('');
 console.log(arrstr);


 for(let i = 0 ; i<=arrstr.length ; i++){
     if(arrstr[i] == " "){
          space = space + 1;

     } else {
         symbols = symbols + 1;

     }

 }
 document.write(`space: <strong> ${space} </strong> <br> symbols: <strong> ${symbols} </strong>`); */

//Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' 
//тремя разными способами (через substr, substring, slice).

/* let str = 'я учу javascript!';
console.log(str.slice(2, 5));
console.log(str.substr(2, 4));
console.log(str.substring(2, 5));
*/

//Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

/* let str = 'я учу javascript!';
console.log(str.indexOf('учу',)); */

//Дана переменная str, в которой хранится какой-либо текст. 
//Реализуйте обрезание длинного текста по следующему принципу: если количество символов 
//этого текста больше заданного в переменной n, tо в переменную result запишем первые n символов строки str и 
//добавим в конец троеточие '...'. 
//В противном случае в переменную result запишем содержимое переменной str.

/* let str = prompt('insert some text', ), result, n = prompt('number of simbols', 0);
let arrstr = str.split('');
console.log(arrstr);

if(arrstr.length > n){
    result = str.substr(0, n);
    document.write(`<strong> result : </strong> ${result} ...`)
} else{
    result = str;
    document.write(`<strong> result : </strong> ${result}`)
} */

//Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.

/* let str = 'я-учу-javascript!';
console.log(str.replace(/-/g, '!')); */

//Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

/* let str = 'я-учу-javascript!';
console.log(str.split('-')); */


//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

/* let data = '2025-12-31', arrData = data.split("-"), inverseData = arrData.reverse();
console.log(inverseData);
console.log(inverseData.join('.')); */

//Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

/* let arr =['я', 'учу', 'javascript', '!'];
    console.log(arr.join('+'));
*/

//Преобразуйте первую букву строки в верхний регистр.

/*   let str = "переменной date лежит";
      let arrStr = str.split('');

      arrStr[0] = arrStr[0].toUpperCase();
      console.log(arrStr.join('')); */

//Преобразуйте первую букву каждого слова строки в верхний регистр

/* let str = prompt('write some caracters!');
let arrstr = str.split('');

    for(let i = 0 ; i<arrstr.length; i++){
        if(arrstr[i] == " "){
            arrstr[i + 1] = arrstr[i+1].toUpperCase();

        } else if (i == 0){
            arrstr[i] = arrstr[i].toUpperCase();
        }
    }
    console.log(arrstr.join('')); */

//Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

/* let str = prompt('write some caracters!');
let arrstr = str.split('');

    for(let i = 0 ; i<arrstr.length; i++){
        if(arrstr[i] == "_"){
            arrstr[i + 1] = arrstr[i+1].toUpperCase();
            arrstr[i] = arrstr[i].replace('_', '');
        }
    }
    console.log(arrstr.join('')); */

//Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

/* function square(num){
    return num*num;
}

console.log(square(25)); */
// Сделайте функцию, которая возвращает сумму двух чисел.

/* function Num(num){
    return num+num;
}
console.log(Num(25)); */

//Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

/* function DifNum(a, b, c){
    return (a - b)/c;
}
console.log(DifNum(50, 3, 5)); */

//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

/* function DayOfMonth(num){
    let obj = {
        1: 'luni',
        2: 'marti',
        3: 'miercuri',
        4: 'joi',
        5: 'vineri',
        6: 'simbata',
        7: 'duminca'
    }
    return obj[num];
}

console.log(DayOfMonth(6)); */

// Дан массив с числами. Проверьте, что в этом массиве есть число 5. 
// Если есть - выведите 'да', а если нет - выведите 'нет'.
/* let str = '13213498726698';
let arr = str.split('');
console.log(arr);

function Num(arr){
    for (let i=0; i<arr.length; i++){
        if (arr[i] == 5){
            return true;
        }
    }
    return false;
}
console.log(Num(arr)); */

// Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы.
// То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', 
// а если делится - выведите 'true'.

/* let num = 100;
let divide = 0;
let arr = [];
console.log(arr);

for (let j=2; j< num; j++){
    arr.push(j);
}
    console.log(arr);
 function Num(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (num % arr[i] == 0) {
            divide += 1;
            console.log(arr[i]);
            return true;
        }
    }
    return false;
}
console.log(Num(arr));
console.log(divide); */
// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
// Если есть - выведите 'да', а если нет - выведите 'нет'.

/*    let str = '1321349338726698';
           let arr = str.split('');
           console.log(arr);

           function Num(arr) {
               for (let i = 0; i < arr.length; i++) {
                   if (arr[i] == arr[i+1]) {
                       return true;
                   }
               }
               return false;
           }
           console.log(Num(arr));  */

//Сделайте функцию, которая параметрами принимает 2 числа. 
//Если эти числа равны - пусть функция вернет true, а если не равны - false.

/* function Num(a, b){
    return a == b ;
}
console.log(Num(3, 3)); */

 //Сделайте функцию, которая параметрами принимает 2 числа. 
 //Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
/* function Num(a, b){
    return 10>a+b ;
}
console.log(Num(3, 3)); */

 //Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
 //Если отрицательное - пусть функция вернет true, а если нет - false.       

/* function Num(a){
    return 0>a ;
}
console.log(Num(-3)); */

//С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

/* let arr = [];

for(let i=1; i< 10; i++ ){
   arr.push(i);
}
console.log(arr);
let versostr = arr.reverse();
console.log(versostr);
let str  = arr.join('');
console.log(str);  */


//С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.        
/* let str2 = arr.join('-');
console.log(str2); */

//Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
/*     let str = '';
for (let i = 0; i<20; i++){
    str += "x";
    console.log(str);
} */

//С помощью двух вложенных циклов нарисуйте следующую пирамидку:

/* let str = '';
for(let i=1 ; i<10;i++ ){
    for(let j=1; j<=i; j++){
        document.write(i);
    }
    document.write('<br>');
} */

//Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.

/* let arr = [], n = prompt('select n', 0), i = 0;
for ( i  ; i<n; i++){
arr[i]= 'x';
  for(j =0; j<i;j++){
      arr[i]+= "x";
      console.log(arr[i])

  }
}
console.log(arr); */

//Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.

              /* let arr = [], n= 10;

              for(let i = 1 ; i<n; i++){
                  let str = String(i);
                  console.log(str);
                  arr[i]= str;
                  console.log(arr);
                  for(let j=1 ;j<i; j++){
                      arr[i] += str;
                  }
              }
               console.log(arr); */

//Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. 
//Первым параметром функция принимает значение, которым заполнять массив, 
//а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

             /*  let arr = [];
              function arayFill(str, num){
                  for (let i = 0 ; i<num; i++){
                    arr.push(str);
                  }
                  return arr;
                  //console.log(arr)
              }
             console.log(arayFill(55, 5)); */

//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

              /* let str = '1321349338726698', sum = 0, elem = 0; 
              var arrs =str.split('');
              for(let j=0 ; j<arrs.length; j++ ){
                  arrs[j] = Number(arrs[j]);
              }
                console.log(arrs);
            function sumOfNum(arrs) {
                for (let i = 0; i < arrs.length; i++) {
                    sum += arrs[i];
                    if (sum >= 10) {
                        elem = i + 1;
                        console.log(elem);
                            break;
                    }
                }

            }
              sumOfNum(arrs); */

//Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

            /*  let  arr = [1, 2, 3, 4];
             let   arr2 = [];
                for(let i = arr.length - 1; i >= 0; i--) {
                arr2.push(arr[i]);
                }

                console.log(arr2) */

//дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
//Найдите сумму элементов этого массива. 
//Массив, конечно же, может быть произвольным. Показать решение.


                /* let arr = [[1, 2, 3], [4, 5], [6]], sum = 0;
                    for(let i = 0 ; i< arr.length;i++){
                    for(j=0; j<arr[i].length; j++){
                        sum += arr[i][j];
                    }

                }
                console.log(sum); */ 

//Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
//Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.            

                /* let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]], sum = 0;
                for(let i = 0 ; i< arr.length;i++){
                    for(j=0; j<arr[i].length; j++){
                        for(k = 0; k<arr[i][j].length; k++){
                            sum += arr[i][j][k];
                        }
                }

                }
                console.log(sum); */

//Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. 
//Создайте для этого вспомогательную функцию isPositive(), 
//которая параметром будет принимать число и возвращать true, 
//если число положительное, и false - если отрицательное.

                /* let arr =[1, -5, -6, 7, 25, 3, 6, -9,], arr1 =[];

                for(let i = 0 ; i<arr.length; i++){
                    if(isPositive(arr[i])){
                        arr1.push(arr[i])}
                }
                    
                function isPositive(num){
                    return num >0;
                }
                console.log(arr1); */

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. 
//Если это так - пусть функция возвращает true, если не так - false.

                /*function isNumberInRange (num){
                    return num>0 && num<10;
                }
                console.log(isNumberInRange(5));*/

// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. 
//Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

                /*let arr = [2, 3, 5, 9, -5, 10, 15, -5, 25], arr2 = [];
                for(let i=0; i< arr.length; i++ ){
                    if(isNUmberInRange(arr[i])){
                        arr2.push(arr[i]);
                    }
                }

                function isNUmberInRange(num){
                    return num>0 && num<10
                }
                console.log(arr2);*/

//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

                /*let str = '12345', sum = 0;
                let arr = str.split('');
                console.log(arr);

                function getDigitsSum(arr){
                    for (let i = 0 ; i< arr.length; i++){
                        arr[i]= Number(arr[i])
                        console.log(arr)
                        sum += arr[i];
                    }
                        return sum;
                }
                console.log(getDigitsSum(arr));*/

// Найдите все года от 1 до 2019, сумма цифр которых равна 13. 
//Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
            /*  var arr = []; 
            var arr1=[];
                for (let i=1; i<=2019; i++){
                    arr.push(i);
                }

                for(let j = 0 ; j< arr.length; j++){
                    if(inRange(arr[j])){
                        arr1.push(arr[j]);
                    }
                }
                    console.log(arr1);

        function inRange(num) {
            var sum = arraySum(getDigits(num)); 
            return sum > 13;
        }

        function arraySum(arr) {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum += Number(arr[i]);
            }
        
            return sum;
        }

        function getDigits(num) {
            return String(num).split('');
        }  */
        
//Сделайте функцию isEven() (even - это четный), 
//которая параметром принимает целое число и проверяет: четное оно или нет. 
//Если четное - пусть функция возвращает true, если нечетное - false.

        /* function isEven(num){
            return num % 2 ==0;
        }
        console.log(isEven(25)); */

//Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. 
//Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
       /*  let arr = [25, 24, 23, 28, 15, 26, 17];
        let arr2 = [];
            for(let i= 0 ; i < arr.length; i++){
                if(isEven(arr[i])){
                    arr2.push(arr[i]);
                }
            }
            console.log(arr2);
            function isEven(num){
                return num % 2 ==0;
            } */

//Сделайте функцию getDivisors, 
//которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
             /* let arr=[];
            function getDivisors(num){
                for(let i =1 ; i<=num; i++){
                    if(num % i ==0){
                        arr.push(i)
                    }
                }
                return arr;
            }
            console.log(getDivisors(24));  */

// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. 
//Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, 
//делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

            /* let str = 'определяет';
            function ucfirst(str){
                str[0].toUpperCase()
            } */