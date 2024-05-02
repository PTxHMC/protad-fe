import BackgroundMembers from '@/components/BackgroundMembers';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MembersCard from './components/MembersCard';

const MembersPage = () => {
  return (
    <div>
      <Navbar
        textColor="text-protad-primary"
        buttonBg="bg-transparent"
        theme="dark"
      />
      <BackgroundMembers />
      <div className="container flex justify-center items-center md:px-24 pt-36">
        <Card className="w-full h-full rounded-3xl shadow-md overflow-y-scroll">
          <div className="grid md:grid-cols-4 text-protad-primary">
            <div className="flex flex-col items-center gap-4">
              <CardHeader>
                <CardTitle>Batch Fiery Hydrogen</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <MembersCard targetBatch={1} />
              </CardContent>
            </div>
            <div className="flex flex-col items-center gap-4">
              <CardHeader>
                <CardTitle>Batch Apollo</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <MembersCard targetBatch={2} />
              </CardContent>
            </div>
            <div className="flex flex-col items-center gap-4">
              <CardHeader>
                <CardTitle>Batch Voyager</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <MembersCard targetBatch={3} />
              </CardContent>
            </div>
            <div className="flex flex-col items-center gap-4">
              <CardHeader>
                <CardTitle>Batch Rover</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <MembersCard targetBatch={4} />
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MembersPage;
