import { motion } from "framer-motion";
import { SprayCan, Wrench, Snowflake, Thermometer, Building2, FileText } from "lucide-react";

const services = [
  {
    icon: SprayCan,
    title: "Higienização completa",
    desc: "Limpeza de filtro, serpentina, bandeja e turbina com produtos específicos que eliminam fungos, bactérias e odores.",
    tag: "Recomendado a cada 6 meses",
  },
  {
    icon: Wrench,
    title: "Manutenção preventiva",
    desc: "Revisão geral, reaperto de conexões, verificação de dreno e inspeção de componentes para evitar futuras quebras.",
    tag: "Ideal para empresas",
  },
  {
    icon: Snowflake,
    title: "Instalação de splits",
    desc: "Instalações novas ou remanejamento de aparelhos, seguindo as boas práticas recomendadas pelos fabricantes.",
    tag: "Planejamento de pontos",
  },
  {
    icon: Thermometer,
    title: "Avaliação de gás refrigerante",
    desc: "Verificação básica de funcionamento do sistema, orientação sobre recarga e possíveis vazamentos.",
    tag: "Uso com responsabilidade",
  },
  {
    icon: Building2,
    title: "Contratos para empresas",
    desc: "Planos de manutenção programada para escritórios, lojas e pequenos negócios, evitando paradas inesperadas.",
    tag: "Plano sob medida",
  },
  {
    icon: FileText,
    title: "Relatório de serviço",
    desc: "Entrega de checklist ao final da visita, com o que foi verificado e orientações de uso.",
    tag: "Transparência total",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-secondary font-bold text-sm tracking-widest">NOSSOS SERVIÇOS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            Tudo o que seu ar condicionado precisa.
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Atendimento residencial e comercial com foco em segurança, transparência e resultado.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-secondary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{service.desc}</p>
              <span className="inline-block mt-3 text-xs font-semibold text-secondary bg-secondary/10 rounded-full px-3 py-1">
                {service.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
