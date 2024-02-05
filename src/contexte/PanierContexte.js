import { createContext, useState } from 'react';

export const PanierContext = createContext();

export const PanierContexteProvider = ({children}) => {
    const [panier, setPanier] = useState([]);

    return (
        <PanierContext.Provider value={{ panier, setPanier }} >
            { children }
        </PanierContext.Provider>
    )
}