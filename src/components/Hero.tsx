import { motion } from "framer-motion";
import { Shield, Star, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-ac.jpg";
import { getWhatsAppLink } from "@/lib/whatsapp";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Técnico higienizando ar condicionado" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero opacity-85" />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        {/* Social proof badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6"
        >
          <Star className="w-4 h-4 text-accent" fill="currentColor" />
          <span className="text-primary-foreground text-sm font-medium">
            +300 aparelhos higienizados • Avaliação 4.9 ★
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight max-w-2xl"
        >
          Higienização profissional de ar condicionado em{" "}
          <span className="text-gradient-accent">São Paulo.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-5 text-primary-foreground/80 text-lg md:text-xl max-w-lg leading-relaxed"
        >
          Evite mau cheiro, alergias e aumento no gasto de energia. 
          Atendimento em até 24h com técnicos certificados.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          {["Atendimento em até 24h", "Técnicos certificados", "Garantia de 7 dias"].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 text-primary-foreground/90 text-sm bg-primary-foreground/10 rounded-full px-3 py-1.5">
              <Shield className="w-3.5 h-3.5 text-secondary" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cta shadow-cta text-primary-foreground rounded-xl px-8 py-4 text-lg font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform animate-pulse-slow"
          >
            <MessageCircle className="w-5 h-5" fill="currentColor" />
            Agendar Higienização Agora
          </a>
          <a
            href="#servicos"
            className="border-2 border-primary-foreground/30 text-primary-foreground rounded-xl px-8 py-4 text-lg font-semibold text-center hover:bg-primary-foreground/10 transition-colors"
          >
            Ver Serviços
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
