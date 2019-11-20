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