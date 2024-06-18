import React from 'react';
import { useDispatch } from 'react-redux';
import "./MemeItem.css";

export function MemeItem({ mem }) {
    const dispatch = useDispatch();

    const handleUpvote = () => {
        dispatch({ type: 'UPVOTE_MEM', payload: mem.id });
    };

    const handleDownvote = () => {
        dispatch({ type: 'DOWNVOTE_MEM', payload: mem.id });
    };

    return (
        <li>
            <div key={mem.title}>
                <br></br>
                <h3>{mem.title}</h3>
                <br></br>
                <div className='img'><img src={mem.img} alt="Meme" /></div>
                <button className='btn' onClick={handleUpvote}>Like ({mem.upvotes})</button>
                <button className='btn' onClick={handleDownvote}>Dislike ({mem.downvotes})</button><br></br>
                <hr />
            </div>
        </li>
    );
}
