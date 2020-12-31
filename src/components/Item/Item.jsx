import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import style from './Item.module.css'
import ItemDetails from './ItemDetails/ItemDetails';
import ItemEdit from './ItemEdit';
import ItemSimilar from './ItemSimilar/ItemSimilar';

const Item = (props) => {

    let onDeleteItem = () => {
        props.deleteItem(props.index);
    }
    let onShowDetails = () => {
        props.showDetailsItem(props.index)
    }
    let details = props.data.showDetails ? <ItemDetails text={props.data.text} date={props.data.date} /> : null;

    let i = 0;

    let similarElements = props.itemsData.map(
        (item) => {
            let arr1 = props.data.title.split(" ");
            let arr2 = props.data.text.split(" ");
            let arr3 = arr1.concat(arr2);
            let arr1i = item.title.split(" ");
            let arr2i = item.text.split(" ");
            let arr3i = arr1i.concat(arr2i);
            let intersection = arr3.filter(x => arr3i.includes(x));
            if (intersection.length > 0 && item.id !== props.data.id && i < 3) {
                i++;
                return <ItemSimilar key={item.id} data={item} />;
            }
            return null;
        });

    let onShowSimilar = () => {
        props.showSimilarItem(props.index)
    }

    return (
        <div className={style.item}>
            <h2>{props.data.title}</h2>
            {details}
            <button onClick={onShowDetails}>{props.data.showDetails ? "Hide Details" : "Show Details"}</button>
            <NavLink to={"/edit" + props.data.id}><button className={style.edit}>Edit</button></NavLink>
            <Route path={"/edit" + props.data.id} render={() => <ItemEdit data={props.data} index={props.index} editItem={props.editItem} editItemChangeDesc={props.editItemChangeDesc} editItemChangeTitle={props.editItemChangeTitle} editTitleText={props.editTitleText} editDescText={props.editDescText} />} />
            <button onClick={onDeleteItem} className={style.delete}>Delete</button>
            <button onClick={onShowSimilar}>{props.data.showSimilar ? "Hide Similar" : "Show similar"}</button>
            <div className={style.similar_item_content}>{props.data.showSimilar ? similarElements : null}</div>

        </div>
    );
}
export default Item;