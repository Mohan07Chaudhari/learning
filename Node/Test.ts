type User = {
    name: string;
    age: number;
};

let mohan: User = {
    name: "Mohan Nivrutti Chaudhari",
    age: 12
};

function isMinor(user: User): boolean {
    debugger;
    return user.age < 18;
}

console.log(isMinor(mohan));
