const opelm=document.getElementById("output")
function page(text){
    opelm.textContent += text + "\n"
}
function MT(num){
    page('MULTIPLICATION TABLE FOR ${num}');
    for (let i = 1;i < 11; i++){
        page(`${num} * ${i} = ${num*i}`)
    }
    page(" ");
}
function sumnum(num){
    let sum=0;
    for ( let i=1;i <=num ; i++){
        sum += i;
    }
    return sum;
}
function tri(rows){
    page('RIGHT-ANGLED TRIANGLE');
    for(let i=1;i<=rows;i++){
        let row=" ";
        for (let j=1;j<=i;j++){
            row += "* "
        }
        page(row);
    }
    page(" ")
}
function sq(rows){
    page('SQUARE');
    for(let i=1;i<=rows;i++){
        let row=" ";
        for (let j=1;j<=rows;j++){
            row += "* "
        }
        page(row);
    }
    page(" ")
}
function prog(){
    let rep=true;
    while (rep){
        opelm.textContent=" ";
        let ip=prompt("Enter a number :");
        if (ip === null){
            page("Operation Cancelled.");
            break;
        }
        let num=Number(ip);
        if (isNaN(num) || ip.trim() === " " || num <= 0){
            alert("please enter a valid positive number.")
            page("Invalid input entered. Please try again.")
        }else{
            let type= " ";
            if (num%2===0){
                type="even";
            }else{
                type="odd";
            }
            let sum=sumnum(num);
            page('Entered Number: ${num}');
            page('Number type: ${type}');
            page('Sum of Natural Numbers : ${sum} \n');
            MT(num);
            if (type==="even"){
                sq(num);
            }else{
                tri(num);
            }
            alert(`Number : ${num} \n Type : ${type} \n sum : ${sum}`);
        }
        rep=confirm("Do you want to run the program again ?")
    }
}
prog()