import { Logo } from './_components/logo';

function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col items-center justify-center space-y-6 p-5'>
			<Logo />
			{children}
		</div>
	);
}

export default AuthLayout;
