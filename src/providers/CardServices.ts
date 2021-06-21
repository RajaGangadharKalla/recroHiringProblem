import ICardService from "../contracts/ICardService";
import { ICard } from "../models/ICard";

export default class CardService implements ICardService {

    public getAllItems(startItem: number, limit: number): Promise<ICard[]> {
        let url = `http://jsonplaceholder.typicode.com/posts?_start=${startItem}&_limit=${limit}`;
        return fetch(url).then((response) => {
            return response.json().then((data: any) => {
                let items: ICard[] = [];
                data.map((_item: any) => {
                    items.push({
                        id: _item.id,
                        title: _item.title,
                        description: _item.body
                    });
                });
                return items;
            }).catch((error: Error) => {
                return [];
            });
        });
    }
}