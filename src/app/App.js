import NavBar from "../components/navBar";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from "../components/home";
import Login from "../components/login";
import Posts from "../components/posts";
import Dashboard from "../components/dashboard";
import NotFound from "../components/notFound";

function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Switch>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/login' component={Login} />
        <Route path='/posts/:postId?' component={Posts} />
        <Route path='/' exact component={Home} />
        <Route path='/404' component={NotFound}/>
        <Redirect from='/admin' to='/dashboard'/>
        <Redirect to='/404'/>
      </Switch>

    </div>
  );
}

export default App;
