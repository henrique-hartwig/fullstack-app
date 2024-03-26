import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createUser } from './redux/user/slice'

function App() {
  const { user } = useSelector((reduxUser) => reduxUser)
  console.log('user is: ', user)
  const dispatch = useDispatch()

  const handleClickHenrique = (e) => {
    if(e) {
      dispatch(createUser({
        name: 'henrique'
      }))
    }
  }

  const handleClickMontagna = (e) => {
    if(e) {
      dispatch(createUser({
        name: 'montagna'
      }))
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        Componente App
        <br/>
        User: {user.name}
        <button onClick={handleClickHenrique}>Click me!</button>
        <button onClick={handleClickMontagna}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
