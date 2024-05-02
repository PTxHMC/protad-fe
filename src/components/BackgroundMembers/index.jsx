import Image from 'next/image';
import backgroundMembers from '@/assets/backgroundMembers.svg';

const BackgroundMembers = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={backgroundMembers}
        fill
        quality={100}
        className="object-cover"
        alt="Background"
      />
    </div>
  );
};

export default BackgroundMembers;
