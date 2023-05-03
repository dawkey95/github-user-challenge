'use client';

import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
	const [value, setValue] = useState(() => {
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			// If error also return initialValue
			console.log(error);
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore =
				typeof storedValue === 'function' ? storedValue(storedValue) : storedValue;
			// Save state
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.log(error);
		}
	}, [key, value]);

	return [value, setValue];
}

export default useLocalStorage;