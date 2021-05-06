import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import './App.scss';
import { LandingPage } from "./components/Landing"
import { Head2Head } from "./components/Head2Head"
import { BoxScore } from "./components/BoxScore"
import { Scoregami } from "./components/Scoregami"
import { BiggestRival } from './components/BiggestRival';

function App() {
  return (
    <div className="App">
				<Router>
					<Switch>
						<Route
							exact
							path="/"
							render={() => <LandingPage/>}
						/>
						<Route
							exact
							path="/head2head"
							render={() => <Head2Head/>}
						/>
						<Route
							exact
							path="/boxscore"
							render={() => <BoxScore/>}
						/>
						<Route
							exact
							path="/scoregami"
							render={() => <Scoregami/>}
						/>
						<Route
							exact
							path="/biggestrival"
							render={() => <BiggestRival/>}
						/>
          			</Switch>
				</Router>
		</div>
  );
}

export default App;


