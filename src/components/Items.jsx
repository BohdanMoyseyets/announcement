import moment from 'moment';
import React from 'react';
import Item from './Item/Item';
import style from './Items.module.css'

const Items = (props) => {
    var itemsElements = props.itemsData.map((item, index) => <Item key={item.id} showSimilarItem={props.showSimilarItem} showDetailsItem={props.showDetailsItem} deleteItem={props.deleteItem} editItem={props.editItem} editItemChangeTitle={props.editItemChangeTitle} editItemChangeDesc={props.editItemChangeDesc} editTitleText={props.editTitleText} editDescText={props.editDescText} itemsData={props.itemsData} data={item} index={index} />);
    let newItemTitle = React.createRef();
    let newItemDesc = React.createRef();
    let searchItemTitle = React.createRef();
    var itemsElements2 = props.itemsData.map((item, index) => { if (item.title.includes(props.searchItemTitle)) { return (<Item key={item.id} showSimilarItem={props.showSimilarItem} showDetailsItem={props.showDetailsItem} deleteItem={props.deleteItem} editItem={props.editItem} editItemChangeTitle={props.editItemChangeTitle} editItemChangeDesc={props.editItemChangeDesc} editTitleText={props.editTitleText} editDescText={props.editDescText} itemsData={props.itemsData} data={item} index={index} />) } else return null });

    let onAddItem = () => {
        let time = moment().format('lll');
        props.addItem(time);
    }
    let onChangeTitle = () => {
        let text = newItemTitle.current.value;
        props.addItemChangeTitle(text);
    }

    let onChangeDesc = () => {
        let text = newItemDesc.current.value;
        props.addItemChangeDesc(text);
    }
    let onChangeSearch = () => {
        let text = searchItemTitle.current.value;
        props.searchItem(text);
    }

    return (
        <div className={style.items}>
            <div className={style.add_item}>
                <div className={style.add_item_title}>
                    <label>Title</label>
                    <input onChange={onChangeTitle} type="text" ref={newItemTitle} value={props.newTitleText} placeholder={"Input title"} />
                </div>
                <div className={style.add_item_desc}>
                    <label>Description</label>
                    <textarea onChange={onChangeDesc} ref={newItemDesc} value={props.newDescText} placeholder={"Input description"}></textarea>
                </div>
                <button className={style.add_item_button} onClick={onAddItem} disabled={props.newDescText === "" ||  props.newTitleText === ""}>add new announcement</button>
            </div>
            <h1>Announcements</h1>
            <div>
                <label>Search Announcement</label>
                <input onChange={onChangeSearch} ref={searchItemTitle} value={props.searchItemTitle} />
            </div>
            <div className={style.content}>{props.searchItemTitle === "" ? itemsElements : itemsElements2}</div>
        </div>
    );
}
export default Items;