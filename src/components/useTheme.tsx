import { useEffect, useState } from 'react';

type ClickEvent = React.MouseEvent<HTMLElement>;

type Theme = 'dark' | 'light'

type useThemeReturn = [ string, (e: ClickEvent) => void ];

export const useTheme = (initialTheme:Theme): useThemeReturn => {

    const [theme, setTheme] = useState<Theme>(initialTheme)

    const handleClick = ()  => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    return [theme, handleClick]
}

