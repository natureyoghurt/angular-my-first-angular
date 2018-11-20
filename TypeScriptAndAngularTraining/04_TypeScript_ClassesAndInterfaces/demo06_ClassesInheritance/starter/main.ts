/*
class Animal
{
    constructor(public name:string){}
}
class Frog extends Animal
{
    // TODO: Create a constructor that takes the name and the distance
    //       and that calles the base-constructor with the name
    jump()
    {
        console.log(`the frog ${this.name} is jumping ${this.distance}m`);
    }
}
*/

// TODO: Create a constructor that takes the name and the distance
//       and that calles the base-constructor with the name

class Animal
{
    constructor(public name:string){}
}
class Frog extends Animal
{
    constructor(name:string, public distance:number){
        super(name);
    }

    jump()
    {
        console.log(`the frog ${this.name} is jumping ${this.distance}m`);
    }
}

let frog = new Frog("Kermit",1);
frog.jump();