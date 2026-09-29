"use client";

import styles from "./page.module.css";

export default function Previdenciario() {
  return (
    <div className={styles.direito}>
      <div className={styles.container}>

        {/* HERO */}
        <section className={styles.hero}>
          <h1>Direito Previdenciário</h1>
          <div className={styles.line}></div>

          <p className={styles.heroSubtitle}>
            Planejamento previdenciário estratégico, defesa de benefícios e revisão de aposentadorias para garantir seus direitos e a melhor renda possível.
          </p>

          <p className={styles.heroText}>
            Atuamos com excelência técnica e proximidade, oferecendo segurança jurídica a trabalhadores, aposentados, pensionistas e empresas que buscam benefícios justos, revisão de cálculos e proteção integral perante o INSS e a Justiça Previdenciária.
          </p>
        </section>
        <hr />

        {/* DESCRIÇÃO */}
        <section className={styles.description}>
          <div className={styles.text}>
            <h2>Atuação Especializada em Direito Previdenciário</h2>

            <p>
              O Direito Previdenciário garante o acesso a benefícios sociais como aposentadorias, pensões, auxílios e benefícios por incapacidade, com base na Constituição Federal, na Lei 8.213/1991 e nas regras de transição pós-Reforma da Previdência (EC 103/2019).
            </p>

            <p>
              Nosso escritório oferece assessoria completa e personalizada, combinando análise técnica detalhada com experiência prática. Priorizamos o planejamento previdenciário preventivo, a revisão de benefícios e a defesa firme em processos administrativos e judiciais.
            </p>
          </div>
        </section>
        <hr />

        {/* ÁREAS DE ATUAÇÃO */}
        <section className={styles.services}>
          <h2>Áreas de Atuação Principais</h2>

          <div className={styles.grid}>

            <div className={styles.card}>
              <h3>Aposentadorias e Planejamento Previdenciário</h3>
              <p>Análise de tempo de contribuição, melhor idade/tempo para aposentadoria, simulação de benefícios e planejamento para maximizar o valor da aposentadoria.</p>
            </div>

            <div className={styles.card}>
              <h3>Revisão de Benefícios</h3>
              <p>Revisão de aposentadorias por erro de cálculo, inclusão de tempo rural/urbano, atividade especial, revisão da vida toda e outros temas pós-Reforma.</p>
            </div>

            <div className={styles.card}>
              <h3>Auxílio-Doença e Benefícios por Incapacidade</h3>
              <p>Concessão, manutenção e defesa de auxílio por incapacidade temporária/permanente, aposentadoria por invalidez e auxílio-acidente.</p>
            </div>

            <div className={styles.card}>
              <h3>Pensão por Morte e Salário-Maternidade</h3>
              <p>Concessão e defesa de pensão por morte, dependentes, salário-maternidade, auxílio-reclusão e outros benefícios familiares.</p>
            </div>

            <div className={styles.card}>
              <h3>Benefícios Assistenciais (LOAS/BPC)</h3>
              <p>Concessão de Benefício de Prestação Continuada (LOAS) para idosos e pessoas com deficiência, com análise de renda familiar e requisitos legais.</p>
            </div>

            <div className={styles.card}>
              <h3>Defesa Administrativa e Judicial</h3>
              <p>Recursos administrativos no INSS, ações previdenciárias (concessão, revisão, restabelecimento) e defesa em processos contra o INSS na Justiça Federal.</p>
            </div>

          </div>
        </section>

        {/* COMO ATUAMOS */}
        <section className={styles.atuacao}>
          <h2>Nossa Forma de Atuar</h2>

          <p>
            Adotamos uma abordagem preventiva, estratégica e centrada no segurado. Cada caso é analisado com profundidade para identificar o melhor benefício possível, considerando regras de transição, tempo de contribuição e jurisprudência favorável.
          </p>

          <p>
            Combinamos conhecimento técnico atualizado com experiência prática em planejamento previdenciário, revisão de benefícios e defesa judicial, sempre com transparência, agilidade e compromisso absoluto com a garantia dos direitos previdenciários do cliente.
          </p>
        </section>

      </div>
    </div>
  );
}