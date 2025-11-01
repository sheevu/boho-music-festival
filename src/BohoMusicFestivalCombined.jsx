import React from 'react';
import { motion } from 'framer-motion';
import {
  Music,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Instagram,
  Twitter,
  Youtube,
  Mail,
} from 'lucide-react';

const lineup = [
  {
    day: 'Day 1 · Sunrise Sessions',
    artists: ['Aurora Wilde', 'The Velvet Rivers', 'DJ Lumen'],
    description: 'Wake up with acoustic folk-pop, lo-fi electronica and sunrise meditation jams.'
  },
  {
    day: 'Day 2 · Desert Pulse',
    artists: ['Nomad Nova', 'Sahara Echoes', 'Moonlight Caravan'],
    description: 'A vibrant fusion of desert blues, indie rock, and future bass under the stars.'
  },
  {
    day: 'Day 3 · Cosmic Finale',
    artists: ['Bohemian Collective', 'Starlit Choir', 'DJ Astral Drift'],
    description: 'Immersive soundscapes, choral dream-pop, and a communal closing ceremony.'
  },
];

const experiences = [
  {
    icon: Sparkles,
    title: 'Wellness Oasis',
    copy: 'Sound bath journeys, breathwork domes, and moonlit yoga surrounded by desert flora.'
  },
  {
    icon: MapPin,
    title: 'Artisan Market',
    copy: 'Handcrafted jewelry, indigo dye workshops, and slow fashion pop-ups from local makers.'
  },
  {
    icon: Music,
    title: 'Secret Sets',
    copy: 'Intimate courtyard performances announced via lantern signals as the night unfolds.'
  },
];

const socials = [
  { icon: Instagram, label: '@boho.fest', href: 'https://instagram.com' },
  { icon: Twitter, label: '@bohofest', href: 'https://twitter.com' },
  { icon: Youtube, label: 'Boho Festival TV', href: 'https://youtube.com' },
  { icon: Mail, label: 'Join the newsletter', href: 'mailto:hello@bohofest.com' },
];

const heroImages = [
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1531310132431-636a0c912428?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
];

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

function BohoMusicFestivalCombined() {
  const heroImage = React.useMemo(
    () => heroImages[Math.floor(Math.random() * heroImages.length)],
    []
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 lg:px-10 lg:py-24">
        <motion.section
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/60 via-slate-900/80 to-indigo-900/60 p-10 shadow-xl"
          initial="hidden"
          animate="visible"
        >
          <motion.div className="max-w-2xl space-y-6" variants={heroVariants} custom={0}>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-purple-200">
              <Sparkles className="size-4" />
              6 · 8 September · Sonoran Desert
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Boho Music Festival 2024
            </h1>
            <p className="text-lg text-slate-200">
              Drift into a weekend of soul-soothing beats, immersive art, and desert night magic. Gather with fellow free spirits for sunrise meditations, twilight performances, and secret after-hours lounges.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-300/50 bg-purple-300/10 px-4 py-2">
                <Calendar className="size-4" />
                3 Days · 25+ Artists · 4 Stages
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-300/5 px-4 py-2">
                <Clock className="size-4" />
                Sunset ceremonies nightly
              </span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <motion.a
                href="#tickets"
                className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5 hover:bg-purple-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Reserve passes
              </motion.a>
              <motion.a
                href="#lineup"
                className="rounded-full border border-white/40 px-6 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore lineup
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-6 rounded-3xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 backdrop-blur-sm" />
            <div
              aria-hidden
              className="absolute inset-10 rounded-2xl bg-cover bg-center shadow-2xl"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
          </motion.div>
        </motion.section>

        <section id="lineup" className="grid gap-8 lg:grid-cols-3">
          {lineup.map((slot) => (
            <motion.article
              key={slot.day}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-8 shadow-lg shadow-purple-500/5"
              initial={heroVariants.hidden}
              whileInView={heroVariants.visible(0)}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-200">
                {slot.day}
              </p>
              <h2 className="text-xl font-bold text-white">{slot.artists[0]}</h2>
              <ul className="space-y-1 text-sm text-slate-200">
                {slot.artists.slice(1).map((artist) => (
                  <li key={artist} className="flex items-center gap-2">
                    <Music className="size-4 text-purple-300" />
                    {artist}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-300">{slot.description}</p>
            </motion.article>
          ))}
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/70 p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Immersive experiences</h2>
            <p className="text-base text-slate-300">
              Beyond the stages you will find ethereal lounges, scent labs, and interactive art installations curated by desert creatives. Craft your own keepsakes, learn new rituals, and connect with fellow travelers.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {experiences.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <Icon className="mb-3 size-6 text-purple-200" />
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/20 via-indigo-500/10 to-transparent p-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-200">Stay in the loop</p>
              <h3 className="text-2xl font-bold text-white">Follow the signals</h3>
              <p className="text-sm text-slate-200">
                RSVP for intimate workshops and pop-up ceremonies announced the day of.
              </p>
            </div>
            <ul className="space-y-3 text-sm font-medium text-slate-100">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/40 hover:bg-white/10"
                  >
                    <Icon className="size-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="rounded-3xl border border-white/10 bg-slate-900/80 px-8 py-6 text-sm text-slate-300 md:flex md:items-center md:justify-between">
          <div className="flex items-center gap-2 font-semibold text-white">
            <Music className="size-5 text-purple-200" />
            Boho Music Festival
          </div>
          <p className="mt-4 md:mt-0">
            Crafted for dreamers of rhythm · 2024. Desert winds powered.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default BohoMusicFestivalCombined;
