import React from 'react';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <header>
        <h1>Mon Application</h1>
      </header>
      <main>
        <AddTodo />
        <VisibleTodoList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
};

export default App;
