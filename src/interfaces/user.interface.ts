interface IGeoLocation {
    lat: string
    lng: string
}

interface IAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: IGeoLocation
}

interface ICompany {
    name: string
    catchPhrase: string
    bs: string
}

interface IUser {
    id: number
    name: string
    username: string
    email: string
    address: IAddress
    phone: string
    website: string
    company: ICompany
}

export type { IUser };
