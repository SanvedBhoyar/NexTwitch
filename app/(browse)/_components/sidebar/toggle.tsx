'use client';

import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useSidebar } from '@/store/use-sidebar';

function Toggle() {
	const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

	const label = collapsed ? 'Expand' : 'Collapse';
	return (
		<>
			{collapsed ? (
				<div className='hidden lg:flex w-full items-center justify-center pt-4 mb-4'>
					<Button
						onClick={onExpand}
						variant='ghost'
						className='h-auto p-2'
					>
						<ArrowRightFromLine className='h-4 w-4' />
					</Button>
				</div>
			) : (
				<div className='p-3 pt-6 mb-2 flex items-center w-full'>
					<p className='font-semibold text-primary'>For you</p>
					<Button
						onClick={onCollapse}
						variant='ghost'
						className='h-auto p-2 ml-auto'
					>
						<ArrowLeftFromLine className='h-4 w-4' />
					</Button>
				</div>
			)}
		</>
	);
}

export default Toggle;
