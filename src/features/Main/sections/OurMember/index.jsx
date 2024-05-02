import React from 'react';
import MembersCarousel from './components/MembersCarousel';
import { Button } from '@/components/ui/button';

const OurMember = () => {
  return (
    <section
      id="members"
      className="container min-h-screen flex flex-col justify-center items-center gap-6 md:px-36 py-32"
    >
      <h1 className="text-center text-4xl text-protad-primary font-bold">
        Our Member
      </h1>
      <p className="text-center text-2xl">
        Beberapa dari kami telah mengikuti pembelajaran di luar kampus (Kampus
        Merdeka) dan telah bekerja di perusahaan
      </p>
      <div className="px-12">
        <MembersCarousel />
      </div>
      <Button
        variant="outline"
        className="bg-protad-secondary text-protad-primary hover:text-protad-primary"
      >
        Show More
      </Button>
    </section>
  );
};

export default OurMember;
