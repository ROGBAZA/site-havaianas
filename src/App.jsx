import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import {
    ShoppingBag, X, Trash2, CreditCard, Lock, ShieldCheck,
    Smartphone, QrCode, CheckCircle2, ChevronRight, Star,
    Zap, Menu, ArrowRight, ShoppingBasket, ExternalLink,
    ChevronLeft, Copy, Info, Mail, User, ShoppingCart, Calendar
} from 'lucide-react';
import SustentabilidadeSection from './SustentabilidadeSection.jsx';

// --- CONFIGURAÇÃO SUPABASE ---
const SUPABASE_URL = "https://xzsltthkgkoatmchixqo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6c2x0dGhrZ2tvYXRtY2hpeHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxNjYwNjUsImV4cCI6MjA3MTc0MjA2NX0.NrXL5BnL9nZ0wrw-4SMhhRQ8leDLMio6rPWKG5Vmc2o";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const ExperienciaSection = () => {
    const journeys = [
        { id: 'aurora', title: 'Aurora Brasilis', detail: 'Passeio sensorial por rituais de verão, com texturas refletivas e cores metálicas.', emphasis: 'Sensory' },
        { id: 'urban', title: 'Ritual Urbano', detail: 'Caminhada noturna por avenidas iluminadas, criando ritmo com cada pisada.', emphasis: 'Rhythm' },
        { id: 'raizes', title: 'Raízes Tropicais', detail: 'Conexão com a floresta, cheiros verdes e sons orgânicos para inspirar novas paletas.', emphasis: 'Roots' }
    ];

    return (
        <section id="experiencia" className="py-24 md:py-36 bg-gradient-to-b from-black via-black/80 to-[#001f12] text-white relative overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                    <div>
                        <p className="text-sm uppercase tracking-[0.4em] text-secondary">Experiência Oficial</p>
                        <h2 className="text-[8vw] md:text-[5vw] font-black uppercase leading-tight">Pise além do catálogo</h2>
                    </div>
                    <button onClick={() => document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 border border-white/20 rounded-full uppercase tracking-[0.4em] text-xs hover:border-secondary transition duration-300">Catalogar</button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {journeys.map(journey => (
                        <motion.article
                            key={journey.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, borderColor: '#FFCF00' }}
                            viewport={{ once: true }}
                            className="border border-white/10 rounded-[40px] bg-white/5 p-8 flex flex-col gap-4 transition-colors duration-400"
                        >
                            <div className="flex items-center text-xs uppercase tracking-[0.4em] text-secondary gap-2">
                                <span className="w-2 h-2 bg-secondary rounded-full" />
                                <span>{journey.emphasis}</span>
                            </div>
                            <h3 className="text-3xl font-black uppercase leading-tight">{journey.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{journey.detail}</p>
                            <button className="mt-auto text-sm uppercase tracking-[0.3em] border-b border-white/30 pb-2 hover:text-secondary">Descubra</button>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

const BRAZIL_FLAG = "https://upload.wikimedia.org/wikipedia/commons/0/05/Brazil_flag.svg";
const HERO_IMAGES = [
    {
        id: 'floral',
        src: 'https://havaianas.com.br/cdn/shop/files/4145602_8275-havaianas-dual-0.jpg?v=1734124769&width=1445',
        alt: 'White Havaianas with floral straps',
        rotate: 5,
        gapClass: 'col-span-2 row-span-2'
    },
    {
        id: 'blue',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRwy4Nn6dygladZMYSi8Wtv0fDSZgQ_71Dw&s',
        alt: 'Blue Havaianas on marble',
        rotate: -4
    },
    {
        id: 'brazil-flag',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQao1k0Ym5ewfxW_Y3y34TPQTizxRARU7eR9A&s',
        alt: 'Brazil flag themed Havaianas',
        rotate: 6
    },
    {
        id: 'sand',
        src: 'data:image/jpeg;base64,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',
        alt: 'Beach sand and pastel flip flops',
        rotate: -3
    }
];
const PRODUCT_ASSETS = {
    brasilia: 'https://havaianas.com.br/cdn/shop/files/4145602_8275-havaianas-dual-0.jpg?v=1734124769&width=1445',
    neon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRwy4Nn6dygladZMYSi8Wtv0fDSZgQ_71Dw&s',
    mirrored: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQao1k0Ym5ewfxW_Y3y34TPQTizxRARU7eR9A&s',
    pastel: 'https://down-br.img.susercontent.com/file/sg-11134201-824hw-me1mr831msqu32',
    models: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80'
};
const IMG_HERO = PRODUCT_ASSETS.mirrored;
const IMG_MODELS = PRODUCT_ASSETS.models;

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        const handle = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handle);
        return () => window.removeEventListener('scroll', handle);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-black/95 backdrop-blur-2xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <motion.div 
                        initial={{ rotate: -360, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 200 }}
                        whileHover={{ rotate: 15, scale: 1.2 }}
                        className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-black font-black text-xl shadow-[0_0_30px_rgba(255,207,0,0.5)] group-hover:shadow-[0_0_40px_rgba(255,207,0,0.8)] transition-all"
                    >H</motion.div>
                    <motion.span 
                        initial={{ opacity: 0, y: 50, scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-black text-white tracking-tighter uppercase"
                    >HAVAIANAS</motion.span>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9, staggerChildren: 0.1 }}
                    className="hidden lg:flex items-center gap-8 font-bold text-sm text-gray-300"
                >
                    <motion.div className="relative group">
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-brGreen/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            whileHover={{ scale: 1.2 }}
                        />
                        <motion.button 
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 }}
                            whileHover={{ scale: 1.15, y: -5, color: "#FFCF00" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' })} 
                            className="relative px-6 py-3 hover:text-white transition-all duration-300 rounded-full border border-transparent hover:border-white/20 backdrop-blur-sm"
                        >
                            <span className="relative z-10">Havaianas</span>
                        </motion.button>
                    </motion.div>
                    
                    <motion.div className="relative group">
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-brGreen/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            whileHover={{ scale: 1.2 }}
                        />
                        <motion.button 
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                            whileHover={{ scale: 1.15, y: -5, color: "#FFCF00" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('união').scrollIntoView({ behavior: 'smooth' })} 
                            className="relative px-6 py-3 hover:text-white transition-all duration-300 rounded-full border border-transparent hover:border-white/20 backdrop-blur-sm"
                        >
                            <span className="relative z-10">Manifesto</span>
                        </motion.button>
                    </motion.div>
                    
                    <motion.div className="relative group">
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-brGreen/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            whileHover={{ scale: 1.2 }}
                        />
                        <motion.button 
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            whileHover={{ scale: 1.15, y: -5, color: "#FFCF00" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('experiencia').scrollIntoView({ behavior: 'smooth' })}
                            className="relative px-6 py-3 hover:text-white transition-all duration-300 rounded-full border border-transparent hover:border-white/20 backdrop-blur-sm"
                        >
                            <span className="relative z-10">Experiência</span>
                        </motion.button>
                    </motion.div>

                    <motion.div className="relative group">
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-brGreen/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            whileHover={{ scale: 1.2 }}
                        />
                        <motion.button 
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3 }}
                            whileHover={{ scale: 1.15, y: -5, color: "#FFCF00" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('sustentabilidade').scrollIntoView({ behavior: 'smooth' })}
                            className="relative px-6 py-3 hover:text-white transition-all duration-300 rounded-full border border-transparent hover:border-white/20 backdrop-blur-sm"
                        >
                            <span className="relative z-10">Sustentabilidade</span>
                        </motion.button>
                    </motion.div>
                <motion.button 
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    href="https://wa.me/5567998186597" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="relative group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brGreen/20 to-brGreen/10 text-brGreen rounded-full hover:from-brGreen hover:to-brGreen hover:text-white transition-all duration-300 border border-brGreen/30 hover:border-brGreen hover:shadow-lg hover:shadow-brGreen/25 overflow-hidden"
                    whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(0,151,57,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-brGreen to-brGreen opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                    />
                    <Smartphone size={16} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" /> 
                    <span className="font-semibold relative z-10">Contato</span>
                </motion.button>
                    <motion.div className="relative group">
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-secondary to-brGreen rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                            whileHover={{ scale: 1.3 }}
                        />
                        <motion.button 
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                            onClick={() => document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' })}
                            className="relative p-3 bg-white text-black rounded-full hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 group overflow-hidden"
                            whileHover={{ scale: 1.2, rotate: 10, boxShadow: "0 15px 35px rgba(255,207,0,0.4)" }}
                            whileTap={{ scale: 0.85 }}
                        >
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-r from-secondary to-brGreen opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ scale: 0, rotate: 0 }}
                                whileHover={{ scale: 2, rotate: 180 }}
                                transition={{ duration: 0.5 }}
                            />
                            <ShoppingCart size={20} className="relative z-10 group-hover:rotate-12 transition-transform duration-300 text-white" />
                        </motion.button>
                    </motion.div>
                </motion.div>
                <motion.button 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden relative p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.div 
                        animate={mobileMenuOpen ? { rotate: 45 } : { rotate: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Menu size={28} className="text-white" />
                    </motion.div>
                </motion.button>
                
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div 
                            initial={{ opacity: 0, x: 300, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 300, scale: 0.8 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed top-0 right-0 w-80 h-full bg-black/95 backdrop-blur-2xl z-[200] border-l border-white/10 lg:hidden"
                        >
                            <div className="p-6">
                                <motion.button 
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mb-8 p-2 rounded-full hover:bg-white/10 transition-colors"
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X size={24} className="text-white" />
                                </motion.button>
                                
                                <div className="flex flex-col gap-4">
                                    {['Havaianas', 'Manifesto', 'Experiência', 'Sustentabilidade'].map((item, index) => (
                                        <motion.button
                                            key={item}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                if (item === 'Havaianas') {
                                                    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
                                                } else if (item === 'Manifesto') {
                                                    document.getElementById('união').scrollIntoView({ behavior: 'smooth' });
                                                } else if (item === 'Experiência') {
                                                    document.getElementById('experiencia').scrollIntoView({ behavior: 'smooth' });
                                                } else if (item === 'Sustentabilidade') {
                                                    document.getElementById('sustentabilidade').scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                            className="text-left px-6 py-4 text-white font-bold text-lg rounded-full border border-white/10 hover:bg-white/10 hover:border-secondary transition-all duration-300"
                                            whileHover={{ scale: 1.05, x: 10 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {item}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

const HeroSection = () => (
    <section
        id="hero"
        className="relative min-h-[700px] lg:min-h-[820px] flex items-center overflow-hidden pt-20 lg:pt-0"
        style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.92), rgba(0,151,57,0.7)), url(${BRAZIL_FLAG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
    >
        <motion.div
            animate={{ x: "-100%" }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 w-[200%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-40 z-10"
        />
        <motion.div
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
            className="absolute top-1/2 w-[200%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"
        />
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"
        />
        <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] border border-secondary/5 rounded-full pointer-events-none"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-brGreen/5 via-black to-secondary/5 opacity-70" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="space-y-8">
                <h1 className="text-[8vw] sm:text-[10vw] lg:text-[10rem] font-black text-white leading-[0.8] tracking-[-0.08em] italic uppercase">
                    BRASIL <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-brGreen to-primary">HYPE.</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium max-w-lg leading-relaxed">
                    O salto definitivo da Havaianas: conforto olímpico, alma brasileira e tecnologia que conecta tradições e futuros.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' })}
                        className="group px-8 sm:px-12 py-4 sm:py-5 bg-secondary text-black font-black rounded-2xl sm:rounded-3xl flex items-center gap-4 uppercase tracking-widest text-[9px] sm:text-[11px] shadow-2xl hover:bg-brGreen hover:text-white transition-all duration-500 active:scale-95"
                    >
                        Garanta a Sua
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    <button
                        onClick={() => document.getElementById('experiencia').scrollIntoView({ behavior: 'smooth' })}
                        className="rounded-full border border-white/30 px-6 py-3 sm:px-8 sm:py-4 text-white font-black uppercase tracking-[0.3em] text-[9px] backdrop-blur-sm hover:border-white/60 transition"
                    >
                        Experiência
                    </button>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="flex justify-center lg:justify-end"
            >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center justify-center lg:max-w-[420px]">
                    {HERO_IMAGES.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.05, rotate: image.rotate ?? (index % 2 === 0 ? 3 : -3) }}
                            className={`relative rounded-[32px] overflow-hidden border-[8px] border-black/80 bg-black/10 shadow-[0_40px_70px_rgba(0,0,0,0.65)] ${image.gapClass ?? ''}`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full min-h-[160px] object-cover object-center transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/10 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

const CatalogSection = ({ onAddToCart }) => {
    const items = [
        { id: 9, name: "Brasília Premium", price: 69.90, desc: "Ondas de Brasília em cada passo.", image: PRODUCT_ASSETS.brasilia },
        { id: 1, name: "Neon Paulista", price: 54.90, desc: "Alças que brilham na metrópole.", image: PRODUCT_ASSETS.neon },
        { id: 3, name: "Reflexo Copacabana", price: 64.90, desc: "Reflexos dourados para dias de verão.", image: PRODUCT_ASSETS.mirrored },
        { id: 11, name: "Pastel Amazonas", price: 59.90, desc: "Tons suaves inspirados na floresta.", image: PRODUCT_ASSETS.pastel }
    ];

    return (
        <section id="catalogo" className="py-32 md:py-48 bg-[#080808] relative overflow-hidden">
            <motion.div
                animate={{ x: "-100%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 w-[300%] h-20 bg-gradient-to-r from-transparent via-secondary/20 to-transparent flex items-center justify-center overflow-hidden z-10"
            >
                <div className="flex items-center gap-8 whitespace-nowrap uppercase tracking-[0.3em] text-2xl font-black text-white/60">
                    <span>Havaianas • Brasil • 2025</span>
                    <span className="text-secondary">•</span>
                    <span>Novo Lançamento</span>
                    <span className="text-secondary">•</span>
                    <span>Coleção Verão</span>
                    <span className="text-secondary">•</span>
                    <span>Frete Grátis</span>
                </div>
            </motion.div>
            <motion.div
                animate={{ x: "-100%" }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 w-[150%] h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
            />
            <motion.div
                animate={{ x: "100%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 w-[150%] h-px bg-gradient-to-r from-transparent via-brGreen/20 to-transparent"
            />

            <div className="container mx-auto px-6 flex flex-col items-center relative z-20 space-y-10">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-[12vw] md:text-[7vw] font-black text-white uppercase tracking-[0.15em] leading-none text-center"
                >
                    HAVAIANAS ATUAIS
                </motion.h2>
                <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {items.map(item => (
                        <motion.div key={item.id} whileHover={{ y: -10 }} className="group bg-white/[0.02] rounded-[60px] p-8 border border-white/5 text-left transition-all duration-500 flex flex-col">
                            <div className="relative aspect-square bg-white/[0.03] rounded-[48px] overflow-hidden flex items-center justify-center p-12 group-hover:bg-white/[0.08] transition-colors">
                                <img src={item.image} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                            </div>
                            <div className="mt-8 flex-grow">
                                <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-2">{item.name}</h4>
                                <p className="text-gray-400 text-[11px] uppercase tracking-[0.3em]">{item.desc}</p>
                            </div>
                            <div className="mt-8 flex items-center justify-between bg-black/40 p-5 rounded-[40px] border border-white/10">
                                <span className="text-white font-black text-2xl italic">R$ {item.price.toFixed(2).replace('.', ',')}</span>
                                <button onClick={() => onAddToCart(item)} className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all shadow-xl">
                                    <ShoppingBag size={24} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ManifestoSection = () => (
    <section id="união" className="py-20 md:py-32 bg-[#009C39] text-black relative flex flex-col items-center overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-[300%] h-16 bg-gradient-to-r from-transparent via-white/10 to-transparent flex items-center justify-center overflow-hidden"
        >
            <div className="flex items-center gap-8 whitespace-nowrap">
                <span className="text-white/30 font-black text-lg md:text-xl tracking-[0.3em] uppercase">Sustentabilidade • Qualidade</span>
                <span className="text-white/40 font-black text-xl tracking-[0.3em] uppercase">•</span>
                <span className="text-white/30 font-black text-lg md:text-xl tracking-[0.3em] uppercase">Feito no Brasil</span>
                <span className="text-white/40 font-black text-xl tracking-[0.3em] uppercase">•</span>
                <span className="text-white/30 font-black text-lg md:text-xl tracking-[0.3em] uppercase">Tradição desde 1962</span>
                <span className="text-white/40 font-black text-xl tracking-[0.3em] uppercase">•</span>
                <span className="text-white/30 font-black text-lg md:text-xl tracking-[0.3em] uppercase">Sustentabilidade • Qualidade</span>
            </div>
        </motion.div>
        
        {/* Background Lines */}
        <motion.div 
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 w-[200%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
        <motion.div 
            animate={{ x: "100%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-2/3 w-[200%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
        
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-12 md:mt-20 relative z-10">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="mb-8 md:mb-16"
            >
                <Star size={80} className="text-yellow-400 md:size-[120px]" fill="currentColor" />
            </motion.div>

            <div className="relative pt-12 md:pt-24 mb-8 md:mb-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[6vw] md:text-[4rem] lg:text-[5rem] font-black leading-[1.1] tracking-tight italic text-black relative"
                >
                    <span className="relative inline-block">
                        A BANDEIRA É DE TODOS NÓS
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent blur-xl -z-10" />
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-400/50 to-transparent" />
                    </span>
                </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center mt-20 md:mt-40 text-left max-w-6xl lg:max-w-7xl w-full">
                <div className="space-y-6 md:space-y-12 px-4">
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] border-l-[12px] md:border-l-[16px] border-yellow-400 pl-6 md:pl-10">O passo que <br /> une toda uma <span className="text-yellow-400">Nação</span>.</h3>
                    <p className="text-lg md:text-2xl text-black/80 font-bold leading-relaxed">Havaianas não escolhe lado. Onde houver sol, areia ou asfalto, estaremos lá. Conforto é um direito, brasilidade é nosso DNA.</p>
                </div>
                <motion.img whileHover={{ rotate: 0 }} src={IMG_MODELS} className="rounded-[40px] md:rounded-[80px] shadow-[0_30px_60px_rgba(0,0,0,0.2)] border-[10px] md:border-[20px] border-white rotate-2 w-full transition-transform duration-1000" />
            </div>
        </div>

        {/* Floating Accents */}
        <motion.div
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-4 md:left-10 w-20 md:w-32 h-20 md:h-32 bg-yellow-400/20 blur-2xl md:blur-3xl rounded-full"
        />
        <motion.div
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 right-4 md:right-10 w-24 md:w-48 h-24 md:h-48 bg-white/20 blur-2xl md:blur-3xl rounded-full"
        />
    </section>
);

const CartModal = ({ isOpen, items, onClose, onRemove }) => {
    const [step, setStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        phone: '', 
        birthdate: '' 
    });
    const total = items.reduce((acc, i) => acc + i.price, 0);

    const handleNext = async () => {
        if (step === 1) { setStep(2); return; }
        if (step === 2) {
            if (!formData.name || !formData.email || !formData.phone || !formData.birthdate) {
                alert("Por favor, preencha todos os dados.");
                return;
            }
            
            // Redirecionar para WhatsApp com os dados
            const message = `*NOVO PEDIDO HAVAIANAS*\n\n*Dados do Cliente:*\n*Nome:* ${formData.name}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.phone}\n*Data de Nascimento:* ${formData.birthdate}\n\n*Itens do Pedido:*\n${items.map(item => `• ${item.name} - R$ ${item.price.toFixed(2).replace('.', ',')}`).join('\n')}\n\n*Total:* R$ ${total.toFixed(2).replace('.', ',')}\n\n*Pedido ID:* HAV-2030-${Math.floor(Math.random() * 100000)}`;
            
            const whatsappUrl = `https://wa.me/5567998186597?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            // Fechar modal após redirecionar
            setTimeout(() => onClose(), 1000);
            return;
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1000] flex justify-end px-4">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/95 backdrop-blur-3xl" />
                    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="relative w-full md:w-[600px] h-screen bg-[#0a0a0a] border-l border-white/5 p-8 md:p-14 flex flex-col shadow-2xl">

                        {/* Header Checkout */}
                        <div className="flex justify-between items-center mb-12">
                            {step > 1 && step < 4 && (
                                <button onClick={() => setStep(step - 1)} className="text-gray-500 hover:text-white flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-all">
                                    <ChevronLeft size={20} /> VOLTAR
                                </button>
                            )}
                            <h2 className="text-3xl md:text-4xl font-black text-white italic tracking-tighter uppercase ml-auto">
                                {step === 1 ? 'MEU SQUAD' : step === 2 ? 'IDENTIFICAÇÃO' : step === 3 ? 'PGTO' : 'SUCESSO'}
                            </h2>
                            {step < 4 && <button onClick={onClose} className="text-white hover:text-secondary ml-8 transition-colors"><X size={36} /></button>}
                        </div>

                        {/* Content Area */}
                        <div className="flex-grow overflow-y-auto space-y-8 pr-2 custom-scrollbar pb-10">
                            {step === 1 ? (
                                <>
                                    {items.length === 0 ? (
                                        <div className="h-full flex flex-col items-center justify-center opacity-10"><ShoppingBasket size={120} /><p className="text-2xl font-black mt-10">VAZIO.</p></div>
                                    ) : (
                                        items.map((i, idx) => (
                                            <div key={idx} className="flex gap-6 p-6 md:p-8 bg-white/[0.03] rounded-[40px] border border-white/5 items-center hover:bg-white/[0.06] transition-all">
                                                <div className="w-20 h-20 rounded-[24px] overflow-hidden bg-black/50 border border-white/10 shrink-0"><img src={IMG_HERO} style={{ filter: i.tint }} className="w-full h-full object-cover" /></div>
                                                <div className="flex-grow">
                                                    <h4 className="text-lg font-black text-white uppercase italic tracking-tighter leading-tight">{i.name}</h4>
                                                    <p className="text-secondary font-black text-lg mt-1 tracking-tighter">R$ {i.price.toFixed(2).replace('.', ',')}</p>
                                                </div>
                                                <button onClick={() => onRemove(idx)} className="text-gray-700 hover:text-accent p-2"><Trash2 size={24} /></button>
                                            </div>
                                        ))
                                    )}
                                </>
                            ) : step === 2 ? (
                                <div className="space-y-6 pt-4">
                                    <div className="space-y-3">
                                        <label className="text-gray-500 font-black text-[9px] uppercase tracking-widest block ml-4">Nome Completo</label>
                                        <div className="relative">
                                            <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <input
                                                type="text"
                                                placeholder="Seu nome completo"
                                                className="w-full bg-white/5 border border-white/10 p-4 pl-16 rounded-[20px] text-white font-bold focus:border-secondary outline-none transition-all text-sm"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <label className="text-gray-500 font-black text-[9px] uppercase tracking-widest block ml-4">E-mail</label>
                                        <div className="relative">
                                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <input
                                                type="email"
                                                placeholder="seu@email.com"
                                                className="w-full bg-white/5 border border-white/10 p-4 pl-16 rounded-[20px] text-white font-bold focus:border-secondary outline-none transition-all text-sm"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <label className="text-gray-500 font-black text-[9px] uppercase tracking-widest block ml-4">Telefone</label>
                                        <div className="relative">
                                            <Smartphone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <input
                                                type="tel"
                                                placeholder="(00) 00000-0000"
                                                className="w-full bg-white/5 border border-white/10 p-4 pl-16 rounded-[20px] text-white font-bold focus:border-secondary outline-none transition-all text-sm"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <label className="text-gray-500 font-black text-[9px] uppercase tracking-widest block ml-4">Data de Nascimento</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <input
                                                type="date"
                                                className="w-full bg-white/5 border border-white/10 p-4 pl-16 rounded-[20px] text-white font-bold focus:border-secondary outline-none transition-all text-sm"
                                                value={formData.birthdate}
                                                onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-600 text-[9px] font-bold text-center italic px-6 mt-6">Seus dados serão usados apenas para confirmação do seu Drop Havaianas 2030.</p>
                                </div>
                            ) : step === 3 ? (
                                <div className="space-y-12">
                                    <div className="bg-white/5 p-10 rounded-[60px] border border-white/10 text-center relative overflow-hidden group">
                                        <div className="flex items-center justify-center gap-3 text-secondary font-black text-[10px] uppercase tracking-[0.5em] mb-10">PAGAMENTO VIA PIX</div>
                                        <div className="flex justify-center mb-10">
                                            <div className="bg-white p-6 rounded-[40px] w-[260px] h-[260px] flex items-center justify-center shadow-2xl relative group-hover:scale-105 transition-transform duration-700">
                                                <QrCode size={210} className="text-black" />
                                                <div className="absolute inset-0 bg-secondary/5 pointer-events-none rounded-[40px]" />
                                            </div>
                                        </div>
                                        <button className="flex items-center justify-center gap-3 w-full py-5 border-2 border-white/10 rounded-3xl text-white font-black text-[11px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                            <Copy size={20} /> COPIAR CÓDIGO PIX
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-8 bg-white/5 rounded-[40px] border border-white/10 flex flex-col items-center gap-4 hover:bg-white hover:text-black transition-all group cursor-pointer shadow-xl">
                                            <CreditCard size={32} className="text-white group-hover:text-black" />
                                            <span className="font-black text-[11px] uppercase tracking-widest">CARTÃO</span>
                                        </div>
                                        <div className="p-8 bg-white/5 rounded-[40px] border border-white/10 flex flex-col items-center gap-4 hover:bg-white hover:text-black transition-all group cursor-pointer shadow-xl">
                                            <Smartphone size={32} className="text-white group-hover:text-black" />
                                            <span className="font-black text-[11px] uppercase tracking-widest">APPLE PAY</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center px-4">
                                    <div className="w-32 h-32 bg-brGreen rounded-full flex items-center justify-center mb-12 shadow-[0_0_50px_rgba(0,151,57,0.5)]">
                                        <CheckCircle2 size={64} className="text-white" />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-6">PAGAMENTO <br />REALIZADO!</h3>
                                    <p className="text-gray-400 text-lg mb-12 italic">Seu drop foi garantido, {formData.name.split(' ')[0]}. <br />Enviamos o recibo para {formData.email}.</p>
                                    <div className="bg-white/5 p-8 rounded-[40px] w-full border border-white/10">
                                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Pedido ID</p>
                                        <p className="text-white font-black text-2xl">#HAV-2030-{Math.floor(Math.random() * 100000)}</p>
                                    </div>
                                    <button onClick={onClose} className="mt-12 text-secondary font-black text-[10px] uppercase tracking-[0.4em] hover:text-white transition-colors">Voltar para a Coleção</button>
                                </motion.div>
                            )}
                        </div>

                        {/* Order Summary & Finalize */}
                        {items.length > 0 && step < 3 && (
                            <div className="mt-auto pt-6 border-t border-white/10 space-y-4">
                                <div className="flex justify-between items-end bg-white/5 p-4 rounded-[20px] border border-white/5">
                                    <div className="space-y-1">
                                        <p className="text-gray-500 font-black text-[8px] uppercase tracking-[0.4em]">TOTAL DO DROP</p>
                                        <div className="flex items-center gap-2 text-brGreen font-black text-[8px] uppercase tracking-[0.2em]">
                                            <ShieldCheck size={12} /> STRIPE SECURE
                                        </div>
                                    </div>
                                    <p className="text-2xl md:text-3xl font-black text-white tracking-tighter italic">R$ {total.toFixed(2).replace('.', ',')}</p>
                                </div>

                                <button
                                    onClick={handleNext}
                                    disabled={isProcessing}
                                    className="w-full py-4 bg-brGreen text-white font-black rounded-[20px] flex items-center justify-center gap-4 hover:bg-secondary hover:text-black transition-all shadow-[0_20px_50px_rgba(0,151,57,0.3)] disabled:opacity-50 group relative overflow-hidden text-sm uppercase tracking-widest"
                                >
                                    {isProcessing ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-3 border-white border-t-transparent" />
                                    ) : (
                                        <>
                                            <Lock size={18} />
                                            <span className="uppercase tracking-[0.2em]">
                                                {step === 1 ? 'PROSSEGUIR' : 'ENVIAR PARA WHATSAPP'}
                                            </span>
                                        </>
                                    )}
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.2s] ease-in-out" />
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const whatsappMessage = `*NOVO CONTATO HAVAIANAS*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Telefone:* ${formData.phone}\n*Mensagem:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/5567998186597?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappUrl, '_blank');
        
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        }, 1000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-32 md:py-48 bg-gradient-to-b from-[#080808] to-black relative overflow-hidden">
            {/* Advertising Banner */}
            <motion.div 
                animate={{ x: "-100%" }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 w-[300%] h-16 bg-gradient-to-r from-transparent via-secondary/8 to-transparent flex items-center justify-center overflow-hidden"
            >
                <div className="flex items-center gap-8 whitespace-nowrap">
                    <span className="text-secondary/20 font-black text-xl tracking-[0.3em] uppercase">Contato Direto • WhatsApp</span>
                    <span className="text-secondary/30 font-black text-xl tracking-[0.3em] uppercase">•</span>
                    <span className="text-secondary/20 font-black text-xl tracking-[0.3em] uppercase">Resposta Rápida</span>
                    <span className="text-secondary/30 font-black text-xl tracking-[0.3em] uppercase">•</span>
                    <span className="text-secondary/20 font-black text-xl tracking-[0.3em] uppercase">Atendimento 24/7</span>
                    <span className="text-secondary/30 font-black text-xl tracking-[0.3em] uppercase">•</span>
                    <span className="text-secondary/20 font-black text-xl tracking-[0.3em] uppercase">Contato Direto • WhatsApp</span>
                </div>
            </motion.div>
            
            {/* Animated Background Elements */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 left-10 w-32 h-32 border border-secondary/20 rounded-full"
            />
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 right-10 w-24 h-24 border border-brGreen/20 rounded-full"
            />
            
            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[12vw] md:text-[6vw] font-black text-white uppercase tracking-tighter text-center leading-none italic mb-8">
                        ENTRE EM<br />CONTATO
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Fale diretamente com nossos especialistas pelo WhatsApp. Retornamos em até 5 minutos.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <form onSubmit={handleSubmit} className="bg-white/[0.02] backdrop-blur-2xl rounded-[40px] border border-white/10 p-12 space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="space-y-2"
                            >
                                <label className="text-white/60 text-sm font-bold uppercase tracking-wider">Nome Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:border-secondary focus:outline-none transition-all duration-300"
                                    placeholder="Seu nome"
                                />
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                                className="space-y-2"
                            >
                                <label className="text-white/60 text-sm font-bold uppercase tracking-wider">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:border-secondary focus:outline-none transition-all duration-300"
                                    placeholder="seu@email.com"
                                />
                            </motion.div>
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                            className="space-y-2"
                        >
                            <label className="text-white/60 text-sm font-bold uppercase tracking-wider">Telefone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:border-secondary focus:outline-none transition-all duration-300"
                                placeholder="(67) 99818-6597"
                            />
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-2"
                        >
                            <label className="text-white/60 text-sm font-bold uppercase tracking-wider">Mensagem</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:border-secondary focus:outline-none transition-all duration-300 resize-none"
                                placeholder="Como podemos ajudar?"
                            />
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative px-12 py-6 bg-gradient-to-r from-secondary to-brGreen text-black font-black rounded-full flex items-center gap-4 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                            >
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-r from-brGreen to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "0%" }}
                                    transition={{ duration: 0.3 }}
                                />
                                {isSubmitting ? (
                                    <>
                                        <motion.div 
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-6 h-6 border-2 border-current border-t-transparent rounded-full"
                                        />
                                        <span className="relative z-10">Enviando...</span>
                                    </>
                                ) : (
                                    <>
                                        <Smartphone size={20} className="relative z-10" />
                                        <span className="relative z-10 uppercase tracking-widest text-sm">Enviar via WhatsApp</span>
                                    </>
                                )}
                            </motion.button>
                            
                            {submitted && (
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 text-brGreen font-bold"
                                >
                                    Mensagem enviada! Aguarde nosso contato.
                                </motion.p>
                            )}
                        </motion.div>
                    </form>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-white/40 text-sm">
                            Ou chame diretamente no WhatsApp: 
                            <a 
                                href="https://wa.me/5567998186597" 
                                target="_blank" 
                                rel="noreferrer"
                                className="text-brGreen font-bold hover:text-secondary transition-colors ml-2"
                            >
                                (67) 99818-6597
                            </a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

function App() {
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [notif, setNotif] = useState(false);

    const add = (p) => { setCart([...cart, p]); setNotif(true); setTimeout(() => setNotif(false), 3000); };
    const remove = (idx) => { const n = [...cart]; n.splice(idx, 1); setCart(n); };

    return (
        <div className="bg-black text-white font-sans antialiased overflow-x-hidden selection:bg-secondary selection:text-black">
            <Navbar />

            <HeroSection />
            <CatalogSection onAddToCart={add} />
            <ManifestoSection />
            <ExperienciaSection />
            <SustentabilidadeSection />
            <ContactSection />

            <footer className="py-48 bg-black flex flex-col items-center relative border-t border-white/5">
                <h3 className="text-[18vw] font-black italic opacity-5 tracking-tighter leading-none select-none uppercase">HAVAIANAS</h3>
                <div className="mt-16 flex flex-col md:flex-row gap-16 text-center md:text-left items-center opacity-40">
                    <div className="space-y-4">
                        <p className="text-white font-black text-[9px] tracking-widest uppercase">Atendimento</p>
                        <p className="text-secondary font-black text-xl tracking-tighter italic">0800 70 70 567</p>
                    </div>
                    <div className="w-12 h-[1px] bg-white/20 hidden md:block" />
                    <div className="space-y-4">
                        <p className="text-white font-black text-[9px] tracking-widest uppercase">Drops Globais</p>
                        <p className="text-white font-bold text-lg tracking-tighter italic">SP | NY | LDN | PAR | TKY</p>
                    </div>
                </div>
                <p className="mt-32 text-[8px] font-black uppercase tracking-[0.8em] text-gray-800">ALPARGATAS S.A. | BRASIL 2030</p>
            </footer>

            <AnimatePresence>
                {notif && (
                    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} className="fixed bottom-32 left-10 z-[1200] bg-secondary text-black px-12 py-7 rounded-[40px] font-black shadow-[0_40px_80px_rgba(255,207,0,0.4)] border-4 border-black flex items-center gap-6 text-sm uppercase tracking-widest">
                        <Zap size={28} fill="currentColor" /> ADICIONADO AO SQUAD!
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cart Button */}
            <motion.button
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-10 right-10 z-[900] bg-secondary text-black p-4 rounded-full shadow-2xl border-4 border-black flex items-center justify-center"
            >
                <ShoppingCart size={24} />
            </motion.button>

            <CartModal isOpen={isOpen} items={cart} onClose={() => setIsOpen(false)} onRemove={remove} />

            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #FFCF00; border-radius: 40px; }
            `}</style>
        </div>
    );
}

export default App;
