import React, { RefObject, useEffect, useState } from 'react'

export default function useElementSize(ref: RefObject<HTMLElement | null>) {
    const [elementSize, setElementSize] = useState<number[]>([0, 0]);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>  {
            const [entry] = entries;
            const onElementSize = [entry.contentRect.width, entry.contentRect.height];
            
            setElementSize(onElementSize);
        })

        if(ref && ref.current) resizeObserver.observe(ref.current);
        
        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return elementSize;
}
