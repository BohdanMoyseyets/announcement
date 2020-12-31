import React from 'react';
import style from './ItemSimilar.module.css'

const ItemSimilar = (props) =>{    
    return(
        <div className={style.item}>
            <div>
                <h2>{props.data.title}</h2>
                <div className={style.description}>{props.data.text}</div>
            </div>
          
        </div>
    );
}
export default ItemSimilar;