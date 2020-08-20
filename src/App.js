import React from 'react';
import axios from 'axios';
import { addUsers } from './actions/users';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import UsersList from './components/UsersList';
import './App.css';

class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/users')
            .then(response => {
                console.log(response.data);
                store.dispatch(addUsers(response.data.results));
            })
    }
    render() {
      return (
        <Provider store={store}>
          <div className="main-section">
              <Header />
              <UsersList />
          </div>
        </Provider>
      )
    }
}


export default App;
