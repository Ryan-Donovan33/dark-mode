import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
	const [ darkMode, setDarkMode ] = useLocalStorage('status');

	useEffect(
		() => {
			if (darkMode === true) {
				document.querySelector('body').classList.add('dark-mode');
			} else if (darkMode !== true) {
				document.querySelector('body').classList.remove('dark-mode');
			}
		},
		[ darkMode ]
	);

	return [ darkMode, setDarkMode ];
};
