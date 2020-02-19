import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
	const [ darkMode, setDarkMode ] = useLocalStorage(status);

	// useEffect(() => {

	// }

	return [ darkMode, setDarkMode ];
};
