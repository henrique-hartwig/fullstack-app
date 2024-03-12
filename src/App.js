import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {createUser} from './redux/user/slice'

function App() {
  const { user } = useSelector((reduxUser) => reduxUser.user)
  console.log('user is: ', user)
  const dispatch = useDispatch()

  const handleClick = (e) => {
    if(e) {
      dispatch(createUser({
        name: 'henrique'
      }))
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        Componente App
        <br/>
        User: {user.name}
        <button onClick={handleClick}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
