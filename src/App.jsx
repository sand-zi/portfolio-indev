import { GlobalStyle } from "./assets/styles/GlobalStyle.js";
import { AppHeader } from "./components/AppHeader";
import { AboutPage } from "./pages/AboutPage";
import { Switch, Route } from 'react-router-dom'
import { ContactPage } from "./pages/ContactPage.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";




function App() {
  return (
    <div className="App">
      <AppHeader />
      <GlobalStyle />
      <Switch>
        <Route path="/projects" component={ProjectsPage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route path="/" component={AboutPage}></Route>
      </Switch>

    </div>
  );
}

export default App;
