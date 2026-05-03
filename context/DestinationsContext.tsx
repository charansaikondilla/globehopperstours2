
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DestinationsData, destinationsData as initialLocalData } from '../data/destinations';
import { fetchPricingFromSheets, mergePricingData } from '../utils/googleSheets';

interface DestinationsContextType {
    destinations: DestinationsData;
    isLoading: boolean;
    refreshData: () => Promise<void>;
}

const DestinationsContext = createContext<DestinationsContextType | undefined>(undefined);

export const DestinationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Start with local data immediately so there is no "loading blank screen"
    const [destinations, setDestinations] = useState<DestinationsData>(initialLocalData);
    const [isLoading, setIsLoading] = useState(false);

    const refreshData = async () => {
        setIsLoading(true);
        const pricingRows = await fetchPricingFromSheets();

        if (pricingRows) {
            const merged = mergePricingData(initialLocalData, pricingRows);
            setDestinations(merged);
        }
        setIsLoading(false);
    };

    /**
     * Initial Fetch on Mount
     */
    useEffect(() => {
        refreshData();
    }, []);

    return (
        <DestinationsContext.Provider value={{ destinations, isLoading, refreshData }}>
            {children}
        </DestinationsContext.Provider>
    );
};

export const useDestinations = () => {
    const context = useContext(DestinationsContext);
    if (!context) {
        throw new Error('useDestinations must be used within a DestinationsProvider');
    }
    return context;
};
