function ex1(){
    let input="";
    let sum=0;


    while(input!=-1){
        input = parseInt(prompt("Enter a number: "));
        alert("Bạn vừa nhập: "+input);
        sum+=input;
    }
    alert("Tổng các số vừa nhập là: "+sum);
}
//ex1();

function ex2(){
    let i=1;
    while(i<10){
        document.write("<hr width="+i+"%>");
        i++;
    }
}

ex2();