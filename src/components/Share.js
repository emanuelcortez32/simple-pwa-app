import React, { useEffect, useState } from 'react';

export const Share = ({urlToShare,title}) => {
    
    const [viewShare, setViewShare] = useState(false);

    useEffect(() => {
        if(!navigator.share) {
            setViewShare(false)
        }else{
            setViewShare(true)
        }
    },[]);

    const compartir = (e) => {
        e.preventDefault();
        navigator.share({
            title: title,
            text: 'URL compartida desde PWA',
            url: urlToShare
        })
        .catch((err) => console.error('No se pudo compartir el contenido'))
    }

    return (
        <>
            { viewShare && <div onClick={compartir}>Compartir</div>}
        </>
    )
}