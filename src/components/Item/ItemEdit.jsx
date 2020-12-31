import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './ItemEdit.module.css';

const ItemEdit = (props) => {
    let editItemTitle = React.createRef();
    let editItemDesc = React.createRef();

    let onChangeEditTitle = () =>{
        let text = editItemTitle.current.value;
        props.editItemChangeTitle(text);
    }

    let onChangeEditDesc = () =>{
        let text = editItemDesc.current.value;
        props.editItemChangeDesc(text);
    }

    let onClickEditItem = () =>{
        props.editItem(props.index, editItemTitle.current.value, editItemDesc.current.value)
    }
    return (
        <div className={style.item}>
            <h3>Edit Announcement</h3>
            <div>
                <label>Title</label>
                <input onChange={onChangeEditTitle} className={style.title} ref={editItemTitle} defaultValue={props.data.title} />
            </div>
            <div>
                <span>Description</span>
                <textarea onChange={onChangeEditDesc} className={style.description} ref={editItemDesc} defaultValue={props.data.text}></textarea>
            </div>
            <button onClick={onClickEditItem} disabled={props.editTitleText === "" || props.editDescText === ""}><NavLink to="">Ok</NavLink></button>
            <button><NavLink to=""> Cancel</NavLink></button>
        </div>
    );
}
export default ItemEdit;