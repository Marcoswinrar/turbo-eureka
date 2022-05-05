import './App.css';
import ListExpand from './components/list-expand';
import ListaUsuario from './hooks/callBackVsMemo';
import Callback from './hooks/useCallBack';

function App() {
  return (
    <div className="App">
      <h2>React API</h2>
      <ListExpand />
      <Callback/>
      <ListaUsuario />
    </div>
  )
}

export default App
