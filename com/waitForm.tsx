import React, {useState} from "react";
import {useRouter} from "next/router";

const WaitForm = () => {
  const [unicode, setUnicode] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const router = useRouter();

  interface FormData {
    unicode: string;
    email: string;
  }
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous error


    try {
      const response = await fetch('/api/join', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({ unicode, email}),
      });

      if (response.ok) {
          console.log('Sent');
          router.push('/log');
      } else {
          const errorData = await response.json(); 
          setError(errorData?.message || response.statusText);
          console.error('Error:', errorData?.message || response.statusText);
      }
    } catch (error) {
      console.error('Error:', error); // Log the actual error
    } finally {
      setIsLoading(false); // Set loading state to false after the request finishes
    }
};

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
      <input
        type="text"
        name="unicode"
        placeholder="ID"
        maxLength={9}
        value={unicode}
        onChange={(event) => setUnicode(event.target.value)} 
        className="block invert text-black focus:text-black mb-2 p-4 rounded-md w-full"
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Correo"
        onChange={(event) => setEmail(event.target.value)} 
        className="block invert text-black mb-2 p-4 rounded-md w-full"
      />
      <input type="submit" value="SUSCRIBIRME" className="block text-black mb-2 p-4 rounded-md border-2 border-black bg-transparent hover:bg-black hover:text-white w-full cursor-pointer"/>
    </form>
  );
};

export default WaitForm;
