// src/Regular.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { MemeItem } from "../component/MemeItem";

export function Regular() {
    const memes = useSelector((state) => state.memes);
    const filteredMemes = memes.filter(mem => (mem.upvotes - mem.downvotes) <= 5);

    return (
        <section>
            <div className="memes">
                {filteredMemes.map((mem, index) => (
                    <MemeItem key={index} mem={mem} index={index} />
                ))}
            </div>
        </section>
    );
}
