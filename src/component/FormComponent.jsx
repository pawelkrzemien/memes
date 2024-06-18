import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const FormComponent = () => {
    const dispatch = useDispatch();

    const addMeme = (title, imgLink) => {
        dispatch({ type: 'ADD_MEME', payload: { title, img: imgLink } });
    };

    const [title, setTitle] = useState('');
    const [imgLink, setImgLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addMeme(title, imgLink);

        setTitle('');
        setImgLink('');
    };

    const handleFileChange = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            setImgLink(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Tytuł mema"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".jpg, .jpeg, .png"
                    required
                />
            </div>
            {imgLink && (
                <div>
                    <img src={imgLink} alt="Podgląd mema" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                </div>
            )}
            <div>
                <button type="submit" disabled={!title || !imgLink}>
                    Dodaj Mema
                </button>
            </div>
        </form>
    );
};
