//Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
;
const user1 = {
    name: "test1",
    role: Role.USER,
};
console.log(user1);
//Enum string
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
    Language["chinese"] = "cn";
    Language["japanese"] = "jp";
})(Language || (Language = {}));
;
const user2 = {
    name: "test2",
    language: Language.chinese,
};
console.log(user2);
export {};
