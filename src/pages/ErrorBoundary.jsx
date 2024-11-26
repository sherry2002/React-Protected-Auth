import React from 'react';
import { useErrorBoundary } from '../component/Error';

const ErrorBoundary = ({ children }) => {
    const { hasError, resetError } = useErrorBoundary();

    if (hasError) {
        return (
            <div>
                <h1>Something went wrong.</h1>
                <button onClick={resetError}>Try Again</button>
            </div>
        );
    }

    return children;
};

export default ErrorBoundary;
