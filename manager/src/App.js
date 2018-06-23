import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDmo2HLTlxMMoQ3AppAvVRnvihpZ68ynE4',
            authDomain: 'manager-9cbf0.firebaseapp.com',
            databaseURL: 'https://manager-9cbf0.firebaseio.com',
            projectId: 'manager-9cbf0',
            storageBucket: 'manager-9cbf0.appspot.com',
            messagingSenderId: '343455303874'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
