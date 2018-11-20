// TODO: Create a class that takes
//       firstname, lastName as constructor-parameter
//       and that has a getFullName-method

/*
interface Friend {
    firstName: string;
    lastName?: string;
}

function getFullName(friend: Friend) {
    var fullName = friend.firstName;
    if (friend.lastName) {
        fullName += " " + friend.lastName;
    }
    return fullName;/*
}

var fullName = getFullName({ firstName: "Thomas", lastName: "Huber" });
console.log(fullName);
*/

class Friend{
    firstName: string;
    lastName?: string;

    constructor(firstName:string, lastName?:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }
}

let friend = new Friend("Thomas", "Huber");
console.log(friend.getFullName());
