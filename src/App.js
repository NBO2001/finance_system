import { memo } from "react";
import { Home, Month, Year } from './pages';
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { ModalAlert } from "./componets"
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
      <ModalAlert />
      <Router>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/month" component={Month} />
            <Route path="/year" component={Year} />
        </Switch>
      </Router>

    </ThemeProvider>
  )


}

export default memo(App);
