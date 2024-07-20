export function Post({ post, eliminarPost}) {
    const {id, title, description} = post;

    return (
        <div className="card m-2" style={{width: '18rem', backgroundColor: 'yellow'}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button className="btn btn-danger" onClick={() => eliminarPost(id)}>X</button>
            </div>
        </div>
    );
}