export interface Login {
    username: string,
    password: string
}

export interface User {
    name: string,
    age?: number,
    id: string,
    position?: string,
    project?: string,
    email?: string
    loginInformation: Login
}


