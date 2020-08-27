import React from 'react' ;

import axios from 'axios'   ;

import api from './api' ; 

class Single extends React.Component{

    state = { nms : [] , loaded : false , delete : false } ;



    async componentDidMount() {

        console.log( this.props.match.params.name ) ;

        const id = this.props.match.params.name ;


        await api.get(`/get/${id}`)
            .then(res =>{
                const data = res.data ;
                this.setState({nms : data}) ;
                console.log(data) ;
                this.setState({loaded : true})
            }) ;

    }


    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevState.delete!==this.state.delete) {

            const id = this.props.match.params.name;

            api.delete(`/delete/${id}`)
                .then(res => {

                    window.location.replace('/');

                });

            window.location.replace('/');
        }
    }


     del(){

            this.setState({delete : true}) ;
    }


    render() {


        if (this.state.loaded === false)
            return (<div></div>);







        return (
            <div className="ui segment container">

                <div className="ui grid">

                    <div className="three wide column">
                        <h2 className="ui header">
                            <i className="large users icon"></i>
                        </h2>
                    </div>

                    <div className="three wide column">
                        <h3>Name: {this.state.nms.name}</h3>
                    </div>


                    <div className="four wide column">
                        <h3>Phone: {this.state.nms.phone}</h3>
                    </div>

                    <div className="two wide column">
                        <div className="ui button">Edit</div>
                    </div>

                    <div className="two wide column">
                      
                    </div>

                    <div className="two wide column">

                        <div onClick={ () => this.del() } className="ui button negative">Delete</div>


                    </div>

                </div>


            </div>

        );


    }

}


export default Single ;
