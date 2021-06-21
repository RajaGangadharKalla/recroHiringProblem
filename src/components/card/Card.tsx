import React, { CSSProperties } from 'react';
import { ICard } from '../../models/ICard';
export interface ICardProps {
    cardItem: ICard;
}

export interface componentStyles {
    card: CSSProperties;
    title: CSSProperties;
    description: CSSProperties;
}

const styles: componentStyles = {
    card: {
        border: '1px solid #ccc',
        padding: '20px',
        margin: '15px',
        borderRadius: '10px',
        boxShadow: '0 0 11px rgb(33 33 33 / 20%)',
        cursor: 'pointer'
    },
    title: {
        fontSize: '20px'
    },
    description: {
        paddingTop: '8px',
        paddingLeft: '5px'
    }
}

export default function CardItem({ ...props }: ICardProps) {
    return (
        <div className="card" id={props.cardItem.id} style={styles.card}>
            <div className="title" style={styles.title}>
                {props.cardItem.title}
            </div>
            <div className="description" style={styles.description}>
                {props.cardItem.description}
            </div>
        </div>
    );
}