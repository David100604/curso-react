import React, { Component } from 'react';

class Feed extends Component{
    render(){
        return(
            <div key={this.props.id}>
                <br />
                <h3>{this.props.username}</h3>
                <p>{this.props.curtidas > 1 ? this.props.curtidas + ' curtidas / ':
                    this.props.curtidas + ' curtida / '}  
                    {this.props.comentarios === 1 ? this.props.comentarios + ' comentário' :
                    this.props.comentarios + ' comentários'}
                    </p>
                <hr />
            </div>
        );
    }
}

export default Feed;