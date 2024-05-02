import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import protadLogo from '@/assets/ProtadLogo.svg';
import protadLogoDark from '@/assets/ProtadLogoDark.svg';

const ProtadLogo = ({ theme }) => {
  return (
    <Link href="/">
      <Button size="icon" className="hover:bg-transparent bg-transparent">
        {theme === 'dark' ? (
          <Image
            src={protadLogoDark}
            width={0}
            height={0}
            alt="Programming Tadulako"
            className="size-6"
          />
        ) : (
          <Image
            src={protadLogo}
            width={0}
            height={0}
            alt="Programming Tadulako"
            className="size-6"
          />
        )}
      </Button>
    </Link>
  );
};

export default ProtadLogo;
