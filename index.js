// Code your solution here

function findMatching(arr, name){

    let filter =arr.filter(i => {
        if (i.toUpperCase() == name.toUpperCase()) {
            return true
            
        }
    })
    return filter


}

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//console.log(findMatching(drivers, "Susan"))


function fuzzyMatch(arr, query) {
    const drivers = [];
    drivers.length = 0;
    drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');

    let filter = drivers.filter(drivers => drivers.startsWith(query))
    
    return filter
    
}

function matchName(arr, name){
    
    let filter = arr.filter(i => {
        if(i.name == name){
            return i.hometown
        }
    })
    return filter

}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
console.log(matchName(drivers, "Bobby"))