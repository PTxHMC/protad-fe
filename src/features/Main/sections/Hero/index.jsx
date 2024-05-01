import Image from 'next/image';
import React from 'react';
import ProtadLogo2 from '@/assets/ProtadLogo2.svg';
import { DiscordLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="container min-h-screen">
      <div className="flex flex-col justify-center items-center gap-4 pt-24">
        <Image
          src={ProtadLogo2}
          alt="Programming Tadulako"
          width={0}
          height={0}
          className="w-[36rem] h-auto"
        />
        <p className="text-2xl text-center text-white">
          A <strong>community</strong> based in Palu, Indonesia. <br />
          Learn about programming, softskills, and teamwork.
        </p>
        <strong className="text-2xl text-white">#GrowTogetherWithUs</strong>
        <div className="flex justify-center items-center gap-4 text-white">
          <Link href="https://www.instagram.com/programming.tadulako/">
            <InstagramLogoIcon className="size-8" />
          </Link>
          <Link href="https://discord.com/invite/z76zWWcb76">
            <DiscordLogoIcon className="size-8" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
