/**
 * MODEL: site owner profile
 * Single source of truth for identity + contact links.
 * Update values here and the whole portfolio reflects them.
 */
export const profile = {
  name: 'Umair Khan',
  role: 'MERN Stack Developer',
  email: 'uk685994@gmail.com',
  location: 'Rawalpindi, PK',
  github: 'https://github.com/123umair',
  // TODO: add your LinkedIn URL here to show the LinkedIn icon in Profiles card
  linkedin: null as string | null,
  avatar: '/umair.jpg',
  headline: 'MERN Stack Developer',
  tagline:
    'I enjoy turning complex ideas into fast, scalable web applications with clean architecture and intuitive user experiences.',
};

export const mailtoLink = `mailto:${profile.email}`;
