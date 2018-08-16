let squaree = function(num){
    console.log(num)
}
squaree(3);

let square = function(num){
    let result = num * num;
    return result;
}

let value = square(3);
let otherValue = square(10);
console.log(value);
console.log(otherValue);

let convertFahrenheit = function(temp){
    let converted =(temp -32) * 5/9;
    return converted;
}

let convert = convertFahrenheit(32);
let otherConvert = convertFahrenheit(68)
console.log(convert)
console.log(otherConvert);

let name;
name = "Mike"
if(name === undefined){
    console.log("Please Enter a name")
}else{
    console.log(name)
}

//Having Multiple arguments

let add = function(num1,num2){
    return num1 + num2
}

let res = add(9,1);
console.log(res);


//Having default values as arguments
const test = function(name,score = 30){
    console.log(name);
    console.log(score);
}
test()

const getTip = function(total,tipPercent = 0.2){
    return total * tipPercent;
}

let getResult = getTip(100,0.5);
console.log(getResult);

let gradeCalculator =function(score, totalAvailabeScore){
    let percent = (score/totalAvailabeScore) * 100;
    if(percent >=90){
        return `You got a A ${percent}%`
    }else if(percent >=80){
        return `You got a B ${percent}%`
    }else if(percent >=70){
        return `You got a C ${percent}%`
    }else if(percent >=60){
        return `You got a D ${percent}%`
    }else {
        return `You got an F`
    }
}

let result = gradeCalculator(15,20);
console.log(result);

//Alternative solution

let gradeCalc = function(score,totalScore){
    let percent = (score/totalScore)*100;
    let letterGrade = '';
    if(percent >=90){
        letterGrade = 'A'
    }else if(percent >=80){
        letterGrade = 'B'
    }else if(percent >=70){
        letterGrade = 'C'
    }else if(percent >=60){
        letterGrade = 'D'
    }else{
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} with ${percent} % score`
}

let totalResult = gradeCalc(1,20);
console.log(totalResult)