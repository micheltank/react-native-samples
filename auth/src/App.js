import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Card, CardSection, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyDhc3wvsCzY5ZscE6-b6mjZ5N4Dnz5xCik',
                authDomain: 'auth-fc9cd.firebaseapp.com',
                databaseURL: 'https://auth-fc9cd.firebaseio.com',
                projectId: 'auth-fc9cd',
                storageBucket: 'auth-fc9cd.appspot.com',
                messagingSenderId: '65444549954'
            }
        );
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return this.renderLogoutButton();
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    renderLogoutButton() {
        return (
            <Card>
                <CardSection>
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                </CardSection>
            </Card>
        );
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
