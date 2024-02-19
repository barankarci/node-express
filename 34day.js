// const users = {
//     "id-1": {
//         name: "baran",
//         usrname: "karcı",
//         age: 19
//     },
//     "id-2": {
//         name: "mustafa",
//         usrname: "tokmak",
//         age: 34
//     }
// };

// for(let u in users) {
//     console.log(users[u].age)
// }


const userArray = [
    {
        id: 1,
        name: "baran",
        age: 19,
    }, {
        id: 2,
        name: "musti",
        age: 33
    }, {
        id: 3,
        name: "ümit",
        age: 28
    }
];
userArray.forEach((value, key) => {
    console.log(`Kulanıcı: ${value.name}: ${key}`)
})
