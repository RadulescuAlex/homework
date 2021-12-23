// const users = [
//     { id: 11, name: 'Adam', age: 23, group: 'editor' },
//     { id: 47, name: 'John', age: 28, group: 'admin' },
//     { id: 85, name: 'William', age: 34, group: 'editor' },
//     { id: 97, name: 'Oliver', age: 28, group: 'admin' },
//     { id: 105, name: 'Lorand', age: 28, group: 'admin' }
//   ];


// convert array to json - teoretic cica si arrayu ii un obiect + dat cheie name la fiecare 
//   const convertArrayToObject = (users, key) => {
//     const initalValue = {};
//     return users.reduce((obj, item) =>{
//       return {
//         ...obj,
//         [item[key]]: item,
//       };
//     }, initalValue)
//   }

//   console.log(
//     convertArrayToObject(users, 'name')
//   )

 

  // sortare dupa nume
  // sortare descrescator dupa varsta
  // sortare dupa nume si descrescator  dupa varsta
  // returnare array cu toti userii cu seunt editori
  // filtrare toti care sunt editori si au peste 25 de ani


//   users.sort(function(a, b){
//       var nameA = a.name
//       var nameB = b.name
//     if (nameA < nameB) //sort string ascending
//      return -1;
//     if (nameA > nameB)
//      return 1;
//     return 0; //default return value (no sorting)
//    });

//    console.log('users :', users )

// users.sort(
//     function(a, b) {
//        return b.age - a.age
//     }
// );
// console.log(users)

// users.sort(function(a,b) {
//     if(a.age < b.age) {
//         return 1;
//     } 
//     if(a.age > b.age) {
//         return -1;
//     }
//     if(a.age === b.age){
//         if(a.name < b.name) {
//             return -1;
//         } 
//         if(a.name > b.name) {
//             return 1;
//     }
//     return 0; 
// }})
// console.log('users: ', users)

// const result = users.filter(u => u.group === "editor" && u.age > 25 );
// console.log(result)


// scoate id si group din array si schimba age => varsta si name => nume folosind map

// const users2 = users.map(u => {
//     return {
//     nume : u.name, 
//     varsta : u.age

// }
// })
// console.log(users2)

// const users3 = users.map(u => {
//     return {
//         firstName : u.name.length < 2 ? u.name : u.name.substring(0,2),
//         lastName : u.name.length < 2 ? u.name : u.name.substring(u.name.length -2)
//         }
// });
// console.log(users3);

const inventors = [{
  first: "Albert",
  last: "Einstein",
  year: 1879,
  passed: 1955
}, {
  first: "Isaac",
  last: "Newton",
  year: 1643,
  passed: 1727
}, {
  first: "Galileo",
  last: "Galilei",
  year: 1564,
  passed: 1642
}, {
  first: "Marie",
  last: "Curie",
  year: 1867,
  passed: 1934
}, {
  first: "Johannes",
  last: "Kepler",
  year: 1571,
  passed: 1630
}, {
  first: "Nicolaus",
  last: "Copernicus",
  year: 1473,
  passed: 1543
}, {
  first: "Max",
  last: "Planck",
  year: 1858,
  passed: 1947
}, {
  first: "Katherine",
  last: "Blodgett",
  year: 1898,
  passed: 1979
}, {
  first: "Ada",
  last: "Lovelace",
  year: 1815,
  passed: 1852
}, {
  first: "Sarah E.",
  last: "Goode",
  year: 1855,
  passed: 1905
}, {
  first: "Lise",
  last: "Meitner",
  year: 1878,
  passed: 1968
}, {
  first: "Hanna",
  last: "Hammarström",
  year: 1829,
  passed: 1909
}];

// filter - cine s-o nascut in anii 1500 
// function getInvetors1500(inventors) {
//   var get = inventors 
//   console.log (get.filter((item) => {
//     return item.year < 1600 && item.year > 1500
//   }))
// }

// getInvetors1500(inventors);

// return first si last din array
// const results = inventors.map(i => {
//   return { 
//     first : i.first,
//     last : i.last 
//   }
// })
// console.log(results)

// gaseste-l pe galileo

// const found = inventors.find(i => i.first === "Galileo")

// console.log(found)


// primu element ia val 1 din array pentru ca nu este initial value, al doilea (curent value) iti ia al doilea element 
// function sumaAnilor() {
//   return inventors.reduce((suma, i) => 
//   suma + (i.passed - i.year)
//   ,0);
// }

// //  console.info(sumaAnilor())
// // retrun 0 ii indicat ca sa stopeze functia daca o folosesti mai des
// function compare (a, b) {
//   // if (a.year < b.year) {
//   //   return -1;
//   // }
//   if (a.year > b.year) {
//     return 1;
//   }
//   return 0;
// }

// inventors.sort(compare);
// console.info(inventors);