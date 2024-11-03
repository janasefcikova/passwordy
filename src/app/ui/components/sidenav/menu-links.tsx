'use client';

import { menuItems } from '@/app/ui/components/sidenav/menu-items';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function MenuLinks() {
  const pathname = usePathname();
  return menuItems.map((item) => (
    <div key={item.name} className={'p-2'}>
      <Link href={item.href} className={clsx({ underline: pathname === item.href })}>
        {item.name}
      </Link>
    </div>
  ));
}
