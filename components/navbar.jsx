'use client';

import useColorMode from '@/hooks/useColorMode';
import Image from 'next/image';
import { Button } from 'react-aria-components';

const Navbar = () => {
	const [colorMode, setColorMode] = useColorMode();
	return (
		<>
			<header className='px-6 pt-7 pb-9 min-w-[100vw]'>
				<div className='flex flex-row justify-between items-center gap-2'>
					<span className='text-navyBlue dark:text-white font-bold text-[1.625rem] '>
						devfinder
					</span>
					<Button
						className='flex flex-row font-bold tracking-[2.5px] text-[0.8125rem] text-darkBlue dark:text-white items-center gap-4 outline-none'
						onPress={() => {
							setColorMode(colorMode === 'light' ? 'dark' : 'light');
						}}
					>
						{colorMode === 'light' ? 'DARK' : 'LIGHT'}
						{colorMode === 'light' ? (
							<Image src={'/assets/icon-moon.svg'} width={20} height={20} alt='' />
						) : (
							<Image src={'/assets/icon-sun.svg'} width={20} height={20} alt='' />
						)}
					</Button>
				</div>
			</header>
		</>
	);
};

export default Navbar;
