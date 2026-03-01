import { motion } from "framer-motion";
import { MessageCircle, Shield } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const CTASection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
            Agende sua higienização agora mesmo.
          </h2>
           <p className="text-muted-foreground mt-4 text-lg">
            Fale diretamente com nossa equipe pelo WhatsApp. Resposta rápida e atendimento personalizado.
          </p>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-cta shadow-cta text-primary-foreground rounded-xl px-10 py-5 text-xl font-bold hover:scale-[1.02] transition-transform animate-pulse-slow"
          >
            <MessageCircle className="w-6 h-6" fill="currentColor" />
            Chamar no WhatsApp
          </a>

          <div className="mt-6 flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-secondary" /> Garantia de 7 dias
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-secondary" /> Atendimento em até 24h
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
