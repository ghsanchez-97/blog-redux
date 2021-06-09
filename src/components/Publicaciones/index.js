import React from 'react';

class Publicaciones extends React.Component{
    render() {
        return(
            <React.Fragment>
                { this.props.match.params.key }
            </React.Fragment>
        )
    }
}

export default Publicaciones;