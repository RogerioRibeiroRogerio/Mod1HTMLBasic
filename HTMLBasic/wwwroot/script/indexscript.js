function myMulti(p1, p2) {
    return p1 * p2;
}
function myFunction () {
    var answer2 = "He is called 'Johnny'";
    var answer3 = 'He is called "Johnny"';
    let answer1 = "It's alright";
    return answer1 + "<br>" + answer2 + "<br>" + answer3;

}

function jsonStyle() {
    var text = '{"employees":[' +
        '{"firstName":"John","lastName":"Doe" },' +
        '{"firstName":"Anna","lastName":"Smith" },' +
        '{"firstName":"Peter","lastName":"Jones" }]}';
    obj = JSON.parse(text);

    return obj.employees[0].firstName + " " + obj.employees[0].lastName + " " + obj.employees[1].firstName + " " + obj.employees[1].lastName ;
}


//function myFunction2() {

//    var answer2 = "He is called 'Johnny'";
//    var answer3 = 'He is called "Johnny"';
//    let answer1 = "It's alright";

//    if (new Date().getHours() < 22) {
//        return answer1 + "<br>" + answer2;
//    }
//    else
//        return answer1 + "<br>" + answer2 + "<br>" + answer3;

//}


    
