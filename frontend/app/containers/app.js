import React, { Component } from 'react';

import LanguageItemsPane from '../components/languages/LanguageItemsPane';
import BugItemsPane from '../components/bugs/BugItemsPane';

// Redux
import { Provider } from 'react-redux';
import store from '../store';

export default class SpotTag extends Component {

    render() {
        return (
            <Provider store={store}>
                <LanguageItemsPane />
            </Provider>
        );
    }
}
