function perfectFriend(name) {
    if (typeof (name) == 'number') {
        return 'Error!Give me a string Array';
    }
    else if (typeof (name) == 'boolean') {
        return 'Error!Give me a string Array';
    }
    else {
        for (let i = 0; i < name.length; i++) {
            if (name[i].length == 5) {
                return name[i];
            }
        }
    }
}
var friendsName = perfectFriend(['raha', 'taha', 'rohi', 'hasan', 'rohim']);
console.log(friendsName);
