// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')


// Setup

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}


// KATA: 0 - .filter()

const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})

console.log(greenEyes2)



// KATA 1: .filter()

const activity = users.filter(function (user) {
    return user.isActive === true
})


console.log(activity)

printKata(1, activity)


// KATA 2: .map()
  const emails = users.map(user => user.email);
  console.log(emails)

  printKata(2, emails)


// KATA 3: .some()

const companyName = users.some(function(user) {
    return user.company === "OVATION"
})

console.log(companyName)

printKata(3, companyName)

// KATA 4: .find()

const found = users.find(function (user) { 
    return user.age > 38; 
}); 

console.log(found)

printKata(4, found)

// KATA 5: .filter() and .find()

const activity2 = users
    .filter((user) => {
        return user.isActive;
    })
    .find((user) => {
        return user.age > 38;
    })
console.log(activity2)

printKata(5, activity2)


// KATA 6: .filter() and .map()

const balance1 = users
    .filter((user) => {
        return user.company === "ZENCO";
    })
    .map((user) => {
       return user.balance;
    })

    console.log(balance1)

    printKata(6, balance1)


// KATA 7: .filter() method with .includes() and the .map()

const age1 = users
    .filter((users) => {
        return users.tags.includes("fugiat");
    })
    .map((users) => {
        return users.age
    })

console.log(age1)

printKata(7, age1)