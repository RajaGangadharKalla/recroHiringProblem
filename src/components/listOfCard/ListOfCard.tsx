import React from 'react';
import ICardService from '../../contracts/ICardService';
import { ICard } from '../../models/ICard';
import CardService from '../../providers/CardServices';
import CardItem from '../card/Card';
import LoadingComponent from '../loading/LoadingComponent';

export interface IListOfCardState {
    cards: ICard[];
    startItem: number;
    showLoading: boolean;
}

const numberOfItemsPerPage: number = 10;

export default class ListOfCard extends React.Component<{}, IListOfCardState>{
    private cardService: ICardService;
    constructor(props: {}) {
        super(props);
        this.state = {
            cards: [],
            startItem: 0,
            showLoading: true
        };
        this.loadMoreItems = this.loadMoreItems.bind(this);
        this.getItems = this.getItems.bind(this);
        this.cardService = new CardService();
    }

    public componentDidMount() {
        window.addEventListener('scroll', this.loadMoreItems);
        this.getItems();
    }

    private getItems() {
        let { startItem, cards } = { ...this.state };
        this.cardService.getAllItems(startItem, numberOfItemsPerPage).then((data: ICard[]) => {
            this.setState({
                cards: [...cards, ...data],
                showLoading: false
            });
        }).catch(() => {
            this.setState({
                showLoading: false
            });
            alert("Error Occured.");
        });
    }

    private loadMoreItems() {
        let { startItem } = { ...this.state };
        let scrollingHeight: number = document.scrollingElement ? document.scrollingElement.scrollHeight : 0;
        if (window.innerHeight + document.documentElement.scrollTop >= scrollingHeight) {
            this.setState({
                startItem: startItem + numberOfItemsPerPage,
                showLoading: true
            }, () => {
                this.getItems();
            });
        }
    }

    public render() {
        let { cards, showLoading } = { ...this.state };
        return (
            <>
                {
                    showLoading && <LoadingComponent />
                }
                {
                    cards.length > 0 ?
                        <div className="list-wrapper">
                            {

                            }
                            {
                                cards.map((_card: ICard) => {
                                    return <CardItem cardItem={_card} />;
                                })
                            }
                        </div>
                        : <div></div>
                }
            </>
        );
    }
}