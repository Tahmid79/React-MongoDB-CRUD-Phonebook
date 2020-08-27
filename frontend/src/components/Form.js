import React from 'react' ;

import axios from 'axios' ;

import history from '../history'    ;

import api from './api' ;

class Form extends React.Component{

    state = {name : '' , phn : 0 , p : 0 } ;


    h1(e){
        this.setState({name : e.target.value})
    }

    h2(e){
        this.setState({phn : e.target.value})
    }


   maxLengthCheck(event)
    {
        var maxlen = 10 ;

        if (event.target.value.length > maxlen)
           event.target.value = event.target.value.slice(0,maxlen)

    }

    async sbt(e){
        e.preventDefault()  ;
        if( this.state.name.length>0 && this.state.phn.toString().length>=10 && this.state.phn.toString()[0]==='0' ){
            //alert('Form Submitted') ;

            var sr = this.state.phn.toString() ;
            var s =  '88' + sr ;
            var nm = parseInt(s) ;
            this.setState({p : nm }) ;



            const request = {name : this.state.name  , phone  : nm } ;



            await api.post('/create' , request )
                .then(res =>{
                    console.log(res) ;
                    console.log(res.data) ;
                    window.location.href = '/' ;
                })  ;


            window.location.href = '/' ;

           // history.push('/nums' , {forceUpdate: true } ) ;


        }else{
            alert('Please Enter Correct Data')
        }
    }


    render() {
        return (
            <div>

                <form className="ui form" style={{width: '600px' , height : '300px' , marginLeft : '25%'}}>

                    <div className="field">
                        <label>Person Name</label>
                        <input type="text" name="name" onChange={ (e) => this.h1(e)  } required />
                    </div>

                    <div className="field">
                        <label>Phone Number</label>
                        <input onInput={this.maxLengthCheck} type="number" name="phn" onChange={ (e) => this.h2(e)} required />
                    </div>

                    <div className="field">
                          <label>Enter Phone Number in Format : 0xxxxxxxxx</label>
                    </div>

                    <button onClick={e => this.sbt(e) } className="ui button" type="submit">Submit</button>

                </form>

                <div>
                    <h3>{this.state.name}</h3>
                    <h3>{this.state.phn}</h3>
                    <h3>{this.state.p}</h3>
                </div>

            </div>
        );
    }
}

export default Form ;



/*
<div>
    <h3>{this.state.name}</h3>
    <h3>{this.state.phn}</h3>
    <h3>{this.state.p}</h3>
</div>


 */
