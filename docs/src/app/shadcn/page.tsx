'use client';

import { redirect, usePathname } from 'next/navigation';

const Page = () => {
    const pathname = usePathname();

    redirect(`${pathname}/overview`);
};

export default Page;
