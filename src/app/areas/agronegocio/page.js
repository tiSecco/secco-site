"use client";

import styles from "./page.module.css";

export default function Agronegocio() {
  return (
    <div className={styles.direito}>
      <div className={styles.container}>

        {/* HERO */}
        <section className={styles.hero}>
          <h1>Direito do Agronegócio</h1>
          <div className={styles.line}></div>

          <p className={styles.heroSubtitle}>
            Soluções jurídicas completas para proteger a produção, o patrimônio rural e o crescimento sustentável do seu negócio agropecuário.
          </p>

          <p className={styles.heroText}>
            Atuamos com visão estratégica e conhecimento profundo do setor, oferecendo segurança jurídica a produtores, cooperativas, agroindústrias e investidores que buscam eficiência, proteção e expansão.
          </p>
        </section>
        <hr />

        {/* DESCRIÇÃO */}
        <section className={styles.description}>
          <div className={styles.text}>
            <h2>Atuação Especializada no Agronegócio</h2>

            <p>
              O Direito do Agronegócio abrange toda a cadeia produtiva rural: desde a propriedade da terra, contratos agrícolas, financiamento rural, sucessão familiar, até questões ambientais, tributárias e societárias específicas do setor.
            </p>

            <p>
              Nosso escritório oferece assessoria integrada e preventiva, combinando expertise jurídica com compreensão real do campo, priorizando a redução de riscos, a regularização fundiária, a proteção patrimonial e o crescimento sustentável do agronegócio.
            </p>
          </div>
        </section>
        <hr />

        {/* ÁREAS DE ATUAÇÃO */}
        <section className={styles.services}>
          <h2>Áreas de Atuação Principais</h2>

          <div className={styles.grid}>

            <div className={styles.card}>
              <h3>Contratos Agrícolas</h3>
              <p>Elaboração e revisão de contratos de compra e venda de safra, arrendamento rural, parceria agrícola, CPR, CRA e outros instrumentos do agronegócio.</p>
            </div>

            <div className={styles.card}>
              <h3>Regularização Fundiária e Usucapião Rural</h3>
              <p>Regularização de imóveis rurais, georreferenciamento, usucapião especial rural, reintegração de posse e defesa possessória.</p>
            </div>

            <div className={styles.card}>
              <h3>Direito Ambiental Rural</h3>
              <p>Assessoria em CAR, PRA, licenciamento ambiental, recuperação de áreas degradadas, outorga de água e cumprimento do Código Florestal.</p>
            </div>

            <div className={styles.card}>
              <h3>Sucessão Familiar e Holding Rural</h3>
              <p>Planejamento sucessório rural, constituição de holdings patrimoniais, doação de imóveis rurais e proteção do patrimônio familiar no agronegócio.</p>
            </div>

            <div className={styles.card}>
              <h3>Financiamento e Crédito Rural</h3>
              <p>Contratos de financiamento, cédulas de produto rural (CPR), análise de risco em operações de crédito rural e defesa em execuções.</p>
            </div>

            <div className={styles.card}>
              <h3>Tributação no Agronegócio</h3>
              <p>Planejamento tributário rural, recuperação de créditos (ICMS, PIS/COFINS), defesa em autos de infração e litígios fiscais do setor.</p>
            </div>

          </div>
        </section>

        {/* COMO ATUAMOS */}
        <section className={styles.atuacao}>
          <h2>Nossa Forma de Atuar</h2>

          <p>
            Adotamos uma abordagem integrada, preventiva e profundamente conectada ao agronegócio. Cada caso é analisado considerando a realidade do campo, a sazonalidade da produção e os desafios específicos do setor.
          </p>

          <p>
            Combinamos conhecimento jurídico especializado com visão prática do agro, priorizando soluções que geram valor real: proteção do patrimônio, redução de riscos, regularização ágil e crescimento sustentável do negócio rural.
          </p>
        </section>

      </div>
    </div>
  );
}