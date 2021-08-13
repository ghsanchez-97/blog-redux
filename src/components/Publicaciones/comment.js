import React from 'react';
import Spinner from "../General/Spinner";
import Error from "../General/Error";
import { connect } from 'react-redux'

const Comment = (props) => {
    if(props.com_error){
        return <Error message={props.com_error} />
    }
    if(props.com_loading && !props.comments.length){
        return <Spinner />
    }

    const putComment = () => (
        props.comments.map((comment, index) => (
            <li key={index}>
                <b>
                    <u>
                        {comment.email}
                    </u>
                </b>
                <br />
                {comment.body}
            </li>
        ))
    )

    return(
        <React.Fragment>
            <ul>
                { putComment() }
            </ul>
        </React.Fragment>
    );
};

const mapStateToProps = ({publicReducer}) => publicReducer
export default connect(mapStateToProps)(Comment);