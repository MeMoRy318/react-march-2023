interface IResponseUser {
    id: number
    username: string
    is_active: boolean
    is_staff: boolean
    is_superuser: boolean
    last_login: string
    created: string
    updated: string
}

interface ILoginOrRegisterUser{
    username: string
    password:string
}

export type { ILoginOrRegisterUser, IResponseUser };
