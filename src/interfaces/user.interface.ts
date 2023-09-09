interface IUser {
    username:string
    password:string
}

interface IUserResponse {
    id: number
    title: string
    readOnly: boolean
    username: string
    pattern: string
    maxLength: number
    minLength: number
    is_active: boolean
    is_staff: boolean
    is_superuser: boolean
    last_login?: string | null
    created: string
    updated: string
}
interface IUserWithRegister {
    id: number
    username: string
    is_active: boolean
    is_staff: boolean
    is_superuser: boolean
    last_login: string | null
    created: string
    updated: string
}
export type { IUser, IUserResponse, IUserWithRegister };
