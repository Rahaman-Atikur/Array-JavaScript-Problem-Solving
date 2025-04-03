/* Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.*/

const booksList =['JavaScript lover','C++ lover','Mr Bean','Tom and Jerry'];
if(booksList.includes('JavaScript lover')){
    console.log("Yes contains");
}
else{
    console.log("No it doesn't contain");
}
