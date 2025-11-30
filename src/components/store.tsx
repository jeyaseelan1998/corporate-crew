"use client";

import $ from 'jquery-slim';
import { createContext, ReactNode, useContext, useEffect, useState, Dispatch, SetStateAction } from "react";

type ContextState = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    dimensions: {
        winWidth: number;
        winHeight: number;
    };
};

const INITIAL_STATE: ContextState = {
    theme: 'light',
    setTheme: (() => {}) as Dispatch<SetStateAction<string>>,
    dimensions: {
        winWidth: 0,
        winHeight: 0,
    }
}

const ContextAPI = createContext<ContextState>(INITIAL_STATE);

export const useContextAPI = () => {
    const data = useContext(ContextAPI);
    return data;
}

export function ContextProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<string>('light');

    const [dimensions, setDimensions] = useState({
        winWidth: 0,
        winHeight: 0
    });

    const getDimensions = () => {
        setDimensions({
            winWidth: $(window).width(),
            winHeight: $(window).height()
        });
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getDimensions();
        window.addEventListener('resize', getDimensions);
        return () => {
            window.removeEventListener('resize', getDimensions);
        }
    }, [])

    const values: ContextState = {
        theme,
        setTheme,
        dimensions,
    }

    return (
        <ContextAPI.Provider value={values}>
            {children}
        </ContextAPI.Provider>
    )
}