

function findDescendants(searchPerson, people) {

    return people
        .map(person => {
            if (person.parents[0] === searchPerson.id || person.parents[1] === searchPerson.id) {
                return [].concat(findDescendants(person, people), person);
            }
        })
        .filter(person => person !== undefined)
        .flat();
}

module.exports = findDescendants;