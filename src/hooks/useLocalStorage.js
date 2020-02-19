import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
	const [ storedValue, setStoredValue ] = useState(() => {
		if (window.localStorage.getItem(key)) {
			return JSON.parse(window.localStorage.getItem(key));
		}
		window.localStorage.setItem(key, JSON.stringify(initialValue));
		return initialValue;
	});

	const setValue = (value) => {
		//save state
		setStoredValue(value);
		// saving to local storage below
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [ storedValue, setValue ];
};
