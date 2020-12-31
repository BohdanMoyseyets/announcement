import React from 'react';
import { connect } from "react-redux"
import { addItemChangeDescCreator, addItemChangeTitleCreator, addItemCreator, deleteItemCreator, editItemCreator, editItemDescCreator, editItemTitleCreator, searchItemCreator, showDetailsItemCreator, showSimilarItemCreator } from '../redux/reducers/announcement-reducer';
import Items from "./Items"


const mapStateToProps = (state) => {
    return{
        itemsData: state.announcement.announcementData,
        newTitleText: state.announcement.newTitleText,
        newDescText: state.announcement.newDescText,
        editTitleText: state.announcement.editTitleText,
        editDescText: state.announcement.editDescText,
        searchItemTitle: state.announcement.searchItemTitle
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addItem: (date) =>{ dispatch(addItemCreator(date))},
        addItemChangeTitle: (text) =>{dispatch(addItemChangeTitleCreator(text))},
        addItemChangeDesc: (text) =>{dispatch(addItemChangeDescCreator(text))},
        deleteItem: (id) =>{dispatch(deleteItemCreator(id))},
        showDetailsItem: (index) =>{dispatch(showDetailsItemCreator(index))},
        editItemChangeTitle: (text) =>{dispatch(editItemTitleCreator(text))},
        editItemChangeDesc:(text) =>{dispatch(editItemDescCreator(text))},
        editItem:(index, editTitle, editDesc) =>{dispatch(editItemCreator(index, editTitle, editDesc))},
        searchItem:(text) =>{dispatch(searchItemCreator(text))},
        showSimilarItem: (index) =>{dispatch(showSimilarItemCreator(index))}
    }
}

const ItemsContainer = connect(mapStateToProps, mapDispatchToProps)(Items);

export default ItemsContainer;