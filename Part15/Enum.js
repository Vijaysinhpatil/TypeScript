var Role;
(function (Role) {
    Role["User"] = "USER";
    Role["Admin"] = "ADMIN";
})(Role || (Role = {}));
var person1 = {
    name: "Vijaysinh",
    role: Role.User
};
var person2 = {
    name: "Kapil",
    role: Role.Admin
};
if (person2.role === Role.Admin) {
    console.log("".concat(person2.name, " Has admin access."));
}
else {
    console.log("".concat(person1.name, " Has an User"));
}
