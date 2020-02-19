import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
	const [ darkMode, setDarkMode ] = useLocalStorage(key);

	useEffect(() => {
		if (darkMode === true) return darkMode;
		else {
			return !darkMode;
		}
	});

	return [ darkMode, setDarkMode ];
};
