import React from 'react';
import Link from 'next/link';

function Uso() {
    return (
        <div className='p-24 mx-auto'>
            <div className='text-right'>
                <Link href="/privacidad" className='font-bold hover:bg-black hover:text-white p-2 rounded-md'>░ Política de Privacidad</Link>&nbsp;<Link href="/" className='font-bold hover:bg-black hover:text-white p-2 rounded-md'>░ Inicio</Link>
            </div>
            <br></br>
            <h1 className='pt-8 text-lg'>Términos de Uso de METAUNI</h1>
            <br></br>
            <p>Bienvenido a METAUNI. Te agradecemos por ser parte de nuestra comunidad. Antes de utilizar nuestros servicios en <Link href="https://metauni.club" className='font-bold'>metauni.club</Link>, por favor, asegúrate de leer y comprender nuestros Términos de Uso. Al acceder o utilizar nuestro sitio, aceptas estar sujeto a estos términos y condiciones.</p>
            <br></br>
            <h2>1. Uso inclusivo:</h2>
            <p>- METAUNI está abierto a cualquier persona interesada en la tecnología blockchain y la Web3. Como parte de nuestra política de uso, nos comprometemos a mantener un entorno inclusivo y accesible para todos los miembros de la comunidad. </p>
            <br></br>
            <h2>2. Suplantación de Identidad:</h2>
            <p>- Queda terminantemente prohibida la suplantación de identidad. Cualquier intento de utilizar un código UNI que no pertenezca al usuario resultará en la inmediata retirada del acceso a METAUNI.</p>
            <br></br>
            <h2>3. Integridad de la Información:</h2>
            <p>- Los usuarios son responsables de mantener la confidencialidad de su código METAUNI y cualquier información asociada. No compartas tu código METAUNI ni permitas que otros lo utilicen en METAUNI.</p>
            <br></br>
            <h2>4. Conducta Responsable:</h2>
            <p>- Se espera que todos los usuarios de METAUNI actúen de manera respetuosa y ética. El uso del sitio debe cumplir con las normas y regulaciones establecidas por la UNI y la legislación aplicable.</p>
            <br></br>
            <h2>5. Contenido y Propiedad Intelectual:</h2>
            <p>- Los usuarios son responsables del contenido que comparten en METAUNI. Se prohíbe la publicación de material ofensivo, difamatorio o que viole derechos de propiedad intelectual. METAUNI se reserva el derecho de eliminar cualquier contenido que considere inapropiado.</p>
            <br></br>
            <h2>6. Modificaciones y Actualizaciones:</h2>
            <p>- METAUNI se reserva el derecho de modificar estos Términos de Uso en cualquier momento. Los cambios entrarán en vigencia tan pronto como se publiquen en el sitio. Se recomienda revisar regularmente los términos para estar informado sobre cualquier actualización.</p>
            <br></br>
            <p>Al <Link href="/" className='font-bold underline'>suscribirse a METAUNI</Link>, confirmas que has leído, comprendido y aceptado estos Términos de Uso. El incumplimiento de estas condiciones puede resultar en la suspensión o retiro permanente del acceso a METAUNI. ¡Gracias por ser parte de nuestra comunidad en metauni.club!</p>
            <Link href="/" className='block bg-black text-white font-bold p-4 border-black rounded mt-8'>░ Suscribirme</Link>
        </div>
    );
}

export default Uso;