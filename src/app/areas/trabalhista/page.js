"use client";

import styles from "./page.module.css";

export default function Trabalhista() {
  return (
    <div className={styles.trabalhista}>
      <div className={styles.container}>

        {/* HERO / HEADER */}
        <section className={styles.hero}>
          <h1>Direito Trabalhista</h1>
          <div className={styles.line}></div>

          <p className={styles.heroSubtitle}>
            Proteção equilibrada dos direitos do trabalhador e segurança jurídica para empregadores
          </p>

          <p className={styles.heroText}>
            Assessoria especializada em relações de trabalho, prevenção de passivos,
            compliance e defesa estratégica em processos trabalhistas.
          </p>
        </section>
        <hr />

        {/* DESCRIÇÃO */}
        <section className={styles.description}>
          <div className={styles.text}>
            <h2>Atuação Especializada em Direito do Trabalho</h2>

            <p>
              O Direito Trabalhista regula as relações entre empregadores e empregados,
              equilibrando os interesses do capital e do trabalho, com base na CLT,
              Constituição Federal e reformas recentes.
            </p>

            <p>
              Nosso escritório oferece suporte completo e preventivo,
              atuando na redução de riscos trabalhistas, adequação legal e
              representação eficiente tanto para empresas quanto para trabalhadores.
            </p>
          </div>
        </section>
        <hr />

        {/* ÁREAS DE ATUAÇÃO */}
        <section className={styles.services}>
          <h2>Principais Áreas de Atuação</h2>

          <div className={styles.grid}>

            <div className={styles.card}>
              <h3>Consultoria Trabalhista</h3>
              <p>Orientação preventiva para empresas, elaboração de políticas internas, contratos de trabalho e adequação à legislação vigente.</p>
            </div>

            <div className={styles.card}>
              <h3>Relações Sindicais</h3>
              <p>Negociação de acordos e convenções coletivas, gestão de relações sindicais e representação em dissídios coletivos.</p>
            </div>

            <div className={styles.card}>
              <h3>Contencioso Trabalhista</h3>
              <p>Defesa em reclamações trabalhistas, recursos ordinários e extraordinários, execuções e acompanhamento processual.</p>
            </div>

            <div className={styles.card}>
              <h3>Admissão, Demissão e Rescisões</h3>
              <p>Assessoria completa em contratações, dispensas, cálculos rescisórios, homologações e acordos extrajudiciais.</p>
            </div>

            <div className={styles.card}>
              <h3>Compliance e eSocial</h3>
              <p>Auditoria de folha de pagamento, implementação de eSocial, gestão de riscos e prevenção de autuações e passivos.</p>
            </div>

            <div className={styles.card}>
              <h3>Saúde e Segurança do Trabalho</h3>
              <p>Assessoria em NR’s, PCMSO, PPRA/PGR, prevenção de acidentes e defesa em perícias médicas e fiscalizações.</p>
            </div>

            <div className={styles.card}>
              <h3>Terceirização e Pejotização</h3>
              <p>Estruturação legal de contratos de terceirização, quarteirização e outras modalidades de prestação de serviços.</p>
            </div>

            <div className={styles.card}>
              <h3>Jornada, Horas Extras e Regimes Especiais</h3>
              <p>Controle de ponto, banco de horas, escalas especiais, teletrabalho e regimes diferenciados de jornada.</p>
            </div>

          </div>
        </section>

        {/* LEGISLAÇÃO PRINCIPAL */}
        <section className={styles.legislacao}>
          <h2>Legislação Principal</h2>

          <p>
            O Direito do Trabalho no Brasil é regido principalmente pela Constituição Federal,
            pela CLT e por leis complementares que sofreram importantes alterações nas últimas reformas.
          </p>

          <ul>
            <li>Constituição Federal – Arts. 7º a 11 (direitos dos trabalhadores)</li>
            <li>Consolidação das Leis do Trabalho – CLT (Decreto-Lei nº 5.452/1943)</li>
            <li>Reforma Trabalhista – Lei nº 13.467/2017</li>
            <li>Lei de Terceirização – Lei nº 13.429/2017 e Lei nº 13.467/2017</li>
            <li>Medidas Provisórias e Portarias recentes (ex.: MP 1.045/2021 e atualizações do eSocial)</li>
          </ul>
        </section>

      </div>
    </div>
  );
}