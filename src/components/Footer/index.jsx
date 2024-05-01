import Image from 'next/image';
import ProtadLogo3 from '@/assets/ProtadLogo3.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-protad-primary px-64 pt-24 pb-6">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <Image
              src={ProtadLogo3}
              alt="Programming Tadulako"
              width={0}
              height={0}
              className="w-48 h-auto"
            />
          </div>
          <div className="text-background">
            <h1 className="text-3xl font-bold">Navigate</h1>
            <ul className="flex flex-col justify-center gap-4 mt-6">
              <Link href="#home">
                <li>Home</li>
              </Link>
              <Link href="#events">
                <li>Events</li>
              </Link>
              <Link href="#about">
                <li>About</li>
              </Link>
            </ul>
          </div>
          <div className="text-background">
            <h1 className="text-3xl font-bold">Socials</h1>
            <ul className="flex flex-col justify-center gap-4 mt-6">
              <Link href="https://www.instagram.com/programming.tadulako/">
                <li>Instagram</li>
              </Link>
              <Link href="https://discord.com/invite/z76zWWcb76">
                <li>Discord</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="text-background mt-24">
          <h1>
            &copy;2022, Programming Tadulako,{' '}
            <span className="italic">All Rights Reserved</span>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
