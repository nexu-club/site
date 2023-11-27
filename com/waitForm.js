import React, {useState} from "react";
import {useRouter} from "next/router";
import { sql } from "@vercel/postgres";

const WaitForm = () => {
  const [unicode, setUnicode] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      // Obtiene los datos del formulario
      const unicode = setUnicode();
      const email = setEmail();

      // Crea una conexión a PostgreSQL
      const client = await sql.connect();

      // Inserta los datos del formulario en la tabla
      await client.query(
      `INSERT INTO metausers (unicode, email) VALUES ($1, $2)`,
      [unicode, email]);
      
      connection.release();
    
    } catch (error) {
      console.error('Error inserting form data:', error);
      router.push('/'); // Redirect to the home page if there is an error
    }
  };
  return (
    <form action="/submit" method="POST" onSubmit={onSubmit} className="flex flex-col items-center justify-center">
      <input
        type="text"
        name="unicode"
        placeholder="Código UNI"
        maxLength={9}
        value={unicode}
        onChange={(event) => setUnicode(event.target.value)} 
        className="block invert text-black focus:text-black mb-2 p-4 rounded-md w-full "
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="correo@uni.pe"
        onChange={(event) => setEmail(event.target.value)} 
        className="block invert text-black mb-2 p-4 rounded-md w-full"
      />
      <input type="submit" value="SUSCRIBIRME" className="block text-black mb-2 p-4 rounded-md border-2 border-black bg-white w-full cursor-pointer"/>
    </form>
  );
};

export default WaitForm;
