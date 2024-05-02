import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import MembersCard from '../MembersCard';

const MembersCarousel = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <MembersCard
            batch="Apollo"
            name="John Doe"
            experience="Studi Independen di Google"
            quotes='"Lorem Ipsum Dolor Sit Amet Hehehehehehehhehehehheheh"'
            github="https://github.com/adzaky"
            linkedin="https://www.linkedin.com/in/adlimdzaky/"
            className="md:col-span-3"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <MembersCard
            batch="Voyager"
            name="John Doe"
            experience="Studi Independen di Google"
            quotes='"Lorem Ipsum Dolor Sit Amet Hehehehehehehhehehehheheh"'
            github="https://github.com/adzaky"
            linkedin="https://www.linkedin.com/in/adlimdzaky/"
            className="md:col-span-3"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <MembersCard
            batch="Rover"
            name="John Doe"
            experience="Studi Independen di Google"
            quotes='"Lorem Ipsum Dolor Sit Amet Hehehehehehehhehehehheheh"'
            github="https://github.com/adzaky"
            linkedin="https://www.linkedin.com/in/adlimdzaky/"
            className="md:col-span-3"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
};

export default MembersCarousel;
