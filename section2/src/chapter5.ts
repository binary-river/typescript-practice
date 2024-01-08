
//Enum
enum Role {
    ADMIN,
    USER,
    GUEST,
};

const user1 = {
    name:"test1",
    role: Role.USER,
};

console.log(user1);


//Enum string
enum Language {
    korean = "ko",
    english = "en",
    chinese = "cn",
    japanese = "jp",
};

const user2 = {
    name:"test2",
    language:Language.chinese,
};

console.log(user2);