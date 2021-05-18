// 1. Define a variable named `students` and assign a blank object to it.
let students = {};

// 2. Add a key of the value of variable `studentName` in the object created above with the value of your name.
students = {
    studentName: "Vineet"
}

// 3. Using `console.log` log the value of `studentName` key from the `students` object
console.log(students.studentName);

// 4. Add a another key of the value of variable `batch` in the object with the value of 16.
students["batch"] = 16;

// 5. Using `console.log` log the value of `batch` key from the `students` object
console.log(students["batch"]);

// 6. Add another key in the object with the value of the variable `isAdult`. The value of the key should be `true/false`
students.isAdults = true;

// 7. Using `console.log` print the value of `isAdult` key from the `students` object
console.log(students.isAdults);

// 8. Add a another key of `42` to the object with a value of `The answer to the meaning of life`.
students[42] = "The answer to the meaning of life";

// 9. Using `console.log` print the value of key `42` from the `students` object
console.log(students[42]);


// 10. Check the length of object named `students`.
console.log(students.length);

// 11. Can you define a key of `let or var` in any object? Reason.

// Yes we can use special a key of 'Let or var' in any object because it is key which is inside the object.

// 12. Delete the `isAdult` property from the object `students`. Also, print the object before or after deleting the property
console.log(students);
// {42: "The answer to the meaning of life", studentName: "Vineet", batch: 16, isAdults: false}
delete students.isAdults;
console.log(students);
// {42: "The answer to the meaning of life", studentName: "Vineet", batch: 16}

// 13. Update the value of the key batch in the object `students` and print it using `console.log`
students.batch = 26;
console.log(students.batch);
