import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Camila R.",
    location: "Vila Mariana, SP",
    text: "Excelente serviço! O técnico foi super pontual e profissional. Meu ar parou de fazer barulho e o cheiro sumiu completamente.",
    rating: 5,
  },
  {
    name: "Roberto S.",
    location: "Mooca, SP",
    text: "Contratei para meu escritório, 4 aparelhos. Preço justo e serviço impecável. Já agendei a próxima manutenção.",
    rating: 5,
  },
  {
    name: "Ana Paula M.",
    location: "Tatuapé, SP",
    text: "Atendimento humanizado, explicou tudo o que estava fazendo. Recomendo demais! Nota 10.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-secondary font-bold text-sm tracking-widest">DEPOIMENTOS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            O que nossos clientes dizem.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-accent" fill="currentColor" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed">"{t.text}"</p>
              <div className="mt-4 pt-3 border-t border-border">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
