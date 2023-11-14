"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sql } from "@vercel/postgres";

export default function Home() {

  const [uniCode, setUniCode] = useState('');

  const handleInputChange = (e:any) => {
    const uppercaseValue = e.target.value.toUpperCase();
    setUniCode(uppercaseValue);
  };

  // Create a function to insert the form data into the database.
  async function insertFormData(uniCode: string, email: string) {
    // Connect to the Vercel Postgres database.
    const { rows } = await sql`INSERT INTO my_table (uni_code, email) VALUES (${uniCode}, ${email})`;
  }

  // Call the function when the form is submitted.
  const handleSubmitForm = async (e:any) => {
    e.preventDefault();

    // Get the form data.
    const uniCode = e.target.uniCode.value;
    const email = e.target.email.value;

    // Insert the form data into the database.
    await insertFormData(uniCode, email);

    // Clear the form.
    e.target.uniCode.value = '';
    e.target.email.value = '';

    // Display a success message.
    alert('Your subscription has been submitted successfully!');
  };

  return (
    <main className="flex flex-col items-center p-24 mx-auto h-full">
      <title>metauni</title>
      <Image src="/metauni.svg" height="72" width="180" alt="metauni-logo" className="invert items-center m-12" />
      <form onSubmit={handleSubmitForm} className="mx-auto">
        <input
          type="text"
          placeholder="C0D1G0UNI"
          maxLength={9}
          value={uniCode}
          onChange={handleInputChange}
          className="block text-black mb-2 p-4 rounded-md w-full"
        />
        <input
          type="email"
          placeholder="correo@electroni.co"
          className="block text-black mb-2 p-4 rounded-md w-full"
        />
        <button type="submit" className="block text-white mb-2 p-4 rounded-md border-2 border-white bg-transparent w-full hover:bg-white hover:text-black">
          SUSCRIBIRME
        </button>
        <span className="text-sm m-2 text-white">
          • Aplican <Link href="/uso" className='font-bold'>Términos de Uso</Link> y <Link href="/privacidad" className='font-bold'>Privacidad</Link>
        </span>
      </form>
    </main>
  );
}
