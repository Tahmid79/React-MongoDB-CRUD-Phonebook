import React from 'react' ;
import { Router , Route , Switch  } from 'react-router-dom' ;

import history from '../history'    ;

import Nums from './Nums' ;

import Form from "./Form";
import Header from "./Header";
import Single from './Single' ; 
import Edit from './Edit'   ;


const App = () =>{

    return (
    <div>
        <Router history={history} >
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Nums} />
                    <Route path="/form" exact component={Form} />
                    <Route path="/nums/:name" exact component={Single} />
                    <Route path="/edit/:id" exact component={Edit} />
                </Switch>

            </div>
        </Router>
    </div>
    ) ;

};

export default App ; 
