import React, {Suspense } from 'react';
import { Switch, Route } from "react-router-dom"
import Main from './pages/Main'
import './App.css'
import TodosPage from './pages/TodosPage'

function App() {
  return (
     <Switch>
       <Suspense fallback={null}>
        <Route exact path='/'><Main /></Route>
        <Route exact path='/todos'><TodosPage /></Route>
       </Suspense>
     </Switch>
  );
}

export default App;
