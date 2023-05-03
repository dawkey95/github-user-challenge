import Navbar from '@/components/navbar';
import MainApp from '@/components/mainApp';

export default function Home() {
	return (
		<main className='font-mono flex flex-col items-center bg-lightGray dark:bg-black min-h-screen overflow-x-hidden'>
			<Navbar />
      <MainApp />
		</main>
	);
}
