import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function useColorMode() {
	const [colorMode, setColorMode] = useLocalStorage('color-mode', 'dark');

	useEffect(() => {
		const classname = 'dark';
		const bodyClasses = window.document.body.classList;

		colorMode === 'dark'
			? bodyClasses.add(classname)
			: bodyClasses.remove(classname);
	}, [colorMode]);

	return [colorMode, setColorMode];
}

export default useColorMode;
