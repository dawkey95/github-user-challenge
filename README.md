# Frontend Mentor - GitHub user search app solution

This is a solution to the [Github User](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6/hub). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

![](./public/assets/GitHub%20User.png)

### Links

- Solution URL: [Github Solution](https://github.com/dawkey95/github-user-challenge)
- Live Site URL: [Live Site](https://dk-github-user.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [DaisyUI](https://daisyui.com/) - Components for Tailwind CSS
- [React-Aria](https://react-spectrum.adobe.com/react-aria/)

### What I learned

I really enjoyed this project. First time working with API's in a long while and felt like I was actually creating a web app. I also learnt how to use React-Aria to create accessible components although I will be switching to RadixUI in the future for accesible components inconjuction with DaisyUI. I also learnt how to0 use Axios to fetch data from the Github API.

```js
const handleButtonClick = async () => {
	try {
		const response = await axios.get(`https://api.github.com/users/${userName}`);

		const rawDate = response.data.created_at;
		const dateObj = new Date(rawDate);
		const day = dateObj.getDate();
		const month = dateObj.toLocaleString('default', { month: 'short' });
		const year = dateObj.getFullYear();
		const formattedDate = `${day} ${month} ${year}`;

		setDate(formattedDate);
		setUser(response.data);
	} catch (error) {
		setUser(null);
		setError('No results');
	}
};
```

Also learnt how to use the ternary operator to conditionally render a placeholder in the input field.

```js
placeholder={error !== '' ? '' : 'Search GitHub username…'}
```

In order to create a dark/light mode switch for my tailwind css I created two custom hooks:

```js
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
```

Then using the `useLocalStorage` hook I then created a custom hook to set the color mode of the app.

```js
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
```

### Useful resources

- [ChatpGPT] - Invaluable resource for learning React and Next.js

## Author

- Website - [Dawid Keyser](https://dk-personal.netlify.app/)
- Frontend Mentor - [@dawkey95](https://www.frontendmentor.io/profile/dawkey95)
- Twitter - [@dawidkeyser95](https://twitter.com/dawidkeyser95)
