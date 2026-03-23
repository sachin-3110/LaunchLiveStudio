'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Globe, Users, Zap, ArrowRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const translations = {
  en: {
    nav: {
      home: 'Home',
      creators: 'For Creators',
      brands: 'For Brands',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Connect. Create. Collaborate.',
      subtitle: 'The platform where talented creators meet innovative brands. Build authentic partnerships that matter.',
      cta: 'Get Started',
      secondary: 'Learn More',
    },
    forCreators: {
      title: 'Empower Your Creativity',
      description: 'Discover partnerships that align with your vision. Access exclusive brand collaborations, grow your audience, and monetize your passion.',
      features: ['Brand Partnerships', 'Audience Growth', 'Monetization Tools', 'Community Support'],
      cta: 'Start Creating',
    },
    forBrands: {
      title: 'Find Your Perfect Creator',
      description: 'Connect with authentic creators who resonate with your brand. Access detailed analytics, campaign management, and performance tracking.',
      features: ['Creator Discovery', 'Campaign Management', 'Performance Analytics', 'ROI Tracking'],
      cta: 'Explore Creators',
    },
    collaboration: {
      title: 'How It Works',
      steps: [
        { number: '1', title: 'Connect', description: 'Creators and brands discover each other on our platform' },
        { number: '2', title: 'Collaborate', description: 'Define goals, negotiate terms, and create amazing content' },
        { number: '3', title: 'Succeed', description: 'Track performance and build long-term relationships' },
      ],
    },
    stats: {
      title: 'Our Impact',
      metrics: [
        { number: '10K+', label: 'Creators' },
        { number: '500+', label: 'Brands' },
        { number: '$50M+', label: 'Collaborations' },
        { number: '95%', label: 'Success Rate' },
      ],
    },
    why: {
      title: 'Why Choose Curious Media?',
      reasons: [
        { icon: 'users', title: 'Vetted Community', description: 'All creators and brands are verified for authenticity' },
        { icon: 'zap', title: 'Smart Matching', description: 'AI-powered algorithm finds perfect partnerships' },
        { icon: 'globe', title: 'Global Reach', description: 'Connect with creators and brands worldwide' },
      ],
    },
    cta: {
      title: 'Ready to Transform Your Career?',
      subtitle: 'Join thousands of creators and brands building the future of content.',
      button: 'Start Your Journey',
    },
    footer: {
      company: 'Company',
      legal: 'Legal',
      social: 'Follow Us',
      copyright: '© 2024 Curious Media. All rights reserved.',
      links: ['About', 'Blog', 'Privacy', 'Terms', 'Twitter', 'Instagram'],
    },
  },
  hi: {
    nav: {
      home: 'होम',
      creators: 'रचनाकारों के लिए',
      brands: 'ब्रांड्स के लिए',
      about: 'परिचय',
      contact: 'संपर्क करें',
    },
    hero: {
      title: 'जुड़ें। बनाएं। सहयोग करें।',
      subtitle: 'वह मंच जहां प्रतिभाशाली रचनाकार नवीन ब्रांड्स से मिलते हैं। प्रामाणिक साझेदारियां बनाएं जो महत्वपूर्ण हैं।',
      cta: 'शुरुआत करें',
      secondary: 'और जानें',
    },
    forCreators: {
      title: 'अपनी रचनात्मकता को सशक्त बनाएं',
      description: 'ऐसी साझेदारियों की खोज करें जो आपकी दृष्टि से मेल खाती हैं। एक्सक्लूसिव ब्रांड सहयोग, दर्शक वृद्धि और मुद्रीकरण उपकरण प्राप्त करें।',
      features: ['ब्रांड साझेदारियां', 'दर्शक वृद्धि', 'मुद्रीकरण उपकरण', 'सामुदायिक समर्थन'],
      cta: 'रचना शुरू करें',
    },
    forBrands: {
      title: 'अपने परिपूर्ण रचनाकार को खोजें',
      description: 'उन प्रामाणिक रचनाकारों से जुड़ें जो आपके ब्रांड के साथ गूंजते हैं। विस्तृत विश्लेषण, अभियान प्रबंधन और कार्यप्रवाह ट्रैकिंग तक पहुंचें।',
      features: ['रचनाकार खोज', 'अभियान प्रबंधन', 'प्रदर्शन विश्लेषण', 'ROI ट्रैकिंग'],
      cta: 'रचनाकारों को खोजें',
    },
    collaboration: {
      title: 'यह कैसे काम करता है',
      steps: [
        { number: '1', title: 'जुड़ें', description: 'रचनाकार और ब्रांड्स हमारे मंच पर एक दूसरे को खोजते हैं' },
        { number: '2', title: 'सहयोग करें', description: 'लक्ष्य परिभाषित करें, शर्तों पर बातचीत करें और अद्भुत सामग्री बनाएं' },
        { number: '3', title: 'सफल हों', description: 'कार्यप्रवाह ट्रैक करें और दीर्घकालिक संबंध बनाएं' },
      ],
    },
    stats: {
      title: 'हमारा प्रभाव',
      metrics: [
        { number: '10K+', label: 'रचनाकार' },
        { number: '500+', label: 'ब्रांड्स' },
        { number: '$50M+', label: 'सहयोग' },
        { number: '95%', label: 'सफलता दर' },
      ],
    },
    why: {
      title: 'Curious Media को क्यों चुनें?',
      reasons: [
        { icon: 'users', title: 'सत्यापित समुदाय', description: 'सभी रचनाकार और ब्रांड्स प्रामाणिकता के लिए सत्यापित हैं' },
        { icon: 'zap', title: 'स्मार्ट मिलान', description: 'AI-संचालित एल्गोरिदम परिपूर्ण साझेदारियां खोजता है' },
        { icon: 'globe', title: 'वैश्विक पहुंच', description: 'विश्वभर में रचनाकारों और ब्रांड्स से जुड़ें' },
      ],
    },
    cta: {
      title: 'आपके कैरियर को बदलने के लिए तैयार हैं?',
      subtitle: 'सामग्री के भविष्य का निर्माण करने वाले हजारों रचनाकार और ब्रांड्स में शामिल हों।',
      button: 'अपनी यात्रा शुरू करें',
    },
    footer: {
      company: 'कंपनी',
      legal: 'कानूनी',
      social: 'हमें फॉलो करें',
      copyright: '© 2024 Curious Media। सर्वाधिकार सुरक्षित।',
      links: ['परिचय', 'ब्लॉग', 'गोपनीयता', 'शर्तें', 'ट्विटर', 'इंस्टाग्राम'],
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      creators: 'Para Creadores',
      brands: 'Para Marcas',
      about: 'Acerca De',
      contact: 'Contacto',
    },
    hero: {
      title: 'Conecta. Crea. Colabora.',
      subtitle: 'La plataforma donde creadores talentosos conocen marcas innovadoras. Construye asociaciones auténticas que importan.',
      cta: 'Comenzar',
      secondary: 'Conocer más',
    },
    forCreators: {
      title: 'Potencia Tu Creatividad',
      description: 'Descubre asociaciones que se alinean con tu visión. Accede a colaboraciones exclusivas con marcas, crece tu audiencia y monetiza tu pasión.',
      features: ['Asociaciones con Marcas', 'Crecimiento de Audiencia', 'Herramientas de Monetización', 'Apoyo Comunitario'],
      cta: 'Comienza a Crear',
    },
    forBrands: {
      title: 'Encuentra Tu Creador Perfecto',
      description: 'Conecta con creadores auténticos que resuenan con tu marca. Accede a análisis detallados, gestión de campañas y seguimiento de rendimiento.',
      features: ['Descubrimiento de Creadores', 'Gestión de Campañas', 'Análisis de Rendimiento', 'Seguimiento de ROI'],
      cta: 'Explorar Creadores',
    },
    collaboration: {
      title: 'Cómo Funciona',
      steps: [
        { number: '1', title: 'Conecta', description: 'Los creadores y marcas se descubren mutuamente en nuestra plataforma' },
        { number: '2', title: 'Colabora', description: 'Define objetivos, negocia términos y crea contenido increíble' },
        { number: '3', title: 'Triunfa', description: 'Rastrea el rendimiento y construye relaciones a largo plazo' },
      ],
    },
    stats: {
      title: 'Nuestro Impacto',
      metrics: [
        { number: '10K+', label: 'Creadores' },
        { number: '500+', label: 'Marcas' },
        { number: '$50M+', label: 'Colaboraciones' },
        { number: '95%', label: 'Tasa de Éxito' },
      ],
    },
    why: {
      title: '¿Por Qué Elegir Curious Media?',
      reasons: [
        { icon: 'users', title: 'Comunidad Verificada', description: 'Todos los creadores y marcas son verificados por autenticidad' },
        { icon: 'zap', title: 'Coincidencia Inteligente', description: 'El algoritmo impulsado por IA encuentra asociaciones perfectas' },
        { icon: 'globe', title: 'Alcance Global', description: 'Conecta con creadores y marcas en todo el mundo' },
      ],
    },
    cta: {
      title: '¿Listo para Transformar Tu Carrera?',
      subtitle: 'Únete a miles de creadores y marcas que construyen el futuro del contenido.',
      button: 'Comienza Tu Viaje',
    },
    footer: {
      company: 'Empresa',
      legal: 'Legal',
      social: 'Síguenos',
      copyright: '© 2024 Curious Media. Todos los derechos reservados.',
      links: ['Acerca De', 'Blog', 'Privacidad', 'Términos', 'Twitter', 'Instagram'],
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      creators: 'Für Creator',
      brands: 'Für Marken',
      about: 'Über Uns',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Verbinde. Erschaffe. Zusammenarbeiten.',
      subtitle: 'Die Plattform, auf der talentierte Creator innovative Marken treffen. Schaffe authentische Partnerschaften, die zählen.',
      cta: 'Jetzt Starten',
      secondary: 'Mehr Erfahren',
    },
    forCreators: {
      title: 'Deine Kreativität Stärken',
      description: 'Entdecke Partnerschaften, die deiner Vision entsprechen. Erhalte Zugang zu exklusiven Markenkooperationen, vergrößere dein Publikum und monetarisiere deine Leidenschaft.',
      features: ['Markenpartnerschaften', 'Publikumswachstum', 'Monetarisierungstools', 'Communityunterstützung'],
      cta: 'Beginne zu Erschaffen',
    },
    forBrands: {
      title: 'Finde Deinen Perfekten Creator',
      description: 'Verbinde dich mit authentischen Creatorn, die mit deiner Marke resonieren. Erhalte Zugriff auf detaillierte Analysen, Kampagnenverwaltung und Leistungsverfolgung.',
      features: ['Creator-Suche', 'Kampagnenverwaltung', 'Leistungsanalyse', 'ROI-Verfolgung'],
      cta: 'Creator Erkunden',
    },
    collaboration: {
      title: 'Wie Es Funktioniert',
      steps: [
        { number: '1', title: 'Verbinde', description: 'Creator und Marken entdecken sich gegenseitig auf unserer Plattform' },
        { number: '2', title: 'Zusammenarbeiten', description: 'Definiere Ziele, verhandle Bedingungen und erstelle erstaunliche Inhalte' },
        { number: '3', title: 'Erfolg', description: 'Verfolge die Leistung und baue langfristige Beziehungen auf' },
      ],
    },
    stats: {
      title: 'Unsere Auswirkungen',
      metrics: [
        { number: '10K+', label: 'Creator' },
        { number: '500+', label: 'Marken' },
        { number: '$50M+', label: 'Kooperationen' },
        { number: '95%', label: 'Erfolgsquote' },
      ],
    },
    why: {
      title: 'Warum Curious Media Wählen?',
      reasons: [
        { icon: 'users', title: 'Verifizierte Gemeinschaft', description: 'Alle Creator und Marken sind auf Authentizität überprüft' },
        { icon: 'zap', title: 'Intelligente Zuordnung', description: 'KI-gesteuerter Algorithmus findet perfekte Partnerschaften' },
        { icon: 'globe', title: 'Globale Reichweite', description: 'Verbinde dich mit Creatorn und Marken weltweit' },
      ],
    },
    cta: {
      title: 'Bereit, Deine Karriere zu Transformieren?',
      subtitle: 'Tritt tausenden von Creatorn und Marken bei, die die Zukunft des Contents gestalten.',
      button: 'Starten Sie Ihre Reise',
    },
    footer: {
      company: 'Unternehmen',
      legal: 'Rechtlich',
      social: 'Folge Uns',
      copyright: '© 2024 Curious Media. Alle Rechte vorbehalten.',
      links: ['Über Uns', 'Blog', 'Datenschutz', 'Bedingungen', 'Twitter', 'Instagram'],
    },
  },
}

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'hi' | 'es' | 'de'>('en')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[language]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md z-50 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Image src="/logo.png" alt="Curious Media" width={40} height={40} className="h-10 w-auto" />
              <span className="font-bold text-xl hidden sm:inline">Curious</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium hover:text-primary transition">{t.nav.home}</a>
              <a href="#creators" className="text-sm font-medium hover:text-primary transition">{t.nav.creators}</a>
              <a href="#brands" className="text-sm font-medium hover:text-primary transition">{t.nav.brands}</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition">{t.nav.about}</a>
            </div>

            {/* Language & CTA */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 text-xs font-medium rounded transition ${language === 'en' ? 'bg-primary text-white' : 'hover:bg-gray-200 dark:hover:bg-slate-700'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-2 py-1 text-xs font-medium rounded transition ${language === 'hi' ? 'bg-primary text-white' : 'hover:bg-gray-200 dark:hover:bg-slate-700'}`}
                >
                  HI
                </button>
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-2 py-1 text-xs font-medium rounded transition ${language === 'es' ? 'bg-primary text-white' : 'hover:bg-gray-200 dark:hover:bg-slate-700'}`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('de')}
                  className={`px-2 py-1 text-xs font-medium rounded transition ${language === 'de' ? 'bg-primary text-white' : 'hover:bg-gray-200 dark:hover:bg-slate-700'}`}
                >
                  DE
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t border-gray-200 dark:border-slate-800">
              <a href="#" className="block text-sm font-medium hover:text-primary transition py-2">{t.nav.home}</a>
              <a href="#creators" className="block text-sm font-medium hover:text-primary transition py-2">{t.nav.creators}</a>
              <a href="#brands" className="block text-sm font-medium hover:text-primary transition py-2">{t.nav.brands}</a>
              <a href="#about" className="block text-sm font-medium hover:text-primary transition py-2">{t.nav.about}</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-balance leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-pretty leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-blue-700 text-white">
                {t.hero.cta} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                {t.hero.secondary}
              </Button>
            </div>
          </div>
          <div className="relative h-96 md:h-full">
            <Image
              src="/hero-creators.jpg"
              alt="Creators collaborating"
              fill
              className="object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* For Creators Section */}
      <section id="creators" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/hero-brands.jpg"
                alt="Brand collaboration"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                {t.forCreators.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-pretty leading-relaxed">
                {t.forCreators.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {t.forCreators.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-primary hover:bg-blue-700 text-white w-full sm:w-auto">
                {t.forCreators.cta} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* For Brands Section */}
      <section id="brands" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                {t.forBrands.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-pretty leading-relaxed">
                {t.forBrands.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {t.forBrands.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-primary hover:bg-blue-700 text-white w-full sm:w-auto">
                {t.forBrands.cta} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="relative h-96 order-1 md:order-2">
              <Image
                src="/collaboration.jpg"
                alt="Creators and brands collaborating"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black dark:bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-balance">
            {t.collaboration.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.collaboration.steps.map((step, i) => (
              <div key={i} className="space-y-4 group cursor-pointer">
                <div className="text-6xl font-bold text-primary/50 group-hover:text-primary transition">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-balance">
            {t.stats.title}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {t.stats.metrics.map((metric, i) => (
              <div key={i} className="text-center space-y-2 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="text-4xl font-bold text-primary">{metric.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-balance">
            {t.why.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.why.reasons.map((reason, i) => (
              <div key={i} className="p-8 bg-gray-50 dark:bg-slate-800 rounded-lg hover:shadow-lg transition space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  {reason.icon === 'users' && <Users className="w-6 h-6 text-white" />}
                  {reason.icon === 'zap' && <Zap className="w-6 h-6 text-white" />}
                  {reason.icon === 'globe' && <Globe className="w-6 h-6 text-white" />}
                </div>
                <h3 className="text-xl font-bold">{reason.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/success-metrics.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-300 text-pretty">
            {t.cta.subtitle}
          </p>
          <Button size="lg" className="bg-primary hover:bg-blue-700 text-white">
            {t.cta.button} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-300 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">{t.footer.company}</h4>
              <div className="space-y-2 text-sm">
                <p><a href="#" className="hover:text-white transition">About</a></p>
                <p><a href="#" className="hover:text-white transition">Blog</a></p>
                <p><a href="#" className="hover:text-white transition">Careers</a></p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">{t.footer.legal}</h4>
              <div className="space-y-2 text-sm">
                <p><a href="#" className="hover:text-white transition">Privacy</a></p>
                <p><a href="#" className="hover:text-white transition">Terms</a></p>
                <p><a href="#" className="hover:text-white transition">Contact</a></p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">{t.footer.social}</h4>
              <div className="space-y-2 text-sm">
                <p><a href="#" className="hover:text-white transition">Twitter</a></p>
                <p><a href="#" className="hover:text-white transition">Instagram</a></p>
                <p><a href="#" className="hover:text-white transition">LinkedIn</a></p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="sm" className="bg-primary hover:bg-blue-700">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm">{t.footer.copyright}</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
