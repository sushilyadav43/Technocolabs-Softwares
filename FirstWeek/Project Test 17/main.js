// class School {
//     constructor(name, level, numberOfStudents) {
//         this._name = name;
//         this._level = level;
//         this._numberOfStudentsl;
//     }

//     get name() {
//         return this._name;
//     }

//     get level() {
//         return this._level;
//     }

//     get numberOfSchool() {
//         return this._numberOfStudents;
//     }

//     quickFast() {
//         console.log(`${this.name} educates ${this.numberOfStudents} students at the level ${this.level} school level.`)
//     }

//     static pickSubstituteTeacher(substituteTeachers) {
//         const randomNumber = math.floor(math.random()*substituteTeachers.length);
//         return substituteTeachers[randomNumber];
//         }

//     set numberOfStudents(num) {
//         if (typeof num===number){
//         this._numberOfStudents = num;
//         }else {
//             console.log('Invalid input: numberOfStudents must be set to a Number.');
//         }
//     }

//     static pickSubstituteTeacher(substituteTeachers) {
//         const randomNumber = math.floor(math.random()*substituteTeachers.length);
//         return substituteTeachers[randomNumber];
//         }    
// }
// class PrimarySchool extends School {
//     constructor(name, numberOfStudents, pickupPolicy) {
//       super(name, 'primary', numberOfStudents);
//       this._pickupPolicy = pickupPolicy;
//     }
//     get pickupPolicy() {
//       return this._pickupPolicy;
//     }
//   }

//   class HighSchool extends School {
//     constructor(name, numberOfStudents, sportsTeams) {
//         super(name, 'high', numberOfStudents);
//          this._sportsTeams = sportsTeams;
//     }
//     get sportsTeams() {
//       return this._sportsTeams;
//     }
//   }

//   const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

//   lorraineHansbury.quickFacts();

//   const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

//   alSmith.quickFacts();

//   console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));


class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(numberInput) {
        if (typeof numberInput === 'number') {
            this._numberOfStudents = numberInput;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }
    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
        let randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomTeacher];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.quickFacts();

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));