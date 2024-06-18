import React from 'react';
import { useSelector } from 'react-redux';
import { MemeItem } from '../component/MemeItem';

export function HotMemes() {
    const memes = useSelector((state) => state.memes);
    const hotMemes = memes.filter(mem => (mem.upvotes - mem.downvotes) > 5);

    return (
        <section>
            <div>
                {hotMemes.map((mem, index) => (
                    <MemeItem key={index} mem={mem} index={index} />
                ))}
            </div>
        </section>
    );
}
