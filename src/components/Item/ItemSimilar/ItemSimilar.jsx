import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import style from './ItemSimilar.module.css'

const ItemSimilar = (props) =>{    
    return(
        <div className={style.item}>
            <div>
                <h2>{props.data.title}</h2>
                <div>{props.data.text}</div>
            </div>
          
        </div>
    );
}
export default ItemSimilar;