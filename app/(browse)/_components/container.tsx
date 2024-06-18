'use client';

import { useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';

type ContainerProps = {
	children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
	const matches = useMediaQuery('(max-width: 1024px)');
	const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

	useEffect(() => {
		if (matches) {
			onCollapse();
		} else {
			onExpand();
		}
	}, [matches, onCollapse, onExpand]);

	return (
		<div className={cn('ml-[70px] flex-1', !collapsed && 'lg:ml-60')}>
			{children}
		</div>
	);
}

export default Container;
