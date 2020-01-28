import React, { Component } from 'react'

export default class CommentComponent extends Component {
render() {
    return(
    <div className="comment">
        {this.props.commentText}
    </div>
    )
}
}