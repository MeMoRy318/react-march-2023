export interface IPostUrls {
    post: ( id: number | string ) => string
    postsByUsersId:( id: number | string ) => string
    posts: string
}
export interface IPost  {
    userId: number
    id: number
    title: string
    body: string
}
