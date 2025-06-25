const student={
    name:"shifana",
    age:21,
    email:"shifanaibrahim68@gmail.com",

};
console.log(student.name)


let num=8
if(num%2===0){
    console.log("the number is even")
    
}else{
    console.log("the number is odd")
}

let number=80
if(number>90){
    console.log("Grade A");

}else if(number>=75){
    console.log("Grade B");

}
else if(number>=50){
    console.log("Grade c");
}
else {
    console.log("fail");
}
    
    


const add=()=> console.log(5+3)
add()



function sum(name){
    return `hi, ${name}`;
}
console.log(sum("sdfghjkl"))