import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/redux-store";
import News from "./components/News/News"
import {Switch} from "react-router-dom"
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));

class App extends Component {
    catchAllUnhandledErrors = (promiseRejectionEvent)=>{
        // alert("some errors");
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors);
    }
    componentWillMount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route  path='/login' render={() => <LoginPage/>}/>
                    <Route path='/news' render={() => {return <React.Suspense fallback={<div>loading...</div>}><News/></React.Suspense>}}/>
                    <Route path='/music' render={() => { return <React.Suspense fallback={<div>loading...</div>}><Music/></React.Suspense>}}/>
                    <Route path='/settings' render={() => {return <React.Suspense fallback={<div>loading...</div>}><Settings/></React.Suspense>}}/>
                    {/*<Route  path='*'*/}
                    {/*       render={() => <div> 404</div>}/>*/}
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJsApp = (props) => {
    return <HashRouter>

        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default SamuraiJsApp;