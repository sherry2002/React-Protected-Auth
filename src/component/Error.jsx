import { useState, useEffect } from 'react';

export const useErrorBoundary = () => {
    const [hasError, setHasError] = useState(false);

    const resetError = () => setHasError(false);

    useEffect(() => {
        const handleError = (error) => {
            setHasError(true);
            console.error('Caught by useErrorBoundary: ', error);
        };

        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', handleError);

        return () => {
            window.removeEventListener('error', handleError);
            window.removeEventListener('unhandledrejection', handleError);
        };
    }, []);

    return { hasError, resetError };
};
