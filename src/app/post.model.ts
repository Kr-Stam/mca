export interface IPost{
    id: number,
    userId: number,
    title: string,
    body: string
}

export interface IPhoto{
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface IComment{
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}