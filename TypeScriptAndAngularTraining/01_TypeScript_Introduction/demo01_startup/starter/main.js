"use strict";
var Friend = /** @class */ (function () {
    function Friend(firstname, lastname) {
        this.firstName = firstname;
        this.lastName = lastname;
    }
    Friend.prototype.GetFullName = function (friend) {
        return friend.firstName + ' ' + friend.lastName;
    };
    return Friend;
}());
function sortFriendsByName(friends) {
    var result = friends.slice(0);
    result.sort(function (x, y) {
        return x.firstName.localeCompare(y.firstName);
    });
    return result;
}
sortFriendsByName([{ firstName: 'Thomas', lastName: 'Huber' }]);
sortFriendsByName([{ firstName: 'Thomas', lastName: 'Huber' }]);
