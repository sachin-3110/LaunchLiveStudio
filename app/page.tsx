'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronRight, Menu, X, Star, Zap, TrendingUp, Users, Globe2, ArrowUpRight } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { StatCounter } from '@/components/stat-counter'
import { WhatsAppFloat } from '@/components/whatsapp-float'

const translations = {
  en: {
    nav: {
      creators: 'For Creators',
      brands: 'For Brands',
    },
    hero: {
      badge: 'Trusted by 20K+ Creators',
      creatorsTitle: 'Creator growth is our mission.',
      creatorsSubtitle: 'Curious Media provides the perfect mix of strategic partnerships, revenue opportunities, and brand collaborations. It\'s how we drive proven, measurable growth for the world\'s best creators.',
      cta: 'Get in touch',
      learn: 'Learn more',
      brandsTitle: 'Powering authentic connections with top creators.',
      brandsSubtitle: 'Creators are redefining content creation for today\'s audiences. We connect brands with innovative creators, unlocking premium partnerships, engaged communities, and real business impact.',
      explore: 'Explore now',
    },
    stats: {
      metrics: [
        { value: '20K', suffix: '+', label: 'Creators', highlight: false },
        { value: '1.5B', suffix: '+', label: 'Total Monthly Reach', highlight: true, footnote: 'Powerful audience connections' },
        { value: '150', suffix: '%', label: 'Stronger Community', highlight: false, footnote: 'Community connection vs average' },
      ],
    },
    creators: {
      title: 'Meet creators we work with',
      seeMore: 'View all creators',
    },
    features: {
      title: 'Why top brands choose us',
      items: [
        { icon: '⚡', title: 'Lightning Fast Matching', desc: 'AI-powered creator discovery that finds your perfect match in minutes, not months.' },
        { icon: '📊', title: 'Deep Analytics', desc: 'Real-time performance dashboards with insights that actually drive decisions.' },
        { icon: '🤝', title: 'Managed Partnerships', desc: 'Full-service campaign management from briefing to reporting.' },
        { icon: '🌍', title: 'Global Reach', desc: 'Access creators across 150+ countries with multilingual campaign support.' },
      ],
    },
    news: {
      title: 'Featured news & stories',
      items: [
        { title: 'New Series Launch: Curious Media Partners with Top Creators', date: '2024', tag: 'Launch' },
        { title: '9 in 10 viewers trust authentic creator partnerships', date: '2024', tag: 'Research' },
        { title: 'Creator Economy Reaches New Heights with Strategic Collaborations', date: '2024', tag: 'Industry' },
        { title: 'Brands See 3x Higher Engagement with Curious Media Creators', date: '2024', tag: 'Results' },
        { title: 'Curious Media Invests in Creator Success Programs', date: '2024', tag: 'Company' },
        { title: 'AI Tools Help Creators Reach 40% More Audience', date: '2024', tag: 'Tech' },
      ],
    },
    footer: {
      tagline: 'Building the future of creator economy.',
      copyright: '©2024 Curious Media, Inc. All rights reserved.',
      links: ['Platform terms', 'Acceptable use', 'Terms of service', 'Privacy policy', 'Cookie settings', 'DMCA policy'],
    },
  },
  hi: {
    nav: { creators: 'रचनाकारों के लिए', brands: 'ब्रांड्स के लिए' },
    hero: {
      badge: '20K+ रचनाकारों द्वारा विश्वसनीय',
      creatorsTitle: 'रचनाकार विकास हमारा मिशन है।',
      creatorsSubtitle: 'Curious Media रणनीतिक साझेदारी, राजस्व के अवसर और ब्रांड सहयोग का सही मिश्रण प्रदान करता है।',
      cta: 'संपर्क में रहें', learn: 'अधिक जानें',
      brandsTitle: 'शीर्ष रचनाकारों के साथ प्रामाणिक कनेक्शन।',
      brandsSubtitle: 'रचनाकार आज के दर्शकों के लिए सामग्री निर्माण को फिर से परिभाषित कर रहे हैं।',
      explore: 'अभी देखें',
    },
    stats: {
      metrics: [
        { value: '20K', suffix: '+', label: 'रचनाकार', highlight: false },
        { value: '1.5B', suffix: '+', label: 'कुल मासिक पहुंच', highlight: true, footnote: 'शक्तिशाली दर्शक कनेक्शन' },
        { value: '150', suffix: '%', label: 'मजबूत सामुदायिक', highlight: false, footnote: 'औसत की तुलना में' },
      ],
    },
    creators: { title: 'हम जिन रचनाकारों के साथ काम करते हैं', seeMore: 'सभी रचनाकारों को देखें' },
    features: {
      title: 'शीर्ष ब्रांड हमें क्यों चुनते हैं',
      items: [
        { icon: '⚡', title: 'तेज़ मिलान', desc: 'AI-संचालित रचनाकार खोज।' },
        { icon: '📊', title: 'गहन विश्लेषण', desc: 'रीयल-टाइम प्रदर्शन डैशबोर्ड।' },
        { icon: '🤝', title: 'प्रबंधित साझेदारी', desc: 'पूर्ण-सेवा अभियान प्रबंधन।' },
        { icon: '🌍', title: 'वैश्विक पहुंच', desc: '150+ देशों में रचनाकार।' },
      ],
    },
    news: {
      title: 'फीचर समाचार और कहानियां',
      items: [
        { title: 'नई श्रृंखला: Curious Media शीर्ष रचनाकारों के साथ भागीदारी', date: '2024', tag: 'लॉन्च' },
        { title: '9 में से 10 दर्शक प्रामाणिक साझेदारी पर विश्वास करते हैं', date: '2024', tag: 'शोध' },
        { title: 'निर्माता अर्थव्यवस्था नई ऊंचाई पर', date: '2024', tag: 'उद्योग' },
        { title: 'ब्रांड्स को 3x अधिक एनगेजमेंट', date: '2024', tag: 'परिणाम' },
        { title: 'Curious Media रचनाकार सफलता कार्यक्रमों में निवेश', date: '2024', tag: 'कंपनी' },
        { title: 'AI उपकरण रचनाकारों को 40% अधिक दर्शकों तक', date: '2024', tag: 'तकनीक' },
      ],
    },
    footer: {
      tagline: 'क्रिएटर इकॉनमी का भविष्य बना रहे हैं।',
      copyright: '©2024 Curious Media, Inc. सर्वाधिकार सुरक्षित।',
      links: ['मंच शर्तें', 'स्वीकार्य उपयोग', 'सेवा की शर्तें', 'गोपनीयता नीति', 'कुकी सेटिंग्स', 'DMCA नीति'],
    },
  },
  es: {
    nav: { creators: 'Para Creadores', brands: 'Para Marcas' },
    hero: {
      badge: 'Confiado por 20K+ Creadores',
      creatorsTitle: 'El crecimiento de creadores es nuestra misión.',
      creatorsSubtitle: 'Curious Media proporciona la mezcla perfecta de asociaciones estratégicas, oportunidades de ingresos y colaboraciones.',
      cta: 'Ponte en contacto', learn: 'Saber más',
      brandsTitle: 'Potenciando conexiones auténticas.',
      brandsSubtitle: 'Conectamos marcas con creadores innovadores, desbloqueando asociaciones premium.',
      explore: 'Explorar ahora',
    },
    stats: {
      metrics: [
        { value: '20K', suffix: '+', label: 'Creadores', highlight: false },
        { value: '1.5B', suffix: '+', label: 'Alcance Mensual Total', highlight: true, footnote: 'Conexiones de audiencia poderosas' },
        { value: '150', suffix: '%', label: 'Comunidad Más Fuerte', highlight: false, footnote: 'Conexión vs promedio' },
      ],
    },
    creators: { title: 'Conoce a los creadores', seeMore: 'Ver todos' },
    features: {
      title: 'Por qué las marcas nos eligen',
      items: [
        { icon: '⚡', title: 'Búsqueda Rápida', desc: 'Descubrimiento de creadores con IA.' },
        { icon: '📊', title: 'Análisis Profundo', desc: 'Paneles en tiempo real.' },
        { icon: '🤝', title: 'Gestión Completa', desc: 'Gestión de campañas de extremo a extremo.' },
        { icon: '🌍', title: 'Alcance Global', desc: 'Creadores en 150+ países.' },
      ],
    },
    news: {
      title: 'Noticias destacadas',
      items: [
        { title: 'Lanzamiento: Curious Media con Creadores Principales', date: '2024', tag: 'Lanzamiento' },
        { title: '9 de cada 10 confían en creadores auténticos', date: '2024', tag: 'Datos' },
        { title: 'La Economía de Creadores Alcanza Nuevas Alturas', date: '2024', tag: 'Industria' },
        { title: 'Marcas con 3x Mayor Engagement', date: '2024', tag: 'Resultados' },
        { title: 'Inversión en Programas de Éxito', date: '2024', tag: 'Empresa' },
        { title: 'IA Ayuda a Creadores 40% Más', date: '2024', tag: 'Tech' },
      ],
    },
    footer: {
      tagline: 'Construyendo el futuro de la economía creadora.',
      copyright: '©2024 Curious Media, Inc. Todos los derechos reservados.',
      links: ['Términos', 'Uso aceptable', 'Servicio', 'Privacidad', 'Cookies', 'DMCA'],
    },
  },
  de: {
    nav: { creators: 'Für Creator', brands: 'Für Marken' },
    hero: {
      badge: 'Vertrauen von 20K+ Creatorn',
      creatorsTitle: 'Das Wachstum von Creatorn ist unsere Mission.',
      creatorsSubtitle: 'Curious Media bietet die perfekte Mischung aus strategischen Partnerschaften und Einnahmemöglichkeiten.',
      cta: 'Kontakt aufnehmen', learn: 'Mehr erfahren',
      brandsTitle: 'Authentische Verbindungen ermöglichen.',
      brandsSubtitle: 'Wir verbinden Marken mit innovativen Creatorn und erschließen Premium-Partnerschaften.',
      explore: 'Jetzt entdecken',
    },
    stats: {
      metrics: [
        { value: '20K', suffix: '+', label: 'Creator', highlight: false },
        { value: '1.5B', suffix: '+', label: 'Monatliche Reichweite', highlight: true, footnote: 'Starke Publikumsverbindungen' },
        { value: '150', suffix: '%', label: 'Stärkere Gemeinschaft', highlight: false, footnote: 'Verbindung vs. Durchschnitt' },
      ],
    },
    creators: { title: 'Creator, mit denen wir arbeiten', seeMore: 'Alle Creator anzeigen' },
    features: {
      title: 'Warum Top-Marken uns wählen',
      items: [
        { icon: '⚡', title: 'Blitzschnelles Matching', desc: 'KI-gestütztes Creator-Discovery.' },
        { icon: '📊', title: 'Tiefe Analysen', desc: 'Echtzeit-Performance-Dashboards.' },
        { icon: '🤝', title: 'Managed Partnerschaften', desc: 'Full-Service Kampagnenmanagement.' },
        { icon: '🌍', title: 'Globale Reichweite', desc: 'Creator in 150+ Ländern.' },
      ],
    },
    news: {
      title: 'Ausgewählte Nachrichten',
      items: [
        { title: 'Neue Serie: Curious Media Partnert mit Top-Creatorn', date: '2024', tag: 'Launch' },
        { title: '9 von 10 vertrauen Creator-Partnerschaften', date: '2024', tag: 'Forschung' },
        { title: 'Creator-Ökonomie auf neuem Höchststand', date: '2024', tag: 'Branche' },
        { title: 'Marken sehen 3x höheres Engagement', date: '2024', tag: 'Ergebnisse' },
        { title: 'Investition in Creator-Erfolgsprogramme', date: '2024', tag: 'Unternehmen' },
        { title: 'KI hilft Creatorn, 40% mehr zu erreichen', date: '2024', tag: 'Tech' },
      ],
    },
    footer: {
      tagline: 'Die Zukunft der Creator-Wirtschaft gestalten.',
      copyright: '©2024 Curious Media, Inc. Alle Rechte vorbehalten.',
      links: ['Plattformbedingungen', 'Nutzung', 'AGB', 'Datenschutz', 'Cookies', 'DMCA'],
    },
  },
}

const creatorData = [
  { name: 'Alex Rivera', cat: 'Tech', followers: '2.1M' },
  { name: 'Maya Chen', cat: 'Lifestyle', followers: '5.4M' },
  { name: 'Jordan Lee', cat: 'Gaming', followers: '1.8M' },
  { name: 'Sofia Patel', cat: 'Fashion', followers: '3.2M' },
  { name: 'Kai Thompson', cat: 'Food', followers: '900K' },
  { name: 'Luna Davis', cat: 'Fitness', followers: '1.5M' },
  { name: 'Felix Martin', cat: 'Travel', followers: '2.7M' },
  { name: 'Zara Kim', cat: 'Beauty', followers: '4.1M' },
  { name: 'Noah Brown', cat: 'Music', followers: '3.8M' },
  { name: 'Eva Wilson', cat: 'DIY', followers: '1.2M' },
]

const categoryColors: Record<string, string> = {
  Tech: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
  Lifestyle: 'from-pink-500/20 to-rose-500/20 border-pink-500/30',
  Gaming: 'from-purple-500/20 to-violet-500/20 border-purple-500/30',
  Fashion: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
  Food: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
  Fitness: 'from-red-500/20 to-orange-500/20 border-red-500/30',
  Travel: 'from-teal-500/20 to-cyan-500/20 border-teal-500/30',
  Beauty: 'from-fuchsia-500/20 to-pink-500/20 border-fuchsia-500/30',
  Music: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30',
  DIY: 'from-yellow-500/20 to-lime-500/20 border-yellow-500/30',
}

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'hi' | 'es' | 'de'>('en')
  const [activeTab, setActiveTab] = useState<'creators' | 'brands'>('creators')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[language]

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: 'rgb(8,8,20)' }}>

      {/* ── Ambient background orbs ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute top-[10%] right-[-15%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[20%] left-[30%] w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      {/* ── Navigation ── */}
      <nav className="fixed w-full z-50 transition-smooth" style={{
        background: 'rgba(8,8,20,0.8)',
        backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(99,102,241,0.15)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"
                  style={{ background: 'rgba(99,102,241,0.3)', filter: 'blur(8px)' }} />
                <Image src="/logo.png" alt="Curious Media" width={36} height={36} className="h-9 w-auto relative z-10" />
              </div>
              <span className="font-bold text-white text-lg hidden sm:block tracking-tight">Curious Media</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-full"
              style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)' }}>
              <button
                onClick={() => setActiveTab('creators')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-smooth ${
                  activeTab === 'creators'
                    ? 'text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
                style={activeTab === 'creators' ? {
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  boxShadow: '0 0 16px rgba(99,102,241,0.5)',
                } : {}}
              >
                {t.nav.creators}
              </button>
              <button
                onClick={() => setActiveTab('brands')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-smooth ${
                  activeTab === 'brands'
                    ? 'text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
                style={activeTab === 'brands' ? {
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  boxShadow: '0 0 16px rgba(99,102,241,0.5)',
                } : {}}
              >
                {t.nav.brands}
              </button>
            </div>

            {/* Lang switcher + mobile */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-lg p-1"
                style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)' }}>
                {(['en', 'hi', 'es', 'de'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="px-2.5 py-1 text-xs font-semibold rounded transition-smooth"
                    style={language === lang ? {
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      color: '#fff',
                      boxShadow: '0 0 10px rgba(99,102,241,0.5)',
                    } : { color: '#9ca3af' }}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-white transition-smooth rounded-lg"
                style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)' }}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 pt-2 space-y-2 animate-slide-down">
              {['creators', 'brands'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab as 'creators' | 'brands'); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-smooth"
                  style={{ background: activeTab === tab ? 'rgba(99,102,241,0.2)' : 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.15)' }}
                >
                  {tab === 'creators' ? t.nav.creators : t.nav.brands}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-28 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'creators' ? (
            <AnimatedSection animation="slide-up" delay={0}>
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-smooth"
                  style={{
                    background: 'rgba(99,102,241,0.12)',
                    border: '1px solid rgba(99,102,241,0.3)',
                    color: '#a78bfa',
                  }}>
                  <Star className="w-3.5 h-3.5 fill-current" />
                  {t.hero.badge}
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
                  <span className="text-white">Creator growth</span>
                  <br />
                  <span className="gradient-text">is our mission.</span>
                </h1>

                <p className="text-lg sm:text-xl leading-relaxed max-w-2xl" style={{ color: '#94a3b8' }}>
                  {t.hero.creatorsSubtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white"
                    style={{ fontFamily: 'inherit' }}
                  >
                    {t.hero.cta}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    className="btn-outline-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
                    style={{ fontFamily: 'inherit' }}
                  >
                    {t.hero.learn}
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection animation="slide-up" delay={0}>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: 'rgba(236,72,153,0.12)',
                    border: '1px solid rgba(236,72,153,0.3)',
                    color: '#f472b6',
                  }}>
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  Premium Brand Partnerships
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
                  <span className="text-white">Authentic</span>
                  <br />
                  <span className="gradient-text">connections.</span>
                </h1>

                <p className="text-lg sm:text-xl leading-relaxed max-w-2xl" style={{ color: '#94a3b8' }}>
                  {t.hero.brandsSubtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white"
                    style={{ fontFamily: 'inherit' }}
                  >
                    {t.hero.cta}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    className="btn-outline-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
                    style={{ fontFamily: 'inherit' }}
                  >
                    {t.hero.explore}
                  </button>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl p-8 sm:p-12"
            style={{
              background: 'rgba(14,14,35,0.7)',
              border: '1px solid rgba(99,102,241,0.2)',
              backdropFilter: 'blur(20px)',
            }}>
            <div className="grid md:grid-cols-3 gap-10">
              {t.stats.metrics.map((metric, i) => (
                <AnimatedSection key={i} animation="slide-up" delay={i * 100}>
                  <div className={`${metric.highlight ? 'md:col-span-2' : ''}`}>
                    <StatCounter
                      endValue={parseInt(metric.value)}
                      suffix={metric.suffix}
                      label={metric.label}
                      highlight={metric.highlight}
                      footnote={metric.footnote}
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="slide-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">{t.features.title}</h2>
              <div className="w-16 h-1 rounded-full mx-auto"
                style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }} />
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {t.features.items.map((item, i) => (
              <AnimatedSection key={i} animation="slide-up" delay={i * 80}>
                <div className="card-glow p-8 group cursor-pointer h-full">
                  <div className="flex items-start gap-5">
                    <div className="text-3xl w-14 h-14 flex items-center justify-center rounded-2xl flex-shrink-0"
                      style={{
                        background: 'rgba(99,102,241,0.15)',
                        border: '1px solid rgba(99,102,241,0.25)',
                      }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text-blue transition-smooth">{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Creators Grid ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="slide-up">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.creators.title}</h2>
                <p className="text-sm mt-1" style={{ color: '#6366f1' }}>Our global creator network</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-smooth hover-lift"
                style={{
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  color: '#a78bfa',
                }}
              >
                {t.creators.seeMore} <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {creatorData.map((creator, i) => (
              <AnimatedSection key={i} animation="bounce-in" delay={i * 50}>
                <div className={`bg-gradient-to-br ${categoryColors[creator.cat]} rounded-2xl p-5 flex flex-col items-center justify-center h-36 cursor-pointer border hover-lift group transition-smooth`}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-sm font-bold text-white"
                    style={{ background: 'rgba(99,102,241,0.4)' }}>
                    {creator.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-xs font-bold text-white text-center leading-tight">{creator.name}</span>
                  <span className="text-xs mt-1" style={{ color: '#94a3b8' }}>{creator.followers}</span>
                  <span className="text-xs mt-0.5" style={{ color: '#6366f1' }}>{creator.cat}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── News Section ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="slide-up">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t.news.title}</h2>
              <div className="w-16 h-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, #6366f1, #ec4899)' }} />
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {t.news.items.map((item, i) => (
              <AnimatedSection key={i} animation="slide-up" delay={i * 60}>
                <a
                  href="#"
                  className="block p-6 rounded-2xl group h-full transition-smooth"
                  style={{
                    background: 'rgba(14,14,35,0.6)',
                    border: '1px solid rgba(99,102,241,0.12)',
                    backdropFilter: 'blur(16px)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.45)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(99,102,241,0.12)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.12)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(99,102,241,0.15)', color: '#a78bfa', border: '1px solid rgba(99,102,241,0.25)' }}>
                      {item.tag}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-smooth text-purple-400 flex-shrink-0" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 leading-snug group-hover:text-purple-300 transition-smooth">
                    {item.title}
                  </h3>
                  <p className="text-xs" style={{ color: '#64748b' }}>{item.date}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="scale-in">
            <div className="rounded-3xl p-12 sm:p-16 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.15) 50%, rgba(236,72,153,0.1) 100%)',
                border: '1px solid rgba(99,102,241,0.3)',
                backdropFilter: 'blur(20px)',
              }}>
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 60%)' }} />

              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Ready to grow?</h2>
                <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: '#94a3b8' }}>
                  Join thousands of creators and brands already building the future of content.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="btn-primary inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-base font-semibold text-white"
                    style={{ fontFamily: 'inherit' }}
                  >
                    Get in touch <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    className="btn-outline-glow inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-base font-semibold"
                    style={{ fontFamily: 'inherit' }}
                  >
                    View case studies
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative py-14 px-4 sm:px-6 lg:px-8 z-10"
        style={{ borderTop: '1px solid rgba(99,102,241,0.15)' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="slide-up">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Curious Media" width={32} height={32} className="h-8 w-auto" />
                <div>
                  <p className="font-bold text-white text-lg tracking-tight">Curious Media</p>
                  <p className="text-xs mt-0.5" style={{ color: '#6366f1' }}>{t.footer.tagline}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {t.footer.links.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-sm transition-smooth hover:text-purple-400"
                    style={{ color: '#64748b' }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8"
              style={{ borderTop: '1px solid rgba(99,102,241,0.1)' }}>
              <p className="text-xs" style={{ color: '#475569' }}>{t.footer.copyright}</p>
              <div className="flex items-center gap-2 text-xs" style={{ color: '#6366f1' }}>
                <Globe2 className="w-3.5 h-3.5" />
                <span>Global Creator Network</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <WhatsAppFloat
        phoneNumber="+919876543210"
        message="Have questions? Chat with us on WhatsApp for instant support and collaboration opportunities!"
        popupTitle="Chat with Us"
        popupDescription="Connect directly with our team for creators and brand partnerships."
      />
    </div>
  )
}
