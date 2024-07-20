import React, { useState, useRef } from 'react'; // Corregido a useRef
import { Post } from './Post';
import { v4 as uuid } from 'uuid';

export function Posts() {
    const tituloRef = useRef();
    const descripcionRef = useRef();
    const importanteRef = useRef();  // Corregido aquí
    const [mensaje, setMensaje] = useState('');
    const [listaPost, setListaPost] = useState([]);

    function añadirPost() {
        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;
        const importante = importanteRef.current.checked;  // Corregido aquí

        if (titulo.trim() === '' || descripcion.trim() === '') {
            setMensaje('Campos vacíos');
            setTimeout(() => {
                setMensaje('');
            }, 3000);
            return;
        }

        const nuevoPost = {
            id: uuid(),
            title: titulo,
            description: descripcion,
            importante: importante  // Añadido aquí
        };

        setListaPost([...listaPost, nuevoPost]);

        tituloRef.current.value = '';
        descripcionRef.current.value = '';
        importanteRef.current.checked = false;  // Resetear el checkbox
    }

    function eliminarPost(id) {
        const actualizarPosts = listaPost.filter(post => post.id !== id);
        setListaPost(actualizarPosts);
    }

    return (
        <div className="container">
            <h1>Notas</h1>
            <div className="d-flex">
                <input ref={tituloRef} className="form-control m-2" type="text" placeholder="Título" style={{marginRight:'10px'}} />
                <input ref={descripcionRef} className="form-control m-2" type="text" placeholder="Descripción" />
                <div className="form-check m-2">
                    <input ref={importanteRef} className="form-check-input" type="checkbox" id="importante" />
                    <label className="form-check-label" htmlFor="importante">Importante</label>
                </div>
                <button className="btn btn-success m-2" onClick={añadirPost}>Agregar Post</button>
            </div>
            <div className="alert alert-danger mt-2" role="alert" hidden={!mensaje}>
                {mensaje}
            </div>
            <div className="d-flex flex-wrap">
                {listaPost.map(postItem => (
                    <Post 
                        post={postItem} 
                        key={postItem.id} 
                        eliminarPost={eliminarPost} 
                    />
                ))}
            </div>
        </div>
    );
}
