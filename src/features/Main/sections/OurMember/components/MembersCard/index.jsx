import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAssetUrl } from '@/lib/utils';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const MembersCard = ({ batch, name, experience, quotes, github, linkedin }) => {
  return (
    <Card className="rounded-3xl shadow-md">
      <CardHeader>
        <CardTitle className="space-y-4">
          <Image
            src={getAssetUrl(`/holderAvatar.svg`)}
            width={0}
            height={0}
            className="size-12 md:size-24 object-cover mx-auto"
            alt="Batch"
          />
          <Image
            src={getAssetUrl(`/hashtag${batch}.svg`)}
            width={0}
            height={0}
            className="size-full object-cover"
            alt="Hasthtag Batch"
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-protad-primary text-center">
        <div>
          <h1 className="text-lg md:text-2xl font-bold">{name}</h1>
          <p className="text-sm md:text-base">{experience}</p>
        </div>
        <div>
          <p className="text-sm md:text-base">{quotes}</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link href={github}>
            <GitHubLogoIcon className="size-12 text-protad-primary p-3 rounded-full bg-protad-secondary" />
          </Link>
          <Link href={linkedin}>
            <LinkedInLogoIcon className="size-12 text-protad-primary p-3 rounded-full bg-protad-secondary" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default MembersCard;
