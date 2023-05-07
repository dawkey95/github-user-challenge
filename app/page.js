import Navbar from '@/components/navbar';
import MainApp from '@/components/mainApp';

export default function Home() {
	return (
		<main className='font-mono flex flex-col items-center bg-lightGray dark:bg-black min-h-screen min-w-full overflow-x-hidden px-6 md:px-[97px] lg:px-[355px]'>
			<Navbar />
			<MainApp />
		</main>
	);
}
