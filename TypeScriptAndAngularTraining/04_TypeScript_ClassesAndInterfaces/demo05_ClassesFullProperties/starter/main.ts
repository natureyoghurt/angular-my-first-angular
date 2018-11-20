/*
class Friend {

    firstName: string
    
    constructor(firstName: string) {
        this.firstName = firstName;
    }
}
*/

// TODO: Add Accessors for the firstName property, 
//       so that it logs to the console whenever it is set or get
class Friend {

    private _firstName: string;

    get firstName(): string {
        console.log(`getter firstName (value = ${this._firstName}) called!`);
        return this._firstName;
    }

    set firstName(value:string){
        console.log(`setter firstName (value set from \"${this._firstName}\" to \"${value}\") called!`);
        this._firstName = value;
    }

    constructor(firstName: string) {
        this.firstName = firstName;
    }
}


let friend = new Friend("Thomas");

// When you're done, each of these lines should log to the console
friend.firstName = "Angular";
friend.firstName = "Julia";
let firstName = friend.firstName;

