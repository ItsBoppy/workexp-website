let myObj = {
    name: "Choclate Cake",
    price: 30

};

let myObj_serialized = JSON.stringify(myObj);

localStorage.setItem("myObj", myObj_serialized)

let myObj_normal = JSON.parse(localStorage.getItem("myObj"))
console.log(myObj_normal)