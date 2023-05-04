'use client';

import useColorMode from '@/hooks/useColorMode';
import Image from 'next/image';
import { Button } from 'react-aria-components';

const Navbar = () => {
	const [colorMode, setColorMode] = useColorMode();
	return (
		<>
			<header className='px-7 mt-7 pb-9 min-w-[100vw] md:mt-[140px] md:px-[97px] xl:mt-[144px] xl:px-[355px]'>
				<div className='flex flex-row justify-between items-center gap-2'>
					<span className='text-navyBlue dark:text-white font-bold text-[1.625rem] '>
						devfinder
					</span>
					<Button
						className='flex flex-row font-bold tracking-[2.5px] text-[0.8125rem] text-darkBlue fill-darkBlue hover:fill-navyBlue  hover:text-navyBlue dark:text-white items-center gap-4 outline-none'
						onPress={() => {
							setColorMode(colorMode === 'light' ? 'dark' : 'light');
						}}
					>
						{colorMode === 'light' ? 'DARK' : 'LIGHT'}
						{colorMode === 'light' ? (
							<svg width='20' height='20'>
								<path
									d='M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z'
									fill='inherit'
									fill-rule='nonzero'
								/>
							</svg>
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
