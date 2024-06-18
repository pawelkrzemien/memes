import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Regular } from './pages/Regular';
import { HotMemes } from './pages/Hot';
import { Form } from './pages/Form';
import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <nav className="navWrapper">
                    <ul>
                        <li>
                            <NavLink to="/" activeclassname="active">Regular</NavLink>
                        </li>
                        <li>
                            <NavLink to="/hot" activeclassname="active">Hot</NavLink>
                        </li>
                        <li>
                            <NavLink to="/form" activeclassname="active">Dodaj Mema</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Regular/>}/>
                    <Route path="/hot" element={<HotMemes />} />
                    <Route path="/form" element={<Form />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
