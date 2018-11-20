interface IFriend {
    firstName:string;
    lastName:string,
}

class Friend implements IFriend{
    firstName:string;
    lastName:string;

    constructor(firstname:string, lastname:string){
        this.firstName = firstname;
        this.lastName = lastname;
    }

    GetFullName(friend:IFriend):string{
        return friend.firstName + ' ' + friend.lastName;
    }
}

function sortFriendsByName(friends:IFriend[]) {
    var result = friends.slice(0);
  
    result.sort(function(x, y) {
      return x.firstName.localeCompare(y.firstName);
    });
  
    return result;
}

sortFriendsByName([{firstName:'Thomas', lastName:'Huber'}]);
sortFriendsByName([{firstName:'Thomas', lastName:'Huber'}]);