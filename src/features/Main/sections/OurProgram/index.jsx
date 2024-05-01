import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem
} from '@/components/ui/carousel';
import { BatchItems, KegiatanItems, PembelajaranItems } from '@/constants';

const OurProgram = () => {
  return (
    <section className="container min-h-screen py-32">
      <div className="flex flex-col justify-center items-center gap-12 md:px-24 px-2">
        <div className="w-full space-y-4">
          <h1 className="text-4xl text-protad-primary font-bold">
            Pembelajaran
          </h1>
          <div className="flex md:flex-row flex-col-reverse justify-center md:justify-between gap-6">
            <div className="flex-1">
              <div className="space-y-2">
                <p className="text-2xl">
                  Kami melakukan beberapa <strong>pembelajaran</strong> seperti:
                </p>
                <ul>
                  <li className="text-2xl">✔️ HTML, CSS, Javascript dasar</li>
                  <li className="text-2xl">✔️ Git & Github</li>
                  <li className="text-2xl">✔️ React JS (Frontend dev)</li>
                  <li className="text-2xl">✔️ Golang (Backend dev)</li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <Carousel
                opts={{
                  loop: true
                }}
              >
                <CarouselContent>
                  {PembelajaranItems.map(({ id, src, alt }) => (
                    <CarouselItem key={id}>
                      <Image
                        src={src}
                        alt={alt}
                        width={0}
                        height={0}
                        className="size-full object-cover rounded-2xl"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselDots />
              </Carousel>
            </div>
          </div>
        </div>
        <div className="w-full space-y-4">
          <h1 className="text-4xl text-protad-primary font-bold">Kegiatan</h1>
          <div className="flex md:flex-row flex-col justify-center md:justify-between gap-6">
            <div className="flex-1">
              <Carousel
                opts={{
                  loop: true
                }}
              >
                <CarouselContent>
                  {KegiatanItems.map(({ id, src, alt }) => (
                    <CarouselItem key={id}>
                      <Image
                        src={src}
                        alt={alt}
                        width={0}
                        height={0}
                        className="size-full object-cover rounded-2xl"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselDots />
              </Carousel>
            </div>
            <div className="flex-1">
              <div className="space-y-2">
                <p className="text-2xl">
                  Kami juga melakukan beberapa <strong>kegiatan</strong>{' '}
                  seperti:
                </p>
                <ul>
                  <li className="text-2xl">✔️ Pembelajaran</li>
                  <li className="text-2xl">✔️ TechTalk</li>
                  <li className="text-2xl">✔️ Vacation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full space-y-4">
          <h1 className="text-4xl text-protad-primary font-bold">Batch</h1>
          <div className="flex md:flex-row flex-col-reverse justify-center md:justify-between gap-6">
            <div className="flex-1">
              <div className="space-y-2">
                <p className="text-2xl">
                  <strong>Programming Tadulako</strong> memiliki beberapa{' '}
                  <strong>batch</strong> yaitu:
                </p>
                <ul>
                  <li className="text-2xl">✔️ Fiery Hidrogen (2019)</li>
                  <li className="text-2xl">✔️ Apollo (2020)</li>
                  <li className="text-2xl">✔️ Voyager (2021)</li>
                  <li className="text-2xl">✔️ Rover (2022)</li>
                  <li className="text-2xl">✔️ AstroSphere (2023)</li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <Carousel
                opts={{
                  loop: true
                }}
              >
                <CarouselContent>
                  {BatchItems.map(({ id, src, alt }) => (
                    <CarouselItem key={id}>
                      <Image
                        src={src}
                        alt={alt}
                        width={0}
                        height={0}
                        className="size-full object-cover rounded-2xl"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselDots />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProgram;
