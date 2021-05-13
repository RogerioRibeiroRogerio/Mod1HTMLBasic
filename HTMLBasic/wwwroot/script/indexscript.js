const arrayRoger = [
    {

        "id": "session-1",
        "firstName": "John"
    },
    {

        "id": "session-2",
        "firstName": "Fohn"

    },
    {

        "id": "session-3",
        "firstName": "Hohn"

    },
    {

        "id": "session-4",
        "firstName": "rohn"

    }
];
const list = document.getElementById("exjson");

// TODO: Task 2 - Get the "schedule" list element from the document
// const list = ... ;
alert("bumbumbum"),

function createSessionElement(session) {
    // TODO: Task 3 - Create a <li> element for the session.
    //       Add the session title as the <li> text content
    //       Return the <li> element
    const li = document.createElement("li");
    

    li.textContent = session.firstName;
    return li;
} 

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function dysplayarrayRoger() {
   /* clearList();*/
    
    alert("até ali");
    /*obj = JSON.parse(text);*/
    for (let i = 0; i < arrayRoger.length; i++) {
        const li = createSessionElement(arrayRoger[i]);
        list.appendChild(li);
        
    }
    
}
dysplayarrayRoger();

////function myMulti(p1, p2) {
////    return p1 * p2;
////}
////function myFunction () {
////    var answer2 = "He is called 'Johnny'";
////    var answer3 = 'He is called "Johnny"';
////    let answer1 = "It's alright";
////    return answer1 + "<br>" + answer2 + "<br>" + answer3;

////}

////const list = document.getElementById("exjson");

////function CreatLI(session) {
////    const li = document.createElement("li");
////    li.textContent = session.title;

////    return li;
////}
////const text = [
////        {
////            "id": "session-1",
////            "firstName": "John",
////            "lastName": "Doe",
////            "age": "37"
////        },
////        {
////            "id": "session-2",
////            "firstName": "Manuel",
////            "lastName": "Bode",
////            "age": "89"
////        },
////        {
////            "id": "session-3",
////            "firstName": "Manuel",
////            "lastName": "Bode",
////            "age": "89"
////        }
////];

////    obj = JSON.parse(text);
////    for (let i = 0; i < text.length; i++) {
////        const li = CreatLI(text[i]);
////        list.appendChild(li);
////    }
/////*    return obj.employees[0].firstName + " " + obj.employees[0].lastName + " " + obj.employees[1].firstName + " " + obj.employees[1].lastName ;*/
////}



//////function myFunction2() {

//////    var answer2 = "He is called 'Johnny'";
//////    var answer3 = 'He is called "Johnny"';
//////    let answer1 = "It's alright";

//////    if (new Date().getHours() < 22) {
//////        return answer1 + "<br>" + answer2;
//////    }
//////    else
//////        return answer1 + "<br>" + answer2 + "<br>" + answer3;

//////}


    
