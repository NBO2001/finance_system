import { memo } from "react";
import { Home, Month } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
          <Route path="/month" component={Month} />
          <Route path="/" component={Home} />
      </Switch>
    </Router>
  )


}

export default memo(App);
