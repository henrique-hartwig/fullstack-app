import './App.css';
import { useSelector } from 'react-redux';


function App() {
  const { user, outro } = useSelector((reduxGetter) => reduxGetter.user)
  console.log('user is: ', user)
  console.log('outro is: ', outro)

  return (
    <div className="App">
      <header className="App-header">
        Componente App
      </header>
    </div>
  );
}

export default App;
