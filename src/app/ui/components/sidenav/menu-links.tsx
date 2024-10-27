'use client';

import { menuItems } from '@/app/ui/components/sidenav/menu-items';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

export default function MenuLinks() {
  const [activeMenuItemId, setActiveMenuItemId] = useState<string | undefined>(menuItems?.[0]?.id);

  return menuItems.map((item) => (
    <div key={item.name} className={'p-2'}>
      <Link
        href={item.url}
        onClick={() => setActiveMenuItemId(item.id)}
        className={clsx(item.id === activeMenuItemId ? 'underline' : '')}
      >
        {item.name}
      </Link>
    </div>
  ));
}
