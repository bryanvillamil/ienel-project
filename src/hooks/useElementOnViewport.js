import { useState, useEffect, useMemo } from 'react';

export const useElementOnViewport = (targetRef) => {
    
    // State is visible in viewport
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }
    }, [])
    
    useEffect(() => {
        const currentTarget = targetRef.current;
        const observer = new IntersectionObserver(callbackFunction, options);

        if (currentTarget) {
            observer.observe(currentTarget);
        }
        return () => {
        if (currentTarget) {
            observer.unobserve(currentTarget);
        }
        };
    }, [targetRef, options]);
    
    return isVisible;
}