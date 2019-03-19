export interface IPizza {
    name: string;
    description: string;
    alergens: number[];
    price: number;
    ingredients: string[];
}

export interface IUser {
    isAdmin: Boolean;
    password: string;
    username: string;
    userId: string;
}
