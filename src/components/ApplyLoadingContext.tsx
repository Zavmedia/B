import React, { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplyLoadingOverlay from './ApplyLoadingOverlay';

interface ApplyLoadingContextType {
    startTransition: (to: string) => void;
}

const ApplyLoadingContext = createContext<ApplyLoadingContextType | undefined>(undefined);

export const ApplyLoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const startTransition = useCallback((to: string) => {
        setIsLoading(true);

        // After 2 seconds, trigger navigation
        setTimeout(() => {
            navigate(to);
        }, 2000);

        // After 3 seconds, hide overlay
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [navigate]);

    return (
        <ApplyLoadingContext.Provider value={{ startTransition }}>
            {children}
            {isLoading && <ApplyLoadingOverlay />}
        </ApplyLoadingContext.Provider>
    );
};

export const useApplyTransition = () => {
    const context = useContext(ApplyLoadingContext);
    if (!context) {
        throw new Error('useApplyTransition must be used within an ApplyLoadingProvider');
    }
    return context;
};
