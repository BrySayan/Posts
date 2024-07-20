import React from 'react';

export function Post({ post, eliminarPost }) {
    const { id, title, description, importante } = post;

    return (
        <div id="post" className="card m-2" 
            style={{ 
                margin: '10px',
                width: '15rem',
                height: '15rem', 
                border: '2px solid black' ,
                backgroundColor: importante ? '#ee3a1f' : '#ffff7a'
            }}
        >
            <div className="card-body" style={{textAlign:'center'}}>
                <button className="btn btn-danger" onClick={() => eliminarPost(id)}
                        style={{textDecorationColor:'black',
                            backgroundColor:'white',
                            justifyContent:'flex-end',
                            marginLeft:'13rem', marginTop:'10px'}}>X</button>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}
