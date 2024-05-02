'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getMembers } from '@/services/members';
import React, { useEffect, useState } from 'react';

const MembersCard = ({ targetBatch }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const membersData = await getMembers();
        const filteredMembers = membersData?.members?.data.filter(
          member => member.batch_id === targetBatch
        );
        setMembers(filteredMembers);
      } catch (error) {
        console.error('Gagal memuat data anggota', error);
      }
    };

    fetchData();
  }, [targetBatch]);

  const batchNames = {
    1: 'Batch Fiery Hydrogen',
    2: 'Batch Apollo',
    3: 'Batch Voyager',
    4: 'Batch Rover'
  };

  return (
    <>
      {members.map(member => (
        <div key={member.id} className="text-center md:text-start">
          <h1 className="text-sm font-bold text-protad-primary">
            {member.name}
          </h1>
          <p className="text-xs">{batchNames[member.batch_id]}</p>
        </div>
      ))}
    </>
  );
};

export default MembersCard;
