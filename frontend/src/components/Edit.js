import React from 'react' ;

import axios from 'axios' ;

import history from '../history'    ;

import api from './api' ;


class Edit extends React.Component{

    state = {name : '' , phn : 0 , p : 0 , name_def : '' , num_def : 0 , idn : '' , loaded : false } ;



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


    async componentDidMount() {


        const id = this.props.match.params.id ;


        await api.get(`/get/${id}`)
            .then(res =>{
                const data = res.data ;

                //var str = "Hello world!";
                //var res = str.substring(1, 4);


                var num = data.phone.toString() ;
                var n =  num.substring(2 , num.length) ;
                
                var pn = parseInt(n) ;
                    
                console.log(n) ;

                //set default values
                this.setState({ name_def : data.name  }) ;
                this.setState({num_def : pn })  ;
                this.setState({phn : '0' + pn}) ;
                this.setState({name : data.name}) ;
                this.setState({idn :  data._id} )  ;

                this.setState({loaded : true}) ;

                //this.setState({  num_def :  })

            }) ;

    }




     sbt(e){
        e.preventDefault()  ;
        if( this.state.name.length>0 && this.state.phn.toString().length>=10 && this.state.phn.toString()[0]==='0' ){
            //alert('Form Submitted') ;

            var sr = this.state.phn.toString() ;
            var s =  '88' + sr ;
            var nm = parseInt(s) ;
            this.setState({p : nm }) ;



            const request = {name : this.state.name  , phone  : nm } ;

            const id = this.state.idn ;

             api.put(`/edit/${id}` , request )
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

        if (this.state.loaded === true) {

        return (
            <div>

                <form className="ui form" style={{width: '600px', height: '300px', marginLeft: '25%'}}>

                    <div className="field">
                        <label>Person Name</label>
                        <input defaultValue={ this.state.name_def}  type="text" name="name" onChange={(e) => this.h1(e)} required/>
                    </div>

                    <div className="field">
                        <label>Phone Number</label>
                        <input defaultValue={ '0' + this.state.num_def}  onInput={this.maxLengthCheck} type="number" name="phn" onChange={(e) => this.h2(e)}
                               required/>
                    </div>

                    <div className="field">
                        <label>Enter Phone Number in Format : 0xxxxxxxxx</label>
                    </div>

                    <button onClick={e => this.sbt(e)} className="ui button" type="submit">Submit</button>

                </form>



            </div>
        );

      }else {
            return(<div>Loading</div>);
        }
    }




}

export default Edit ;


/*


                <div>
                    <h3>{this.state.name}</h3>
                    <h3>{this.state.phn}</h3>
                    <h3>{this.state.p}</h3>
                </div>
 */
