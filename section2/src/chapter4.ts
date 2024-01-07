//type alias
type User = {
    id: number;
    name:string;
    nickname:string;   
};

let user1:User = {
    id: 1,
    name: "hello",
    nickname: "world",
};


//index signature
type CountryCodes = {
    [Key:string] : string,
    KOREA:string,
};

let countryCodes: CountryCodes = {
    AMERICA:"us",
    UNITED_KINGDOM:"uk",
    KOREA:"kr",
}