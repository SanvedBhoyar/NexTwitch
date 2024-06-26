'use client';

import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useSidebar } from '@/store/use-sidebar';
import Hint from '@/components/hint';

function Toggle() {
	const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

	const label = collapsed ? 'Expand' : 'Collapse';
	return (
		<>
			{collapsed ? (
				<div className='hidden lg:flex w-full items-center justify-center pt-4 mb-4'>
					<Hint label={label} side='right' asChild>
						<Button
							onClick={onExpand}
							variant='ghost'
							className='h-auto p-2'
						>
							<ArrowRightFromLine className='h-4 w-4' />
						</Button>
					</Hint>
				</div>
			) : (
				<div className='p-3 pt-6 mb-2 flex items-center w-full'>
					<p className='font-semibold text-primary'>For you</p>
					<Hint label={label} side='left' asChild>
						<Button
							onClick={onCollapse}
							variant='ghost'
							className='h-auto p-2 ml-auto'
						>
							<ArrowLeftFromLine className='h-4 w-4' />
						</Button>
					</Hint>
				</div>
			)}
		</>
	);
}

export default Toggle;
