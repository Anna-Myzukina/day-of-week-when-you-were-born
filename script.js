/**
 * var myFriend = {
    "name": "Alex",
    "legs": 2,
    "friends": 50,
    "the drinc": "water"
};
myFriend.name = "Denis";
myFriend["game"] = "football";
delete myFriend.game;
var nameOffriend = myFriend.game;
console.log(nameOffriend);



 var myStorage = {
     "car":{
         "inside":{
             "glove box" : "maps",
             "passenger seat" : "crumbs"
         },
         "outside": {
             "trunk": "Jack"
         }
     }
 };
 var glovBoxContent = myStorage.car.inside["glove box"];
 alert(glovBoxContent);
 */

 //for (key in obj){....}
 /*var menu = {
     width: 400,
     height: 200,
     title: "Menu",
     year: 2017,
     number: 158
 };
 var counter =0;
 for(var key in menu){
     counter ++;
 }
    console.log("Всего: " + counter)
 

var codes = {
    "5": "Poland",
    "12": "USA",
    "73": "Ukraine"
}

var user = {
    name: "Roma",
    surname: "Petrov",
};
user.age = 25;
for(var key in user){
    alert(key);
}

var codes = {
    "+12": "Poland",
    "+7": "USA",
    "+73": "Ukraine"
}

for (var code in codes){
    alert(code);
}
*/
var now = new Date(1986, 12, 26 );
alert(now.getDay())
