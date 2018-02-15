import React from 'react';
import {render} from 'react-dom';
import Shopping1 from './Shopping'
import './General.css'
import {Provider,connect} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer,mapStateToProps,mapDispatchToProps} from './Reducer/reducer'
import Shopping from './Shopping';

let store = createStore(rootReducer)

render(
    <Provider store={store}>
        <Shopping1/>
    </Provider>,
    document.getElementById('root')
);