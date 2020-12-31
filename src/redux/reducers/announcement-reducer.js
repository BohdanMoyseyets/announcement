const ADD_ITEM = 'ADD_ITEM';
const ADD_ITEM_CHANGE_TITLE = 'ADD_ITEM_CHANGE_TITLE';
const ADD_ITEM_CHANGE_DESC = 'ADD_ITEM_CHANGE_DESC';
const EDIT_ITEM = 'EDIT_ITEM';
const EDIT_ITEM_DESC = "EDIT_ITEM_DESC";
const EDIT_ITEM_TITLE = "EDIT_ITEM_TITLE";
const DELETE_ITEM = 'DELETE_ITEM';
const SHOW_DETAILS = 'SHOW_DETAILS';
const SEARCH_ITEM='SEARCH_ITEM';
const SHOW_SIMILAR='SHOW_SIMILAR';

let initial_state = {
    announcementData: [
        {
            id: 1, text: "First announcement ", title: "First", date: "Dec 27, 2020 11:43 PM", showDetails: false, showSimilar: false
        },
        {
            id: 2, text: "Second announcement ", title: "Second", date: "Dec 27, 2020 11:43 PM", showDetails: false, showSimilar: false
        },
        {
            id: 3, text: "Third announcement ", title: "Third", date: "Dec 27, 2020 11:43 PM", showDetails: false, showSimilar: false
        },
        {
            id: 4, text: "Fourth announcement ", title: "Fourth", date: "Dec 27, 2020 11:43 PM", showDetails: false, showSimilar: false
        }
    ],
    editTitleText: "",
    editDescText: "",
    newTitleText: "",
    newDescText: "",
    searchItemTitle:""

}

const announcementReducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            let new_id = state.announcementData.length > 0 ? state.announcementData[state.announcementData.length - 1].id + 1 : 1;
            let newItemData = {
                id: new_id,
                text: state.newDescText,
                title: state.newTitleText,
                date: action.addDate,
                showDetails: false,
                showSimilar: false
            };
            return {
                ...state,
                announcementData: [...state.announcementData, newItemData],
                newTitleText: "",
                newDescText: ""
            };
        }
        case ADD_ITEM_CHANGE_TITLE: {
            return {
                ...state,
                newTitleText: action.newTitleText
            };
        }
        case ADD_ITEM_CHANGE_DESC: {
            return {
                ...state,
                newDescText: action.newDescText
            };
        }
        case DELETE_ITEM: {
            let a = [...state.announcementData.splice(action.itemID, 1)];
            return {
                ...state,
                announcementData: [...state.announcementData]
            };
        }
        case SHOW_DETAILS: {
            state.announcementData[action.itemIndex].showDetails = !state.announcementData[action.itemIndex].showDetails;
            return {
                ...state,
                announcementData: [...state.announcementData]
            };
        }
        case EDIT_ITEM: {
            state.announcementData[action.itemIndex].title = action.itemTitle;
            state.announcementData[action.itemIndex].text = action.itemDesc;
            return {
                ...state,
                announcementData: [...state.announcementData]
                
            };
        }
        case EDIT_ITEM_DESC: {
            return {
                ...state,
                editDescText: action.editDescText
            };
        }
        case EDIT_ITEM_TITLE: {
            return {
                ...state,
                editTitleText: action.editTitleText
            };
        }
        case SEARCH_ITEM: {
            return {
                ...state,
                searchItemTitle: action.searchTitle
            };
        }
        case SHOW_SIMILAR: {
            state.announcementData[action.itemIndex].showSimilar = !state.announcementData[action.itemIndex].showSimilar;
            return {
                ...state,
                announcementData: [...state.announcementData]
            };
        }
        default:
            return state;
    }

}


export const addItemCreator = (date) => ({ type: ADD_ITEM, addDate: date });
export const addItemChangeTitleCreator = (text) => ({ type: ADD_ITEM_CHANGE_TITLE, newTitleText: text });
export const addItemChangeDescCreator = (text) => ({ type: ADD_ITEM_CHANGE_DESC, newDescText: text });
export const deleteItemCreator = (id) => ({ type: DELETE_ITEM, itemID: id });
export const showDetailsItemCreator = (index) => ({ type: SHOW_DETAILS, itemIndex: index });
export const editItemCreator = (index, editTitle, editDesc) => ({ type: EDIT_ITEM, itemIndex: index, itemTitle: editTitle, itemDesc: editDesc });
export const editItemDescCreator = (text) => ({ type: EDIT_ITEM_DESC, editDescText: text });
export const editItemTitleCreator = (text) => ({ type: EDIT_ITEM_TITLE, editTitleText: text });
export const searchItemCreator = (text) => ({ type: SEARCH_ITEM, searchTitle: text });
export const showSimilarItemCreator = (index) => ({ type: SHOW_SIMILAR, itemIndex: index });

export default announcementReducer;