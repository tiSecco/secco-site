"use client";

import styles from "./page.module.css";

export default function Tributario() {
  return (
    <div className={styles.direito}>
      <div className={styles.container}>

        {/* HERO */}
        <section className={styles.hero}>
          <h1>Direito Tributário</h1>
          <div className={styles.line}></div>

          <p className={styles.heroSubtitle}>
            Planejamento tributário estratégico, defesa em litígios fiscais e recuperação de créditos para reduzir carga tributária e proteger seu patrimônio.
          </p>

          <p className={styles.heroText}>
            Atuamos com excelência técnica e visão preventiva, oferecendo soluções jurídicas seguras para pessoas físicas, empresas e produtores que buscam eficiência fiscal, compliance e tranquilidade perante o Fisco.
          </p>
        </section>
        <hr />

        {/* DESCRIÇÃO */}
        <section className={styles.description}>
          <div className={styles.text}>
            <h2>Atuação Especializada em Direito Tributário</h2>

            <p>
              O Direito Tributário regula as relações entre o contribuinte e o Fisco, abrangendo planejamento fiscal, contencioso administrativo e judicial, recuperação de créditos e compliance tributário.
            </p>

            <p>
              Nosso escritório entrega assessoria integrada e personalizada, combinando rigor técnico, experiência prática e abordagem estratégica. Priorizamos a prevenção de autuações e a minimização da carga tributária, mas estamos preparados para a defesa firme em processos complexos.
            </p>
          </div>
        </section>
        <hr />

        {/* ÁREAS DE ATUAÇÃO */}
        <section className={styles.services}>
          <h2>Áreas de Atuação Principais</h2>

          <div className={styles.grid}>

            <div className={styles.card}>
              <h3>Planejamento Tributário</h3>
              <p>Estruturação societária, escolha de regime tributário, operações de reorganização e planejamento sucessório com foco na redução legal da carga tributária.</p>
            </div>

            <div className={styles.card}>
              <h3>Contencioso Tributário</h3>
              <p>Defesa em autos de infração, impugnações, recursos administrativos e ações judiciais (mandado de segurança, anulatória, repetição de indébito).</p>
            </div>

            <div className={styles.card}>
              <h3>Recuperação de Créditos Tributários</h3>
              <p>Identificação e recuperação de créditos de ICMS, PIS/COFINS, IPI, IRPJ/CSLL e outros, inclusive via compensação e restituição administrativa/judicial.</p>
            </div>

            <div className={styles.card}>
              <h3>Compliance e Gestão de Riscos Tributários</h3>
              <p>Auditoria tributária, adequação a obrigações acessórias, implementação de governança fiscal e prevenção de contingências tributárias.</p>
            </div>

            <div className={styles.card}>
              <h3>Tributação no Agronegócio e Rural</h3>
              <p>Planejamento fiscal rural, benefícios fiscais (Lei Kandir, FUNRURAL, exportação), defesa em autuações e recuperação de créditos do setor agropecuário.</p>
            </div>

            <div className={styles.card}>
              <h3>Consultoria em Operações Estruturadas</h3>
              <p>Análise tributária de fusões, aquisições, incorporações, cisões, holdings e investimentos, com mitigação de riscos fiscais.</p>
            </div>

          </div>
        </section>

        {/* COMO ATUAMOS */}
        <section className={styles.atuacao}>
          <h2>Nossa Forma de Atuar</h2>

          <p>
            Adotamos uma abordagem estratégica, preventiva e centrada no contribuinte. Cada operação ou litígio é analisado com profundidade para identificar oportunidades de economia fiscal e mitigar riscos perante o Fisco.
          </p>

          <p>
            Combinamos conhecimento técnico avançado com experiência prática em planejamento tributário, contencioso fiscal e recuperação de créditos, sempre com transparência, agilidade e compromisso absoluto com a segurança jurídica e a redução da carga tributária do cliente.
          </p>
        </section>

      </div>
    </div>
  );
}