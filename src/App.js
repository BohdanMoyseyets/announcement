import style from './App.module.css';
import ItemsContainer from './components/ItemsContainer';

function App(props) {
  return (
    <div className={style.app}>
      <ItemsContainer store={props.store}/>
      <div></div>
    </div>
  );
}

export default App;
