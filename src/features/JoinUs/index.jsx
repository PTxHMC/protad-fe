'use client';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { postMember } from '@/services/members';
import { useState } from 'react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    last_experience: '',
    batch_id: 5,
    quotes: '',
    github_account: '',
    linkedin_account: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    try {
      const response = await postMember(formData);
      console.log(response);
      alert('success: Data anda disimpan');
      setFormData({
        name: '',
        email: '',
        last_experience: '',
        quotes: '',
        github_account: '',
        linkedin_account: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center gap-12">
        <h1 className="text-5xl font-bold text-protad-primary">
          Gabung Bersama Kami!
        </h1>
        <form
          className="flex flex-col items-center gap-4 w-8/12 bg-white p-12 rounded-2xl drop-shadow-xl"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="flex w-full gap-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="name"
                className="text-protad-primary font-semibold"
              >
                Nama
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-protad-primary rounded-lg w-full px-4 py-3"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="text-protad-primary font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-protad-primary rounded-lg w-full px-4 py-3"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="last-experience"
              className="text-protad-primary font-semibold"
            >
              Pengalaman Terakhir
            </label>
            <input
              type="text"
              name="last_experience"
              id="last-experience"
              className="border border-protad-primary rounded-lg w-full px-4 py-3"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="quotes"
              className="text-protad-primary font-semibold"
            >
              Quotes
            </label>
            <input
              type="text"
              name="quotes"
              id="quotes"
              className="border border-protad-primary rounded-lg w-full px-4 py-3"
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full gap-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="github"
                className="text-protad-primary font-semibold"
              >
                Akun Github
              </label>
              <input
                type="text"
                name="github_account"
                id="github"
                className="border border-protad-primary rounded-lg w-full px-4 py-3"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="linkedin"
                className="text-protad-primary font-semibold"
              >
                Akun LinkedIn
              </label>
              <input
                type="text"
                name="linkedin_account"
                id="linkedin"
                className="border border-protad-primary rounded-lg w-full px-4 py-3"
                onChange={handleChange}
              />
            </div>
          </div>
          <Button
            type="submit"
            size="lg"
            variant="outline"
            className="bg-protad-secondary rounded-lg text-protad-primary mt-4"
          >
            Join Us
          </Button>
        </form>
      </div>
    </>
  );
};

export default JoinUs;
