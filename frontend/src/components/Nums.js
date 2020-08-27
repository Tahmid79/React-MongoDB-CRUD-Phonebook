import React from 'react'   ;

import axios from 'axios'   ;

import {Link} from 'react-router-dom'   ;

import api from './api' ; 

class Nums extends React.Component{

    state = { nmbs : [] , loaded : false, n : 0 , del_id : '' , delete : false } ;



    async componentDidMount(){

        window.onpopstate = function(event) {
          window.location.reload() ;
        };

        
       await api.get('/')
            .then(res =>{
                const data = res.data ;
                this.setState({nmbs : data}) ;
                console.log(data) ;
                this.setState({loaded : true})
            });

        
    }


     componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevState.delete!==this.state.delete) {

            const id = this.state.del_id;

           api.delete(`/delete/${id}`)
                .then(res => {

                    window.location.reload() ;

                });

            window.location.reload() ;
        }

    }


    del(id){

        this.setState({del_id : id }) ;
        this.setState({delete : true}) ;

    }

    render() {

        if(this.state.loaded===false){
            return <div>Loading</div>
        }


        return(

            <div className="ui container" >
                <div className="ui middle aligned divided list"  style={{width : '50%' , marginLeft : '25%'}}  >
                    {this.state.nmbs.map(nm =>

                        <div className="item" key={nm._id}   >

                            <div className="content">
                                <h4>Name : {nm.name}</h4>
                                <h4>Phone : {nm.phone}</h4>
                            </div>

                            <div className="content">

                                <div className="ui grid">

                                    <div className="column three wide" >
                                        <a href = {`/nums/${nm._id}`} >   <div className="ui button">View</div></a>
                                    </div>

                                    <div className="column three wide" >
                                        <a href={`/edit/${nm._id}`}> <div className="ui button">Edit</div>   </a>
                                    </div>

                                    <div className="column five wide"></div>

                                    <div className="column three wide" >
                                        <div onClick={() =>  this.del(nm._id) } className="ui button  negative">Delete</div>
                                    </div>

                                </div>
                            </div>

                        </div>



                    )}


                </div>

            </div>)  ;

    }


}

export default Nums ;
