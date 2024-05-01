import Image from 'next/image';
import backgroundWave from '@/assets/backgroundWave.svg';

import React from 'react';

const BackgroundWave = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={backgroundWave}
        fill
        quality={100}
        className="object-cover"
        alt="Background"
      />
    </div>
  );
};

export default BackgroundWave;
