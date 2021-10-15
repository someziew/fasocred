import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer, Submenu } from './components'
import {
  Home,
  Credits,
  Contacts,
  Members,
  Savings,
  Error
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Submenu/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route  path='/membres'>
          <Members/>
        </Route>
        <Route  path='/credits'>
          <Credits/>
        </Route>
        <Route  path='/epargnes'>
          <Savings/>
        </Route>
        <Route  path='/contacts'>
          <Contacts/>
        </Route>
        <Route path='*'>
          <Error/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
