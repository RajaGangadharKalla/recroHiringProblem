import { ICard } from "../models/ICard";

export default interface ICardService{
    getAllItems:(startItem: number, limit: number)=>Promise<ICard[]>;
}