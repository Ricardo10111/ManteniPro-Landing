import PriceCard from '/components/PriceCard'
import { Source_Sans_3 } from 'next/font/google'
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export default function PriceSection() {
  const cardDetails = [
    {
      title: 'Básico',
      price: '100',
      description:
        'Ideal para pequeñas empresas o proyectos que están comenzando.',
      btnTxt: '¡Agenda tu Demo!',
      icon: 'check-icon-dark.png',
      featureTitle: 'Incluye Básico:',
      features: [
        {
          title: 'Gestión de Incidencias Limitada:',
          desc: 'Maneja hasta 10 incidencias al mes.'
        },
        {
          title: 'Soporte por Email:',
          desc: 'Respuesta en 48 a 72 horas.'
        },
        {
          title: 'Historial de Incidencias:',
          desc: 'Accede a las incidencias de los últimos 30 días.'
        },
        {
          title: '1 Administrador:',
          desc: 'Un usuario con permisos para gestionar el sistema.'
        }
      ]
    },

    {
      title: 'Avanzado',
      price: '500',
      description:
        'Perfecto para equipos que necesitan más capacidad y características avanzadas.',
      btnTxt: '¡Agenda tu Demo!',
      icon: 'check-icon-light.png',
      featureTitle: 'Todo lo Básico, además de:',
      features: [
        {
          title: 'Manejo Ampliado de Incidencias:',
          desc: 'Gestiona hasta 100 incidencias al mes.'
        },
        {
          title: 'Soporte Prioritario por Email:',
          desc: 'Respuesta en 24 a 48 horas.'
        },
        {
          title: 'Historial de Incidencias Extendido: ',
          desc: 'Accede al historial de incidencias de hasta 6 meses.'
        },
        {
          title: '2 Administradores:',
          desc: 'Agrega un segundo administrador para compartir responsabilidades en la gestión.'
        }
      ]
    }
  ]

  return (
    <section className='mx-auto max-w-screen-2xl px-4 py-16'>
      <h2 className='mb-6 text-center text-4xl font-medium'>
        ¡Conoce Mantenipro hoy mismo!
      </h2>
      <p
        className={`m-auto mb-12 max-w-screen-lg text-center text-2xl text-gray-600 ${sourceSans3.className}`}
      >
        Con Mantenipro, puedes empezar con una prueba gratuita de 30 días para
        explorar todas las funciones y decidir si se ajusta a tus necesidades.
      </p>
      {/* Cards */}
      <div className='flex flex-col flex-wrap items-center justify-center gap-16 lg:flex-row lg:items-stretch'>
        {cardDetails.map((card, index) => (
          <PriceCard
            key={index}
            title={card.title}
            price={card.price}
            description={card.description}
            btnTxt={card.btnTxt}
            icon={card.icon}
            featureTitle={card.featureTitle}
            features={card.features}
          />
        ))}
      </div>
    </section>
  )
}
