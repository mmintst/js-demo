function grade(score) {
    if (score>=80 && score<=100) {
        console.log("You got A");
    } else if (score>=70 && score<=79) {
        console.log("You got B");
    } else if (score>=60 && score<=69) {
        console.log("You got C");
    } else if (score>=50 && score<=59) {
        console.log("You got D");
    } else if (score<=50 && score>=0) {
        console.log("You got F");
    } else {
        console.log("error");
    }
}; 

grade(Math.round(59.7));

function foo(a, b) {
    console.log(a, b)
}

const bar = (a, b) => {
    console.log(a, b)
}



const grade = (score) => {
    if (score<0 || score>100) {
        console.log("error");
        return
    }

    score = Math.round(score);

    if (score>=80) {
        console.log("You got A");
    } else if (score>=70) {
        console.log("You got B");
    } else if (score>=60) {
        console.log("You got C");
    } else if (score>=50) {
        console.log("You got D");
    } else {
        console.log("You got F");
    } 
}; 