import { useState, UseRef } from 'react';
import { Post } from './Post'
import { v4 as uuid } from 'uuid'

export function Posts() {
    const tituloRef = useRef();
    const descripcionRef = useRef();
    const [mensaje, setMensaje] = useState('');
    const [listaPost, setListaPost] = useState([]);

    function añadirPost() {
        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;

        if (title.trim() === '' || descripcionRef.trim() === '') {
            setMensaje('Campos vacios');
            setTimeout(()=> {
                setMensaje('');
            }, 3000 );
            return;
        }

        const nuevoPost = {
            id: uuid(),
            title: titulo,
            description: descripcion
        };

        setListaPost([...listaPost, nuevoPost])

        tituloRef.current.value = '';
        descripcionRef.current.value = '';
    }


    function eliminarPost(id) {
        const actualizarPosts = listaPost.filter(post => post.id !== id);
        setListaPost(actualizarPosts)
    }

    return (
        <div ClassName="container">
            <h1>Notas</h1>
            <div ClassName="d-flex">
                <input ref={tituloRef} className="form-control m-2" type="text" placeholder="Titulo" />
                <input ref={descripcionRef} className="form-control m-2" type="text" placeholder="Descripcion"/>
                <button className="btn btn-success m2" onClick={añadirPost}>Agregar Post</button>
            </div>
            <div className="alert alert-danger mt2" role="alert" hidden={!mensaje}>
                {mensaje}
            </div>
            <div className="d-flex flex-wrap">
                {listaPost.map(Post => <Post post={post} key={post.id} removePost={eliminarPost} />)}
            </div>
        </div>
    );
}