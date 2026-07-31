import type { CourseModule } from '@/types/entities'

// Dados mockados da Academia. Nesta V1 não há banco de dados —
// toda a estrutura já está pronta para, no futuro, vir de uma API
// (ver services/contentService.ts).

export const courseModules: CourseModule[] = [
  {
    id: 'mod-01',
    title: 'La Oportunidad',
    shortDescription: 'Descubrí por qué el lanzamiento de GTA 6 representa una de las mayores oportunidades para los creadores de contenido de los últimos años.',
    coverImage: '/covers/module-01.webp',
    lessonsCount: 2,
    estimatedMinutes: 52,
    order: 1,
    lessons: [
      {
        id: 'mod-01-aula-01',
        moduleId: 'mod-01',
        title: 'Por qué GTA 6 es la mayor oportunidad de contenido de la década',
        description:
          'Entendé el contexto del lanzamiento, el tamaño de la audiencia esperada y la oportunidad que se abre para los creadores.',
        videoPlaceholder: false,
        videoUrl: '/videos/mod-01-aula-01.mp4',
        pdfUrl: '/pdfs/mod-01-aula-01.pdf',
        materials: [{ id: 'mat-1', label: 'GTA-6-es-una-oportunidad-historica', url: '/pdfs/mod-01-aula-01.pdf' }],
        durationMinutes: 12,
        order: 1,
      },
      {
        id: 'mod-01-aula-02',
        moduleId: 'mod-01',
        title: 'El método de los 3 ganchos',
        description: 'Cómo captar la atención en los primeros 3 segundos de cualquier video corto.',
        videoPlaceholder: false,
        videoUrl: '/videos/mod-01-aula-02.mp4',
        materials: [],
        durationMinutes: 13,
        order: 1,
      },
    ],
  },
  {
    id: 'mod-02',
    title: 'Elegí el camino correcto para GTA 6',
    shortDescription: 'Aprendé a crear una estrategia sólida desde el principio, elegir tu nicho, definir las mejores plataformas y organizar tu contenido.',
    coverImage: '/covers/module-02.webp',
    lessonsCount: 1,
    estimatedMinutes: 41,
    order: 2,
    lessons: [
      {
        id: 'mod-02-aula-01',
        moduleId: 'mod-02',
        title: 'El método de los 3 ganchos',
        description: 'Cómo captar la atención durante los primeros 3 segundos de cualquier video corto.',
        videoPlaceholder: false,
        videoUrl: '/videos/mod-02-aula-01.mp4',
        pdfUrl: '/pdfs/mod-02-aula-01.pdf',
       materials: [
  {
    id: 'mod-02-pdf',
    label: 'Eligiendo-el-Camino-Correcto-en-el-lanzamiento-de-GTA-6.',
    url: '/pdfs/mod-02-aula-01.pdf',
  },
],
        durationMinutes: 13,
        order: 1,
      },
    ],
  },
  {
    id: 'mod-03',
    title: 'Aprendé a impulsar tu contenido',
    shortDescription:  'Aprendé a hacer que tus videos lleguen a más personas aprovechando las plataformas, las tendencias, la retención y la constancia.',
    coverImage: '/covers/module-03.webp',
    lessonsCount: 1,
    estimatedMinutes: 38,
    order: 3,
    lessons: [
      {
        id: 'mod-03-aula-01',
        moduleId: 'mod-03',
        title: 'Caminos de monetización para creadores de contenido',
        description: 'Descubrí diferentes formas de generar ingresos creando contenido dentro del nicho de GTA.',
        videoPlaceholder: false,
        videoUrl: '/videos/mod-03-aula-01.mp4',
        pdfUrl: '/pdfs/mod-03-aula-01.pdf',
       materials: [
  {
    id: 'mod-03-pdf',
    label: 'Divulgacion-que-Convierte.',
    url: '/pdfs/mod-03-aula-01.pdf',
  },
],
        durationMinutes: 12,
        order: 1,
      },
     
    ],
  },{
  id: 'mod-04',

  title: 'Monetización',

  shortDescription:
    'Aprendé a monetizar tu contenido y convertir tu audiencia en una fuente de ingresos.',

  coverImage: '/covers/module-04.webp',

  lessonsCount: 1,

  estimatedMinutes: 40,

  order: 4,

  lessons: [
    {
      id: 'mod-04-aula-01',

      moduleId: 'mod-04',

      title: 'Aprendé a monetizar tu contenido',

      description:
        'Descubrí las principales formas de monetización: ingresos de las plataformas, afiliados, productos digitales, colaboraciones y mucho más.',

      videoPlaceholder: false,

      videoUrl: '/videos/mod-04-aula-01.mp4',

      pdfUrl: '/pdfs/mod-04-aula-01.pdf',

      materials: [
        {
          id: 'mod-04-pdf',

          label: 'Monetizacion-en-la-practica',

          url: '/pdfs/mod-04-aula-01.pdf',
        },
      ],

      durationMinutes: 40,

      order: 1,
    },
  ],
},{
  id: 'mod-05',

  title: 'Bonus exclusivos',

  shortDescription:
    'Materiales exclusivos para llevar tu contenido al siguiente nivel.',

  coverImage: '/covers/module-05.webp',

  lessonsCount: 1,

  estimatedMinutes: 0,

  order: 5,

  lessons: [
    {
      id: 'mod-05-aula-01',

      moduleId: 'mod-05',

      title: 'Bonus para vos',

      description:
        'Accedé a herramientas gratuitas, ideas para videos y guiones listos para acelerar tu creación de contenido.',

      videoPlaceholder: true,

pdfUrl: '/pdfs/mod-05-aula-01.pdf',

materials: [
  {
    id: 'mod-05-pdf',
    label: 'Acabas-de-desbloquear-el-arsenal-secreto-de-los-creadores-de-elite bonus.',
    url: '/pdfs/mod-05-aula-01.pdf',
  },
],

durationMinutes: 0,
order: 1,
    },
  ],
},
]

