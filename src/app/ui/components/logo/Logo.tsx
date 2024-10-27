import React from 'react';
import { logoFont } from '@/app/fonts/fonts';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className={`${logoFont.className} mt-4 pl-8 text-4xl`}>
      <Link href={'/dashboard'}>P</Link>
    </div>
  );
}
