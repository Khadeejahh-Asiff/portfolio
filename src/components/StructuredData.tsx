import { CONTACT_INFO, PERSONAL_INFO, ABOUT } from '@/constants';

export const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.title,
    description: ABOUT.paragraphs.join(' '),
    url: 'https://khadeeja-portfolio.vercel.app',
    sameAs: [CONTACT_INFO.linkedin, CONTACT_INFO.github],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'Pakistan',
    },
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
    knowsAbout: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'MERN Stack',
      'Web Development',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Engineer',
      occupationLocation: {
        '@type': 'Country',
        name: 'Pakistan',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
