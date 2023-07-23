let num1: number[] = [4,14,6,32,2];
let num2: number;

let i = 0;

    
    num2 = num1[i] + num1[i];
    console.log(num2);

    i++;
    
    num2 = num1[i] - num1[++i];
    console.log(num2);

    i++;
    num2 = num1[i]/num1[0];
    console.log(num2);

    i++;
   
    num2 = num1[i]*num1[0];
    console.log(num2);
