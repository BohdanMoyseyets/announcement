import React from 'react';
import style from './ItemDetails.module.css'

const ItemDetails = (props) => {

    return (
        <div className={style.item}>
            <div className={style.description}>{props.text}</div>
            <div className={style.date}>{props.date}</div>
        </div>
    );
}
export default ItemDetails;