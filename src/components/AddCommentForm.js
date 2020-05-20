import React, { useState } from 'react';

const AddCommentForm = ({ articleName, setArticleInfo}) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');
    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment/`, {
            method: 'post',
            body: JSON.stringify({username, text: commentText}),
            headers: {
                'Content-Type': 'application/json',
            }

        });
        const body = await result.json();
        setArticleInfo(body);
    }
    return(
    <div className="add-comment-form">
        <h3>Comment Here</h3>
        <label>
            name:
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
            comment:
            <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
        </label>
      <button onClick={() => addComment()}>Submit Comment</button>
    </div>
);
}

export default AddCommentForm;