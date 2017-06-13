/**
 * Created by superman on 2017/3/21.
 */

import React from 'react'
import App from '../component/App'

let store = createStore(todoApp);
export default (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/(:filter)' component={App}/>
      </Router>
    </Provider>

)
