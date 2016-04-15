import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="container">
    <header className="jumbotron">
      <h2>Todo APP</h2>
    </header>
    <main>
    <AddTodo />
    <VisibleTodoList />
    </main>
    <Footer />
  </div>
)

export default App;


// -> containers/FilterLink.js
