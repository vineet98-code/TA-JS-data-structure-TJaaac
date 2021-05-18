// 1. Create an array named numbers and store 5 number values in it
let numbers = [1,2,3,4,5];

// 2. Calculate the sum of array items and print it to the console using console.log()
for (i = 0; i < numbers.length; i++){
    var sum = sum + i;
    console.log(sum);
}


// 3. Calculate the average of array items and print it to the console using console.log()

// 4. Find the highest number in the array and print it to the console using console.log()


// 5. Find the lowest number in the array and print it to the console using console.log()

// 6. Find the even numbers in the array and print them to the console using console.log()
for (i = 0; i < numbers.length; i++){
    if(i%2 !== 0) {
        console.log(numbers[i]);
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()
for (i = 0; i < numbers.length; i++){
    if(i%2 == 0) {
        console.log(numbers[i]);
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for (i = 0; i < numbers.length; i++){
    if(i/5 == 0) {
        console.log(numbers[i]);
    }
}

// 9. Log all the element of the array one by one
for(let number of numbers){
    console.log(number);
}

// 10. Find all the number in the array that is divisible by 3
