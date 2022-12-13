import './App.css';
import Header from './components/Header'
import FullWidth from './components/FullWidth'
import Blog from './components/Blog'
import News from './components/News'

function App() {
   return (
      <div>
        <Header/>
        <FullWidth/>
        <div className="grid">
          <Blog/>
          <News/>
        </div>       
      </div>
   )
}

export default App;
