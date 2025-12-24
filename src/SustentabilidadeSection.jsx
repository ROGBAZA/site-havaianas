import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Heart, Globe, TreePine, Droplets } from 'lucide-react';

const SustentabilidadeSection = () => {
    return (
        <section id="sustentabilidade" className="py-32 md:py-48 bg-gradient-to-b from-black to-[#0a3d0a] relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 left-10 w-40 h-40 border border-brGreen/20 rounded-full"
            />
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 right-10 w-32 h-32 border border-green-500/20 rounded-full"
            />
            
            {/* Animated Leaves */}
            <motion.div 
                animate={{ y: -100, rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-1/4 text-green-500/20"
            >
                <Leaf size={60} />
            </motion.div>
            <motion.div 
                animate={{ y: -100, rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 5 }}
                className="absolute top-1/3 right-1/3 text-green-600/20"
            >
                <TreePine size={50} />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="mb-8 inline-block"
                    >
                        <Leaf size={80} className="text-brGreen" fill="currentColor" />
                    </motion.div>
                    <h2 className="text-[12vw] md:text-[8vw] font-black text-white uppercase tracking-tighter text-center leading-none italic mb-8">
                        SUSTENTABILIDADE
                    </h2>
                    <p className="text-green-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        Compromisso com o planeta. Cada passo conta na construção de um futuro mais verde.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                    {[
                        {
                            icon: <Recycle size={40} />,
                            title: "Reciclagem",
                            desc: "100% dos nossos resíduos são reciclados. Zero desperdício em nossa produção.",
                            color: "text-green-400"
                        },
                        {
                            icon: <Droplets size={40} />,
                            title: "Economia de Água",
                            desc: "Reduzimos 40% no consumo de água. Processos sustentáveis em cada etapa.",
                            color: "text-blue-400"
                        },
                        {
                            icon: <Globe size={40} />,
                            title: "Carbono Neutro",
                            desc: "Compensamos 100% das emissões. Florestas plantadas em todo Brasil.",
                            color: "text-green-500"
                        },
                        {
                            icon: <Heart size={40} />,
                            title: "Comunidade",
                            desc: "Apoiamos 50+ comunidades locais. Geração de renda e inclusão social.",
                            color: "text-red-400"
                        },
                        {
                            icon: <TreePine size={40} />,
                            title: "Matas Nativas",
                            desc: "Preservamos 1000+ hectares. Parcerias com ONGs ambientais.",
                            color: "text-green-600"
                        },
                        {
                            icon: <Leaf size={40} />,
                            title: "Materiais Eco",
                            desc: "75% materiais sustentáveis. Inovação verde em nossos produtos.",
                            color: "text-lime-400"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-gradient-to-br from-green-900/20 to-black/40 backdrop-blur-xl rounded-3xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300"
                        >
                            <div className={`${item.color} mb-6`}>{item.icon}</div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{item.title}</h3>
                            <p className="text-green-200 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-green-600/20 to-brGreen/20 backdrop-blur-2xl rounded-[50px] p-16 text-center border border-green-500/30"
                >
                    <h3 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter italic">
                        NOSSO IMPACTO
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "1M+", label: "Árvores Plantadas" },
                            { number: "40%", label: "Redução CO₂" },
                            { number: "100%", label: "Energia Limpa" },
                            { number: "50+", label: "Comunidades" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-2"
                            >
                                <div className="text-4xl font-black text-brGreen">{stat.number}</div>
                                <div className="text-green-200 text-sm uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="text-green-300 text-lg mb-8">
                        Junte-se a nós na construção de um futuro mais sustentável.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                        className="px-12 py-6 bg-gradient-to-r from-brGreen to-green-600 text-white font-black rounded-full hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 uppercase tracking-widest text-sm"
                    >
                        Faça Parte
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default SustentabilidadeSection;
