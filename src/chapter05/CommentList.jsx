import React from 'react';
import Comment from "./Comment.jsx";

const comments = [
    {
        name : "CocoZzang",
        comment : "제가 만든 첫 컴포넌트입니다.!!",
    },
    {
        name : "ChocoZzang",
        comment : "It's time to learn 'REACT'.!!",
    },
    {
        name : "CocoZzangZzang",
        comment : "Let's use react for website!!",
    },
];


function CommentList(props) {
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment} />
                    );
                })
            }
        </div>
    );
}

export default CommentList;