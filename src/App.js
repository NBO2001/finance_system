import { memo } from "react";
import { Home, Month } from './pages';
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import theme from "./theme";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Router>
        <Switch>
            <Route path="/month" component={Month} />
            <Route path="/" component={Home} />
        </Switch>
      </Router>

    </ThemeProvider>
  )


}

export default memo(App);
