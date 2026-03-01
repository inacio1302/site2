import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppPromoLink } from "@/lib/whatsapp";

const PromoSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-promo rounded-2xl p-8 md:p-10 relative overflow-hidden"
        >
          {/* Urgency ribbon */}
          <div className="absolute top-6 -right-10 bg-urgency text-accent-foreground text-xs font-bold px-12 py-1.5 rotate-45">
            SOMENTE ESTA SEMANA
          </div>

          <span className="text-accent text-sm font-bold tracking-widest">OFERTA ESPECIAL</span>

          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mt-2">
            Higienização Split até 12.000 BTUs
          </h2>

          <p className="text-primary-foreground/70 mt-3">
            Atendimento residencial e pequenos comércios em São Paulo e região.
          </p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-primary-foreground/60 text-sm">R$</span>
            <span className="text-5xl font-extrabold text-primary-foreground">250</span>
            <span className="text-primary-foreground/50 line-through text-lg">De R$ 280</span>
          </div>

          <p className="text-primary-foreground/60 text-sm mt-2">
            Valor por unidade, para pagamento em dinheiro ou PIX.
          </p>

          <a
            href={getWhatsAppPromoLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full bg-cta shadow-cta text-primary-foreground rounded-xl px-6 py-4 text-lg font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
          >
            <MessageCircle className="w-5 h-5" fill="currentColor" />
            Aproveitar Promoção pelo WhatsApp
          </a>

          <p className="text-accent text-xs mt-3 flex items-center gap-1.5">
            🟠 Vagas reduzidas por dia para garantir qualidade do atendimento.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoSection;
