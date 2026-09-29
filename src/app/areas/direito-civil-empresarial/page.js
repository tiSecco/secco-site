"use client";

import styles from "./page.module.css";
import FadeContent from '@/components/animations/FadeContent/fadeContent.js'
import AnimatedContent from "@/components/animations/teste/teste.js";

export default function Home() {
  return (
    <div className={styles.direito}>
      <div className={styles.container}>

        {/* HERO */}
        <AnimatedContent distance={60} direction="vertical" duration={1} ease="power3.out" initialOpacity={0} threshold={0.2}>
          <FadeContent blur duration={900}>
            <section className={styles.hero}>
              <h1>Direito Civil e Empresarial</h1>
              <div className={styles.line}></div>

              <p className={styles.heroSubtitle}>
                Soluções jurídicas estratégicas que protegem seu patrimônio,
                fortalecem seus negócios e previnem litígios desnecessários.
              </p>

              <p className={styles.heroText}>
                Atuamos com excelência técnica e visão preventiva,
                oferecendo segurança jurídica a pessoas físicas e empresas que buscam
                tranquilidade e resultados concretos.
              </p>
            </section>
          </FadeContent>
        </AnimatedContent>

        <hr />

        {/* DESCRIÇÃO */}
        <AnimatedContent delay={0.2} distance={60} direction="vertical" duration={0.9} ease="power3.out" initialOpacity={0} threshold={0.2}>
          <FadeContent blur duration={900}>
            <section className={styles.description}>
              <div className={styles.text}>
                <h2>Atuação Especializada e Estratégica</h2>

                <p>
                  O Direito Civil e Empresarial é o alicerce das relações econômicas e patrimoniais.
                  Contratos bem estruturados, gestão adequada de riscos e prevenção de responsabilidades
                  são essenciais para proteger o que você construiu.
                </p>

                <p>
                  Nosso escritório entrega assessoria completa e personalizada,
                  combinando rigor técnico, experiência prática e abordagem preventiva.
                  Priorizamos evitar conflitos, mas estamos preparados para defendê-lo com firmeza quando necessário.
                </p>
              </div>
            </section>
          </FadeContent>
        </AnimatedContent>

        <hr />

        {/* SERVIÇOS */}
        <section className={styles.services}>
          <AnimatedContent delay={0.3} distance={60} direction="vertical" duration={0.9} ease="power3.out" initialOpacity={0} threshold={0.2}>
            <h2>Áreas de Atuação Principais</h2>
          </AnimatedContent>

          <div className={styles.grid}>
            {[
              {
                title: "Contratos Empresariais e Civis",
                desc: "Elaboração, revisão e negociação de contratos complexos com cláusulas de proteção robustas, minimizando riscos e garantindo segurança nas relações negociais."
              },
              {
                title: "Responsabilidade Civil",
                desc: "Defesa e persecução de indenizações por danos materiais, morais e emergentes, com análise estratégica para maximizar resultados ou mitigar exposições."
              },
              {
                title: "Consultoria Empresarial Permanente",
                desc: "Suporte jurídico recorrente para tomada de decisões seguras, compliance contratual e prevenção de contingências societárias e operacionais."
              },
              {
                title: "Estruturação e Reorganização Societária",
                desc: "Planejamento societário, constituição de empresas, alterações contratuais, holdings patrimoniais e sucessão familiar com foco em proteção e eficiência tributária."
              },
              {
                title: "Recuperação de Créditos",
                desc: "Cobrança extrajudicial e judicial eficiente, com estratégias personalizadas para maximizar a recuperabilidade e minimizar custos e prazos."
              },
              {
                title: "Negociação e Solução de Conflitos",
                desc: "Condução de negociações comerciais sensíveis, mediação, acordos extrajudiciais e preparação para arbitragem ou litígio, sempre priorizando o melhor custo-benefício."
              }
            ].map((item, index) => (
              <AnimatedContent
                key={item.title}
                delay={index * 0.1}
                distance={40}
                direction="vertical"
                duration={0.7}
                ease="power3.out"
                initialOpacity={0}
                threshold={0.25}
              >
                <FadeContent blur duration={800}>
                  <div className={styles.card}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </FadeContent>
              </AnimatedContent>
            ))}
          </div>
        </section>

        {/* ATUAÇÃO */}
        <AnimatedContent delay={0.4} distance={60} direction="vertical" duration={0.9} ease="power3.out" initialOpacity={0} threshold={0.2}>
          <FadeContent blur duration={900}>
            <section className={styles.atuacao}>
              <h2>Nossa Forma de Atuar</h2>

              <p>
                Adotamos uma abordagem estratégica, proativa e centrada no cliente.
                Cada demanda é analisada em profundidade para identificar não apenas o problema imediato,
                mas as melhores soluções de médio e longo prazo.
              </p>

              <p>
                Combinamos prevenção rigorosa de riscos jurídicos com atuação contenciosa de alta performance quando necessário,
                sempre com transparência, agilidade e compromisso absoluto com os resultados e a tranquilidade do cliente.
              </p>
            </section>
          </FadeContent>
        </AnimatedContent>

      </div>
    </div>
  );
}