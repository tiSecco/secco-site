"use client";

import styles from "./page.module.css";

export default function Compliance() {
  return (
    <div className={styles.direito}>
      <div className={styles.container}>

        {/* HERO */}
        <section className={styles.hero}>
          <h1>Compliance e Direito Penal Empresarial</h1>
          <div className={styles.line}></div>

          <p className={styles.heroSubtitle}>
            Prevenção de riscos criminais, implementação de programas de compliance e defesa estratégica em investigações e processos penais empresariais.
          </p>

          <p className={styles.heroText}>
            Atuamos com rigor técnico, visão preventiva e conhecimento profundo da legislação penal e anticorrupção, oferecendo proteção jurídica sólida a empresas, executivos e pessoas físicas que buscam integridade, governança e tranquilidade perante o sistema de justiça criminal.
          </p>
        </section>
        <hr />

        {/* DESCRIÇÃO */}
        <section className={styles.description}>
          <div className={styles.text}>
            <h2>Atuação Especializada em Compliance e Direito Penal</h2>

            <p>
              O Direito Penal Empresarial e o Compliance abrangem a prevenção de crimes corporativos, a implementação de programas de integridade (Lei Anticorrupção – 12.846/2013), defesa em inquéritos e ações penais, além de assessoria em investigações administrativas e criminais.
            </p>

            <p>
              Nosso escritório entrega soluções integradas e personalizadas, combinando expertise penal com governança corporativa. Priorizamos a prevenção de riscos criminais, a adequação a normas de compliance e a defesa técnica de alto nível quando necessário.
            </p>
          </div>
        </section>
        <hr />

        {/* ÁREAS DE ATUAÇÃO */}
        <section className={styles.services}>
          <h2>Áreas de Atuação Principais</h2>

          <div className={styles.grid}>

            <div className={styles.card}>
              <h3>Programas de Compliance e Integridade</h3>
              <p>Implantação e auditoria de programas de compliance anticorrupção, códigos de ética, canais de denúncia e treinamentos corporativos em conformidade com a Lei 12.846/2013.</p>
            </div>

            <div className={styles.card}>
              <h3>Direito Penal Empresarial</h3>
              <p>Defesa em crimes contra a ordem tributária, lavagem de dinheiro, corrupção ativa/passiva, crimes ambientais e societários, com foco em executivos e empresas.</p>
            </div>

            <div className={styles.card}>
              <h3>Investigações e Processos Penais</h3>
              <p>Representação em inquéritos policiais, ações penais, acordos de colaboração premiada, leniência e acordos de não persecução penal.</p>
            </div>

            <div className={styles.card}>
              <h3>Crimes Tributários e Financeiros</h3>
              <p>Defesa em sonegação fiscal, crimes contra o sistema financeiro, evasão de divisas e fraudes fiscais, com análise estratégica de nulidades e prescrições.</p>
            </div>

            <div className={styles.card}>
              <h3>Due Diligence Criminal</h3>
              <p>Avaliação de riscos penais em fusões, aquisições, investimentos e parcerias, com identificação de exposições criminais e recomendações de mitigação.</p>
            </div>

            <div className={styles.card}>
              <h3>Crimes Ambientais e Trabalhistas</h3>
              <p>Defesa em crimes ambientais empresariais e crimes trabalhistas (redução fraudulenta de jornada, assédio moral), com foco em responsabilidade penal de pessoas jurídicas.</p>
            </div>

          </div>
        </section>

        {/* COMO ATUAMOS */}
        <section className={styles.atuacao}>
          <h2>Nossa Forma de Atuar</h2>

          <p>
            Adotamos uma abordagem preventiva, estratégica e multidisciplinar. Cada risco é mapeado com profundidade para implementar controles eficazes de compliance e mitigar exposições criminais antes que se concretizem.
          </p>

          <p>
            Combinamos conhecimento avançado em direito penal empresarial com expertise em governança e compliance, sempre com transparência, agilidade e defesa técnica rigorosa quando necessário, garantindo integridade, proteção e continuidade dos negócios.
          </p>
        </section>

      </div>
    </div>
  );
}