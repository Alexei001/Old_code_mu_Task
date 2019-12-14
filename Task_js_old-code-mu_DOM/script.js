
//Дан HTML код (см. под задачей). Поменяйте содержимое 
//абзацев с классом zzz на их порядковый номер в коде.
    /* function func() {
        let elem = document.querySelectorAll('p.zzz');
        console.log(elem);     
        for(let i = 0 ; i<elem.length;i++){
            elem[i].innerHTML = i+1;
        }   
    } */

   /*  function func(){
        let elem = document.getElementById('text');
        elem.innerHTML = "Ку-ку! А я" ;
        elem.outerHTML = elem.innerHTML + '<b> жирный! </b>';
    
        }
 */

//transform paragraph on h3 tags
       /*  function clickMe(){
            let elem = document.getElementById('test1');
            elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>';
        } */
//sum two numbers
        /* function result(){
            let elem1 = (document.getElementById('input1'));
            let elem2 = (document.getElementById('input2'));
            let elem3 = document.getElementById('p');
            let elem2value = Number(elem2.value)
            let elem1value = Number(elem1.value)
             
            let sum = elem2value + elem1value;
            elem3.innerHTML = "= " + sum;           
        } */

//rewrite the html text

        /* function test(){
            let arrOfelem = document.getElementsByTagName('p');
                for (let i = 0; i<arrOfelem.length; i++){
                    arrOfelem[i].innerHTML = 'KU-KU!';
                }
        } */

//Дан HTML код (см. под задачей). Поменяйте содержимое элементов 
//с классом www на их порядковый номер в коде.        

         /* function func(){
            let elemOfArr = document.querySelectorAll('p.www');
            console.log(elemOfArr);
            for (let i=0; i<elemOfArr.length; i++){
                elemOfArr[i].innerHTML = i+1;
            }
        } */ 


//setAtribute, removeAtribute, hasAttribute, getAttribute
            
        /* function func(){
            var elem = document.getElementById('class');
            alert(elem.getAttribute('class'));

        }

        function func2(){
            var elem = document.getElementById('class');
            elem.setAttribute('class', 'new-class');
            alert('class atribute is change');
        } */

//some example 1
      /*   function func(){
            let elem = document.getElementById('test').value;
            let paragraph = document.getElementById('test1');
            paragraph.innerHTML = elem;
        } */

//example2

       /*  function funnc(){
            let elemArr = document.getElementsByTagName('a');
            for (let i=0; i<elemArr.length; i++){
                elemArr[i].innerHTML =elemArr[i].innerHTML + elemArr[i].getAttribute('href') ;
            }
        } */
//example3
        /* function func(){
            let elem = document.getElementById('test');
            elem.innerHTML = 'rewriten text';
            elem.style.color = 'red';
            let button = document.getElementById('button');
            button.disabled = true;
        } */

//example4

       /*  function func(){
            let element = document.getElementsByTagName('p')
            for (let i = 0 ; i<element.length; i++){
                element[i].innerHTML = i+1 + '. ' +  element[i].innerHTML ;
            }
        } */

//example 5 method Date
// Выведите на экран текущий день. Показать решение.
// Выведите на экран текущий месяц. Показать решение.
// Выведите на экран текущий год. Показать решение.

/*let date = new Date();
console.log(date.getDate());
console.log(date.getMonth()+1);
console.log(date.getFullYear());*/

// Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. 
//Для решения этой задачи напишите функцию, 
//которая будет добавлять 0 перед днями и месяцами, 
//которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014). Показать решение.
  /*let date = new Date(2014, 11, 1, 12, 59, 59  );

   function dateOfZero(date){
            for(let i=0 ; i<date.length; i++ ){
                if(date[i]> 0 && date[i] <10){
                    //return '0' + date[i];
                    console.log('0' + date[i]);
                }else{
                    return date[i];
                }
            }
   }
   dateOfZero(date);
   console.log(date.getHours() + ':'+ date.getMinutes() + ':' + date.getSeconds() + "  " + date.getDate() + '.'+ date.getMonth() + '.' + date.getFullYear() );*/

// Выведите на экран текущий день недели (словом, по-русски). 
//Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, 
//а возвращает день недели по-русски. Показать решение.

   /*let date = new Date();
   let num1 = date.getDay();
   console.log(num1);

   function showDay(num){
    let day = ['luni', 'marti','mercuri','joi','vineri','simbata', 'duminica'];
        return day[num];
   }

   console.log(showDay(num1));*/


// Узнайте, какой был 7-го января 2015 года. Показать решение.

    /*let date = new Date(2015, 0, 7  )
    let num1 = date.getDay();
        console.log(num1);
        function showDay(num){
                let day = ['luni', 'marti','mercuri','joi','vineri','simbata', 'duminica'];
                return day[num];
                }

        console.log(showDay(num1));*/

// Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени. Показать решение.

                /*let date = new Date();
                let timeOfyear = date.getTime(1970, 0, 1);
                console.log(timeOfyear/(1000*60));*/

//Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse. Показать решение.

  /* let time = Date.parse('1988-03-01T00:00:00');

   let nowDate = new Date();
   let now = nowDate.getTime();
   console.log((now - time)/(1000*60 *60) + ' haours');*/

// Выведите на экран количество секунд с начала дня до настоящего момента времени. Показать решение.
        /*let time = Date.parse('2019-12-14T00:00:00');
        let startDay = new Date();
        let now = startDay.getTime();
        console.log((now - time)/(1000) + ' seconds');*/


// Выведите на экран количество секунд, которое осталось до конца дня.

      /*  let time = Date.parse('2019-12-14T00:00:00');
        let time2 = Date.parse('2019-12-14T23:59:59');
        console.log((time2-time)/(1000) + ' second__end o the day');*/

// Создайте инпут, в который пользователь вводит дату 
//своего рождения в формате '2014-12-31' (с конкретным годом). 
//По потери фокуса выведите под инпутом сколько дней осталось 
//до его дня рождения. Воспользуйтесь методом Date.parse.

    function func(){
        let date = document.getElementById('test').value;
        let docDate = document.getElementById('test2');
        let nowDay = new Date();
        let nowTime = nowDay.getTime();
        let arrDate = date.split('-');
        arrDate.shift();
        let newDate2 = arrDate.join('-');
        let finalDate = nowDay.getFullYear()+1 + '-' + newDate2;
        finalDate = Date.parse(finalDate);
         docDate.innerHTML= (finalDate-nowTime)/(1000*60*60*24) + ' days of you date birtdays';

    }




   

