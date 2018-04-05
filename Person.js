class Person {

    constructor(birthYear) {
        this.age = this.calculateAge(new Date('01/01' + birthYear));
        this.birthYear = birthYear;
    }

    isMillenial() {
        return this.birthYear > 1982;
    }

    isRetiree() {
        return this.age >= 65;
    }

    calculateAge(birthdate) {
        let ageDiffMs = Date.now() - birthdate.getTime()
        let ageDate = new Date(ageDiffMs);
        let age = ageDate.getUTCFullYear() - 1970;
        return Math.abs(age);
    }
}

module.exports = Person;
