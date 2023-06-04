export interface IProduct {
    _id?: string,
    data?: IData,
    name?: string,
    price?: number,
    image?:string,
    description?:string
}
export interface IData{
    name?: string,
    price?: number,
    description?:string
}