
 
 function Onclick1(elem){
    let elem1 = document.getElementById('input');
   elem1.value +=elem.value;
console.log(elem1.value);
    if(elem.value == '='){
            let str = elem1.value;
            let arr = str.split('');
            console.log(str);
            console.log(arr);
            elem1.value = '';
            for (let i=0; i< arr.length-1; ){
               if(!isNaN(arr[i])){ 
                   arr[i] = Number(arr[i]);
                    i++;
                }else{
                    i++;
                }
            }
            console.log(arr);
        }
 }
