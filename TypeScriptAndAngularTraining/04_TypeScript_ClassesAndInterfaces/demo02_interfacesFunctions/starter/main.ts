interface Friend {
    firstName: string;
    lastName?: string;
}

interface FriendPrinter{
    (f:Friend):void
}

//function printFriend(printer:(f:Friend) => void, friend: Friend) {
//    printer(friend);
//}

function printFriend(printer:FriendPrinter, friend:Friend){
    printer(friend);
}

printFriend((f: Friend) => { console.log(f.firstName) },
    { firstName: "Thomas" });

// this second method works, but the intention was that the passed function has a friend-parameter,
// not a number parameter
printFriend((val: Friend) => { console.log("Another one"); },
    { firstName: "Bill" });

