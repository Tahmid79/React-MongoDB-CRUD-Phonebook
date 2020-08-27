import React from 'react' ;


class Header extends React.Component{
    render() {
        return(
            <div>
                <div className="ui clearing segment">

                    <a href="/"><h3 className="ui left floated header">
                        Home
                    </h3></a>


                    <a href="/form"> <h3 className="ui right floated header">
                        New
                    </h3></a>



                </div>
            </div>


        )
    }
}

export default Header ; 
