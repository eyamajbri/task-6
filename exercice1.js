const persons=[ { name: "MONCEF", age : 13}, {name : "BAHJA", age: 23} , { name :"ALA", age: 18}] ;
function MineurMajeur(list) {
  let ages=list.map(function(e) {
    if (e.age >=18) {
      e.status ="majeur"
      return e
    }
    else {
      e.status ="mineur"
      return e
    }
  })
 return ages
}
console.log(MineurMajeur(persons) )