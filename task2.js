function calavg(n1,n2,n3){
    let total = n1 + n2 + n3 ;
    let avg = total / 3 ;
    return { total: total , average: avg };
}
function cal(){
    let rep=true;
    while (rep){
        let name=prompt("Enter student's name:");
        let m1=Number(prompt("Enter marks for SUB1 (out of 100)"));
        let m2=Number(prompt("Enter marks for SUB2 (out of 100)"));
        let m3=Number(prompt("Enter marks for SUB3 (out of 100)"));
        if (m1 >= 0 && m1 <= 100 && m2 >= 0 && m2 <= 100 && m3 >= 0 && m3 <= 100){
            let res = calavg(m1,m2,m3);
            let total = res.total;
            let avg = res.average;
            let gr = " ";
            if (avg >=90){
                gr="A"
            } else if (avg>=75 && avg<90){
                gr="B"
            } else if (avg>=50 && avg<75){
                gr="C"
            } else{
                gr="F"
            }
            alert(
                "Student Name : "+ name + "\n" +
                "Total Marks : "+ total + "\n" +
                "Average: "+ avg.toFixed(2) + "\n" +
                "Grade : "+ gr );
        }else{
            alert("Error : Marks are to be provided between 0 to 100");
        }
        rep=confirm("Do you want to calculate another student's result? ");
    }
}