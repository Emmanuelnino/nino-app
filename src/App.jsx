import './App.css'
import Nav from './components/Nav'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import PostResult from './pages/PostResult'
import UpdateResult from './pages/UpdateResult'
import CheckResults from './pages/CheckResults'
function App() {

  return (
    <>
      <Nav />
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/post' Component={PostResult}/>
          <Route path='/update' Component={UpdateResult}/>
          <Route path='/check' Component={CheckResults}/>
      </Routes>

    </>
  )
}

export default App
