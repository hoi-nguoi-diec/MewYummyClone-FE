export interface IProduct {
    _id?: string,
    data?: IData,
    name?: string,
    price?: number,
    image?:string,
    description?:string
    categoryId?:string

}
export interface IData{
    _id?: string,
    name?: string,
    price?: number,
    description?:string
    image?:string,
}