import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import style from './Item.module.css'
import ItemDetails from './ItemDetails/ItemDetails';
import ItemEdit from './ItemEdit';
import ItemSimilar from './ItemSimilar/ItemSimilar';

const Item = (props) =>{
    
    let onDeleteItem = () =>{
        props.deleteItem(props.index);
    }
    let onShowDetails = () =>{
        props.showDetailsItem(props.index)
    }
    let details = props.data.showDetails ? <ItemDetails text={props.data.text} date={props.data.date}/>: null;

    let similarElements = props.itemsData.map((item) => item.title == props.data.title || item.text == props.data.text ? <ItemSimilar data={item}/> : null );

    let onShowSimilar = () =>{
        props.showSimilarItem(props.index)
    }
    //let similar = props.data.showSimilar ? <ItemSimilar similarItems={similarElements}/>: null;
    console.log(similarElements);
    
    return(
        <div className={style.item}>
            <div>
                <h2>{props.data.title}</h2>
                {details}
                <button onClick={onShowDetails}>{props.data.showDetails ? "Hide Details":"Show Details"}</button>
            </div>
            <NavLink to={"/edit" + props.data.id}><button className={style.edit}>Edit</button></NavLink>
            <Route path={"/edit" + props.data.id} render={()=><ItemEdit data={props.data} index={props.index} editItem={props.editItem} editItemChangeDesc={props.editItemChangeDesc} editItemChangeTitle={props.editItemChangeTitle} editTitleText={props.editTitleText} editDescText={props.editDescText}/>}/>
            <button onClick={onDeleteItem} className={style.delete}>Delete</button>
            <button onClick={onShowSimilar}>{props.data.showSimilar ? "Hide Similar":"Show similar"}</button>
            {props.data.showSimilar ? similarElements : null}
          
        </div>
    );
}
export default Item;