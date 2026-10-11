function showMenu(){
    console.log("---VENDING MACHINE MENU---");
    console.log("1. WATER BOTTLE - Rs.20");
    console.log("2. COKE         - Rs.40");
    console.log("3. LAYS         - Rs.30");
    console.log("4. PROTEIN BAR  - Rs.25");
    console.log("5. MONSTER      - Rs.40");
    console.log("--------------------------");
}
function change(rs,amt,item){
    if (amt<rs){
        alert("!!!Insufficient balance!!!");
        return false;
    }else if (amt===rs){
        alert("Exact amount received...You bought :"+item);
        return true;
    }else{
        var rem=amt-rs;
        alert("Item:"+item+"\n Change : Rs." +rem);
        return true;
    }
}
function count(){
    for (var i=3; i>=1; i--){
    console.log("Dispensing in "+i+"...");
    }
    console.log("Your item is ready!");
}
function pattern(row){
    console.log("Item row for "+row+":");
    for (var r=1; r<=row ; r++){
        var txt=" ";
        for (var c=1 ; c<=r ; c++){
            txt=txt + c +" ";
        }
        console.log("Row " + r + "of" + row + ":"+ txt);
    }
    console.log("Finished printing " + row + ": "+txt);
}
function openVM(){
    var req=true;
    while (req){
        showMenu();
        var itemno=Number(prompt("Select an item number (1-5) : "));
        var item=" ";
        var price= 0;
        if (itemno===1){
            item=" WATER BOTTLE ";
            price= 20;
        } else if (itemno===2){
            item=" COKE ";
            price= 40;
        } else if (itemno===3){
            item=" LAYS ";
            price= 30;
        } else if (itemno===4){
            item=" PROTEIN BAR ";
            price= 25;
        } else if (itemno===5){
            item=" MONSTER ";
            price= 40;
        } else {
            alert("Invalid item number! Please enter 1 , 2 , 3 , 4 or 5.");
            req=confirm("Do you want to try again?");
            continue;
        }
        var amt=Number(prompt("Price is Rs."+price+". Enter your money :"))
        if (amt<=0 || isNaN(amt)){
            alert("Invalid amount! Please enter a valid positive number.");
            again=confirm("Do you want to make another purchase?");
            continue;
        }
        var isBought=change(price,amt,itemno);
        if (isBought){
            count();
            pattern(itemno);
        }
        req=confirm("Do you want to make another purchase?");
    }
    alert("Thank you for using the Smart Vending Machine!")
}