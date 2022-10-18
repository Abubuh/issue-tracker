import './App.css'
import { Login } from './components/Login'

function App() {
  const fetchHello = async () => {
    const res = await fetch('/api/hello');
    const data = await res.json();

    console.log(data)
  }
  fetchHello()

  return (
    <div className="App">
      Hello
        <Login/>
    </div>
  )
}

export default App
