import { combineReducers, createStore } from "redux";
import announcementReducer from "./reducers/announcement-reducer";


let reducers = combineReducers({
    announcement: announcementReducer
});
//console.log(JSON.parse(localStorage['redux-store']));
// let store = createStore(reducers);
if(typeof(localStorage['redux-store']) == undefined ){
    localStorage['redux-store']="{}";
}
let store = createStore(reducers, JSON.parse(localStorage['redux-store']));
store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
})
console.log(localStorage);

console.log(localStorage);
export default store;