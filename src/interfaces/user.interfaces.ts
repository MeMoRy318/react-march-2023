interface IAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
        lat: string
        lng: string
    }
}

interface ICompany {
    name: string
    catchPhrase: string
    bs: string
}

export interface IUser {
    id: number
    name: string
    username: string
    email: string
    address: IAddress
    phone: string
    website: string
    company: ICompany
}

export type IUserForm = Pick<IUser, 'name' | 'username' | 'email'>;
