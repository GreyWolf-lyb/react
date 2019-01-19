import React from 'react';
import RouterView from 'router';
import { BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component{
    render(){
        return (
            <div className="app">
                <Router>
                    <RouterView/>
                </Router>
            </div>
        )
    }
}
export default App;