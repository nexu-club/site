import React from 'react';
import Link from 'next/link';

function Privacidad() {
    return (
        <div className='p-24 mx-auto'>
            <div className='text-right'>
                <Link href="/uso" className='font-bold hover:bg-black hover:text-white p-2 rounded-md'>░ Términos de Uso</Link>&nbsp;<Link href="/" className='font-bold hover:bg-black hover:text-white p-2 rounded-md'>░ Inicio</Link>
            </div>
            <br></br>
            <h1 className='text-lg'>Política de Privacidad de METAUNI</h1>
            <br></br>
            <i>Última actualización: [Noviembre 2023]</i>
            <br></br>
            <p>Bienvenido a METAUNI. La privacidad de nuestros usuarios es de suma importancia para nosotros. Esta Política de Privacidad describe cómo recopilamos, utilizamos, compartimos y protegemos la información personal de los usuarios de METAUNI. Al acceder o utilizar nuestros servicios en metauni.club, aceptas las prácticas descritas en esta política.</p>
            <br></br>
            <h2>1. Información Recopilada:</h2>

            <p>1.1 Código UNI: Al registrarte en METAUNI, solicitamos tu código UNI para verificar tu afiliación a la Universidad Nacional de Ingeniería (UNI).</p>

            <p>1.2 Información de Perfil: Puedes optar por proporcionar información adicional en tu perfil, como tu nombre, fotografía y detalles académicos.</p>

            <p>1.3 Datos de Uso: Recopilamos datos sobre tu interacción con METAUNI, como la frecuencia de acceso, la duración de la sesión y las funciones utilizadas.</p>

            <h2>2. Uso de la Información:</h2>

            <p>2.1 Verificación de Afiliación: Utilizamos el código UNI para verificar la afiliación a la UNI y garantizar el acceso exclusivo a la comunidad METAUNI.</p>

            <p>2.2 Mejora de Servicios: Analizamos los datos de uso para mejorar la funcionalidad y la experiencia del usuario en METAUNI.</p>

            <p>2.3 Comunicación: Podemos utilizar tu dirección de correo electrónico para enviarte información relevante sobre METAUNI, actualizaciones y anuncios importantes.</p>

            <h2>3. Compartir Información:</h2>

            <p>3.1 Con Consentimiento: Compartiremos información personal solo con tu consentimiento.</p>

            <p>3.2 Cumplimiento Legal: Podemos divulgar información si es requerida por ley o en respuesta a procesos legales.</p>

            <p>4. Seguridad de la Información:</p>

            <h2>4.1 Protección: Implementamos medidas de seguridad para proteger la información contra accesos no autorizados o divulgación.</h2>

            <p>4.2 Acceso Restringido: Limitamos el acceso a la información personal a empleados y colaboradores autorizados.</p>

            <h2>5. Modificaciones en la Política de Privacidad:</h2>

            <p>5.1 Actualizaciones: Podemos realizar cambios en esta política y notificaremos cualquier modificación significativa.</p>

            <h2>6. Preguntas y Contacto:</h2>

            <p>6.1 Consultas: Si tienes preguntas sobre esta Política de Privacidad, contáctanos en <Link href="mailto:ola@metauni.club" className='font-bold underline'>ola@metauni.club</Link>.</p>

            <p>Gracias por confiar en METAUNI. Tu privacidad es fundamental, y nos comprometemos a protegerla mientras te brindamos una experiencia educativa única y personalizada.</p>
<br></br>
            <Link href="/" className='block bg-black text-white font-bold p-4 border-black rounded mt-8'>░ Suscribirme</Link>
        </div>
    );
}

export default Privacidad;