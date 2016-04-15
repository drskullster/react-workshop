import { createStore } from 'redux'
import todoApp from './reducers'

///let store = createStore(todoApp)
let store = createStore(todoApp, {}, window.devToolsExtension ? window.devToolsExtension() : undefined)

/*
store.subscribe((state) => {
  console.log(store.getState());
});
store.dispatch({type: 'ADD_TODO', id: 0, text: "gello", completed: false});
*/
/*
  Explications :
  - Quand on appelle store.dispatch(action), Redux appelle tous les reducers.
  - Le resultat de tous les reducers est mergé dans un nouveau state.
  - Tous les listeners enregistrés avec store.subscribe seront appelés.

  Le dispatch peut être envoyé de n'importe où, composants, callbacks, setInterval,...

  On a utilisé que Redux, maintenant on connecte à React
  npm install react-redux --save

  presentational components VS container components
  ---------

  assez similaire à l'idée des stateless components, on fait la distinction
  entre des componsants idiots (dumb) qui n'ont que de la logique de présentation
  et des composants fonctionnels qui seront connectés au store redux

  presentational :

    *TodoList*   Liste qui montre les tâches visibles
    *Todo*    Une tâche
    *Link*    Lien avec un callback
    *Footer*    l'endroit où on placera le filtre de visibilité
    *App*   le composant raçine qui contient tout les autres

    containers :

    *VisibleTodoList*   filtre les todos en fonction du filtre et render une TodoList
    *FilterLink*   récupère le filtre visibilité et render un Link

    autre :
    *AddTodo*   formulaire d'ajout, mix composant visuel / container
*/


// -> components/TodoList.js




import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)
