import React from 'react';

export function Post({ post, eliminarPost }) {
    const { id, title, description, importante } = post;

    return (
        <div id="post" className="card m-2" 
            style={{ 
                margin: '10px',
                width: '12rem',
                height: '12rem', 
                border: '2px solid black' ,
                backgroundColor: importante ? '#ee3a1f' : '#ffff7a'
            }}
        >
            <div className="card-body" style={{textAlign:'center'}}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button 
                    className="btn btn-danger" 
                    onClick={() => eliminarPost(id)}
                >
                    X
                </button>
            </div>
        </div>
    );
}
