import { useState, UseRef } from 'react';
import { Post } from './Post'
import { v4 as uuid } from 'uuid'

export function Posts() {
    const tituloRef = useRef();
    const descripcionRef = useRef();
    const [mensaje, setMensaje] = useState('');
    const [postList, setPostList] = useState([]);

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

        setListaPost([...postList, nuevoPost])

        tituloRef.current.value = '';
        descripcionRef.current.value = '';
    }
}