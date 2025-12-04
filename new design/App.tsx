import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Brain, 
  Heart, 
  Users, 
  Eye, 
  Compass, 
  Zap, 
  Trophy,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Smartphone,
  Lock,
  Star,
  Activity,
  Microscope,
  Lightbulb,
  Smile,
  CheckCircle2
} from 'lucide-react';

// --- Reusable Components ---

const GlowButton = ({ children, className = '', ...props }: any) => {
  return (
    <button 
      className={`relative px-8 py-3 rounded-full font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/40 shadow-glass ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};

const PrimaryButton = ({ children, className = '', ...props }: any) => {
  return (
    <button 
      // Gradient matches the spheres: Peach/Orange to Pink
      className={`relative px-8 py-3 rounded-full font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-studio-peach to-studio-pink text-white shadow-lg hover:shadow-studio-pink/40 ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-studio-deep/30 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
             <span className="font-black text-white text-xl">M</span>
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-white drop-shadow-md">Monimentor</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 bg-white/10 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-sm">
          {['Visie', 'Methode', 'Wetenschap', 'Over Ons'].map((item) => (
             <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="px-5 py-2 rounded-full text-sm font-bold text-white/90 hover:text-white hover:bg-white/20 transition-all">
               {item}
             </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-white/90 font-bold hover:text-white transition-colors">Log In</button>
          <PrimaryButton className="!px-6 !py-2 text-sm">Start de reis</PrimaryButton>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#7C3AED] border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          {['Visie', 'Methode', 'Wetenschap', 'Over Ons'].map((item) => (
             <a key={item} href="#" className="text-white/90 py-3 font-bold border-b border-white/10 hover:text-white">{item}</a>
          ))}
          <button className="w-full text-white font-bold py-3 bg-white/10 rounded-xl">Log In</button>
          <button className="w-full bg-gradient-to-r from-studio-peach to-studio-pink text-white py-4 rounded-xl font-bold shadow-lg">Start de reis</button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      
      {/* Studio Lighting Effects */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Floating Spheres */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-studio-peach to-studio-pink blur-md opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-studio-pink to-purple-500 blur-md opacity-40 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-md animate-in fade-in zoom-in duration-700 shadow-sm hover:bg-white/30 transition-colors">
           <Star className="w-4 h-4 text-studio-peach fill-studio-peach" />
           <span className="text-sm font-bold text-white tracking-wide">Van schermstrijd naar digitale vrijheid</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-black text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-white drop-shadow-lg">
          Een digitaal <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-studio-peach via-studio-pink to-white">
             gezonde generatie
          </span>
        </h1>
        
        <p className="text-white/90 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
          Monimentor leert kinderen de vaardigheden voor een gelukkig en gezond digitaal leven. Van angst naar gedeelde ontdekking.
        </p>

        {/* THE BUBBLE VISUAL */}
        <div className="relative w-full max-w-[400px] md:max-w-[450px] aspect-square mx-auto mb-16 group">
           
           {/* Glass Container */}
           <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 to-white/5 backdrop-blur-[4px] border border-white/40 shadow-bubble animate-float z-20 flex items-center justify-center overflow-hidden">
              <div className="absolute top-[10%] left-[20%] w-[25%] h-[12%] bg-white/30 rounded-[50%] blur-lg transform -rotate-12"></div>
              <div className="absolute bottom-[10%] right-[20%] w-[20%] h-[10%] bg-white/10 rounded-[50%] blur-md transform -rotate-12"></div>
              
              <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-studio-peach blur-sm opacity-60 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-studio-pink blur-md opacity-50 animate-pulse" style={{animationDelay: '1.5s'}}></div>
           </div>

           {/* Glow behind the bubble */}
           <div className="absolute inset-8 bg-gradient-to-tr from-studio-peach to-studio-pink rounded-full blur-[70px] opacity-50 animate-pulse-slow z-0"></div>

           {/* Character Image */}
           <div className="relative w-full h-full flex items-center justify-center z-10 animate-dance p-8">
              <img 
                src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=2670&auto=format&fit=crop" 
                alt="Dancing Moni Character" 
                className="w-[90%] h-[90%] object-contain drop-shadow-2xl opacity-90 transition-all duration-300"
                style={{ clipPath: 'circle(70%)' }}
              />
           </div>
        </div>

        <div className="flex flex-col items-center gap-6 relative z-30">
           <PrimaryButton className="text-xl !px-12 !py-4 shadow-xl shadow-studio-peach/20">
              Start de reis
           </PrimaryButton>
           <div className="animate-bounce mt-4 text-white/50">
              <ChevronRight className="w-8 h-8 rotate-90" />
           </div>
        </div>

      </div>
    </section>
  );
};

const MissionIntro = () => {
  return (
    <section id="over-ons" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-white/30 shadow-glass text-center relative overflow-hidden">
           {/* Decor */}
           <div className="absolute -top-20 -left-20 w-60 h-60 bg-studio-peach/20 rounded-full blur-[60px]"></div>
           
           <h3 className="font-bold text-lg text-studio-peach mb-4 uppercase tracking-widest">Onze Missie</h3>
           <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
             "Wij zijn Maarten & Bas. Als vaders en technologen leven wij het probleem dat we oplossen."
           </h2>
           <p className="text-white/80 text-lg leading-relaxed mb-6">
             Voor 900.000 gezinnen in Nederland is de dagelijkse 'schermstrijd' een bron van conflict en angst. Wij bouwen Monimentor niet om simpelweg schermtijd te beperken, maar om iets veel waardevollers te bouwen: <strong>digitale veerkracht</strong>.
           </p>
           <p className="text-white/80 text-lg leading-relaxed">
             Onze visie is een wereld waarin elk kind de digitale wereld met verwondering en wijsheid navigeert. We bewegen gezinnen van digitale angst naar gedeelde ontdekking.
           </p>

           <div className="mt-10 flex justify-center gap-4">
              <div className="flex -space-x-4">
                 <div className="w-12 h-12 rounded-full bg-studio-peach border-2 border-white/20 flex items-center justify-center text-xs font-bold">M</div>
                 <div className="w-12 h-12 rounded-full bg-studio-pink border-2 border-white/20 flex items-center justify-center text-xs font-bold">B</div>
              </div>
              <div className="flex items-center text-white/60 font-medium text-sm">
                Founders Monimentor
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const crises = [
    {
      icon: <Smile className="w-10 h-10" />,
      title: "Voor het Kind",
      subtitle: "Het oneerlijke gevecht",
      desc: "Hun hersenen zijn gebouwd voor plezier, niet voor 'remmen'. Ze staan tegenover platforms die zijn ontworpen voor verslaving. Offline zijn voelt als sociale uitsluiting."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Voor de Ouders",
      subtitle: "Uitputting & Schuld",
      desc: "Gevangen tussen de dagelijkse strijd van 'nee' zeggen en de angst om toe te geven. Ouders voelen zich machteloos in een digitale wereld waarvoor ze niet zijn opgeleid."
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "Voor de Maatschappij",
      subtitle: "Een tweevoudige crisis",
      desc: "Fysieke gevolgen (bijziendheid, slaapstoornissen) en cognitieve erosie (focus, impulsbeheersing). We riskeren een generatie met een 'gefragmenteerd brein'."
    }
  ];

  return (
    <section id="problem" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white/70 text-sm font-bold uppercase tracking-widest mb-2">Het Probleem</h2>
          <h3 className="font-black text-3xl md:text-5xl text-white drop-shadow-sm">
            Een Drievoudige Digitale Crisis
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {crises.map((card, idx) => (
              <div key={idx} className="group relative bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/20 shadow-glass transition-transform duration-300 hover:-translate-y-2 hover:bg-white/10">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center mb-6 mx-auto text-white shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h4 className="font-bold text-2xl text-white mb-1 text-center">{card.title}</h4>
                <div className="text-studio-pink font-bold text-sm uppercase tracking-wide text-center mb-4">{card.subtitle}</div>
                <p className="text-white/70 text-center font-medium leading-relaxed">{card.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

const SolutionPhilosophy = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Radiant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-studio-deep/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block p-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl mb-8 shadow-lg">
           <Lightbulb className="w-8 h-8 text-studio-peach animate-pulse" />
        </div>
        
        <h3 className="font-black text-4xl md:text-6xl text-white mb-8 max-w-5xl mx-auto drop-shadow-md leading-tight">
          Wij geloven in <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-studio-peach to-studio-pink">
             Empowerment, niet in Handhaving.
          </span>
        </h3>
        
        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
           Bestaande oplossingen zien dit als een strijd die gewonnen moet worden met meer controle. Wij zien het als een generatie die versterkt moet worden met betere vaardigheden. Dit is de <strong>Monimentor Reframe</strong>.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
           {['Geen kooi, maar zijwieltjes', 'Coach, geen politieagent', 'Van conflict naar vertrouwen'].map((tag, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold backdrop-blur-md">
                 {tag}
              </span>
           ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const steps = [
    { 
      num: 1, 
      title: "Observeren", 
      desc: "De 'Intelligence Core' herkent gedragspatronen (bijv. veel unboxing video's kijken).",
      icon: <Eye className="w-8 h-8" /> 
    },
    { 
      num: 2, 
      title: "Gidsen", 
      desc: "Moni introduceert een micro-les, zoals 'Verborgen advertenties spotten'.",
      icon: <Compass className="w-8 h-8" /> 
    },
    { 
      num: 3, 
      title: "Empoweren", 
      desc: "Het kind past de vaardigheid toe via een challenge of in de praktijk.",
      icon: <Zap className="w-8 h-8" /> 
    },
    { 
      num: 4, 
      title: "Belonen", 
      desc: "De Digital Resilience Score (DRS) stijgt, wat leidt tot meer vrijheid.",
      icon: <Trophy className="w-8 h-8" /> 
    },
  ];

  return (
    <section id="methode" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white/70 text-sm font-bold uppercase tracking-widest mb-4">Onze Methode</h2>
          <h3 className="font-black text-3xl md:text-5xl text-white">De 'Invisible Playground'</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
             <div key={idx} className="relative group">
                {/* Connecting Line (Desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-3 w-6 h-[2px] bg-white/20 z-0"></div>
                )}
                
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:-translate-y-2">
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-studio-peach to-studio-pink flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform">
                      {step.icon}
                   </div>
                   <h3 className="font-bold text-white text-xl mb-3">{step.title}</h3>
                   <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IntelligenceCoreSection = () => {
  return (
    <section className="py-24 bg-white/5 backdrop-blur-sm border-y border-white/10">
       <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-studio-peach font-bold tracking-widest uppercase mb-2">Technologie</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6">De Monimentor Intelligence Core</h3>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                   Ons platform wordt aangedreven door een adaptieve kern met drie motoren die de reis van elk kind naar digitale onafhankelijkheid personaliseren. Moni is geen bibliotheek, maar een levenscoach.
                </p>
                
                <div className="space-y-6">
                   {[
                      { 
                        title: "De Digitale Voedingsmotor", 
                        desc: "Beoordeelt de kwaliteit van het 'digitale dieet' (Brain Food vs. Empty Calories).",
                        color: "bg-green-400"
                      },
                      { 
                        title: "De Veerkracht Motor (Core IP)", 
                        desc: "Leert vaardigheden voorspellend door 'Gedragshandtekeningen' te herkennen.",
                        color: "bg-studio-purple"
                      },
                      { 
                        title: "De Sociale Intelligentie Motor", 
                        desc: "Onderscheidt gezonde connecties van risicovolle omgevingen.",
                        color: "bg-blue-400"
                      }
                   ].map((engine, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                         <div className={`w-1 h-full rounded-full ${engine.color}`}></div>
                         <div>
                            <h4 className="font-bold text-white text-lg">{engine.title}</h4>
                            <p className="text-white/60 text-sm">{engine.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
             
             <div className="relative">
                {/* Abstract Visualization of the Core */}
                <div className="aspect-square rounded-full border border-white/20 relative flex items-center justify-center animate-spin-slow">
                   <div className="absolute inset-4 rounded-full border border-white/10 border-dashed"></div>
                   <div className="absolute top-0 left-1/2 w-4 h-4 bg-studio-peach rounded-full blur-sm"></div>
                   <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-studio-pink rounded-full blur-sm"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-40 h-40 bg-white/10 backdrop-blur-xl rounded-full border border-white/30 flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                      <Brain className="w-16 h-16 text-white opacity-80" />
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

const ScienceSection = () => {
  return (
    <section id="wetenschap" className="py-24 relative">
       <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-studio-deep to-studio-purple rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl border border-white/10">
             
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
             
             <div className="relative z-10 max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                   <Microscope className="w-4 h-4 text-studio-peach" />
                   <span className="text-xs font-bold text-white uppercase tracking-wider">Wetenschappelijk Kader</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                   Van Protectie naar Potentie
                </h2>
                
                <p className="text-white/80 text-lg mb-12 leading-relaxed">
                   Wetenschappelijk onderzoek bevestigt onze hypothese: kinderen ontwikkelen effectiever digitale competenties wanneer ze ruimte krijgen voor exploratie, fouten mogen maken en risico's nemen in een veilige 'sandbox'.
                </p>

                <div className="grid md:grid-cols-2 gap-6 text-left">
                   <div className="bg-black/20 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                      <h4 className="font-bold text-xl text-studio-peach mb-2">Beneficial Risk</h4>
                      <p className="text-white/70 text-sm">
                         Het elimineren van alle risico's leidt tot 'digitale fragiliteit'. Beheersbare risico's zijn essentieel voor het opbouwen van coping-strategieën.
                      </p>
                   </div>
                   <div className="bg-black/20 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                      <h4 className="font-bold text-xl text-studio-pink mb-2">Productive Failure</h4>
                      <p className="text-white/70 text-sm">
                         Instructie is effectiever wanneer kinderen eerst zelf proberen een probleem op te lossen en daarin mogen 'falen' voordat ze de oplossing krijgen.
                      </p>
                   </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 opacity-60">
                   <span className="text-xs font-bold uppercase tracking-wider">Ondersteund door inzichten van:</span>
                   <span className="text-xs font-bold">LSE (Sonia Livingstone)</span>
                   <span className="text-xs font-bold">EU Kids Online</span>
                   <span className="text-xs font-bold">ySkills Consortium</span>
                   <span className="text-xs font-bold">ETH Zurich (Manu Kapur)</span>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section className="py-20 relative text-center">
       <div className="container mx-auto px-6">
          <h2 className="font-black text-3xl md:text-4xl text-white mb-12">
             Partners in Opvoeding
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
             {["Wetenschappelijk Onderbouwd", "Privacy First (Geen verkoop data)", "Positieve Psychologie", "Gemaakt door Vaders"].map((item, i) => (
               <div key={i} className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                  <CheckCircle2 className="w-5 h-5 text-studio-peach" />
                  <span className="font-bold text-white text-sm">{item}</span>
               </div>
             ))}
          </div>
       </div>
    </section>
  );
}

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/10 text-center bg-black/20 backdrop-blur-lg">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-6 shadow-lg">
            <span className="font-bold text-white text-xl">M</span>
        </div>
        
        <h3 className="font-bold text-2xl text-white mb-2">Monimentor</h3>
        <p className="text-white/60 mb-8 max-w-sm mx-auto">
          Wij empoweren kinderen om meesters van hun digitale wereld te worden, geen slaven ervan.
        </p>

        <div className="flex gap-4 mb-8">
           {['f', 't', 'in'].map((social) => (
             <button key={social} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10 uppercase font-bold text-sm">
               {social}
             </button>
           ))}
        </div>

        <p className="text-white/40 text-sm">© 2025 Monimentor. All rights reserved.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-studio-pink selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <MissionIntro />
      <ProblemSection />
      <SolutionPhilosophy />
      <HowItWorksSection />
      <IntelligenceCoreSection />
      <ScienceSection />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default App;