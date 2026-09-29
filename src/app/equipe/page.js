"use client";

import Image from "next/image";
import { Instagram, Linkedin, Mail, X } from "lucide-react";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

/* ================= DADOS ================= */

const socios = [
  {
    tipo: "socio",
    nome: "Dr. Josemário Secco",
    cargo: "Sócio Fundador",
    area: "Direito Empresarial, Civil, Agronegócio & Holding Familiar",
    descricao:
      "Mais de 30 anos de experiência profissional com destacada atuação nas áreas empresarial, civil, agronegócio e holding familiar.",
    imagem: "/images/mario.png",
    bio: `Dr. Josemário Secco é sócio fundador da Secco & Ballin Advogados Associados e possui uma trajetória jurídica consolidada ao longo de mais de 30 anos de experiência profissional, com destacada atuação nas áreas empresarial, civil, agronegócio e holding familiar. 

Graduado em Direito pela Universidade de Passo Fundo, possui especializações em Direito Civil, Direito Constitucional, Direito Ambiental e Recursos Hídricos e Direito Tributário e Legislação de Impostos, além de aprofundamento acadêmico em Direito do Agronegócio e Holding Familiar. Essa formação multidisciplinar fortalece sua visão estratégica e sua capacidade de oferecer soluções jurídicas seguras e alinhadas à realidade de empresários, produtores rurais e grupos familiares. 

Sua trajetória é marcada por cases de sucesso, relacionamento próximo com o cliente e uma advocacia voltada não apenas à resolução de conflitos, mas também à proteção patrimonial, continuidade dos negócios e tomada de decisões estratégicas com respaldo jurídico. 

Ao longo de sua carreira, atuou não apenas na advocacia privada, mas também no meio acadêmico, como professor em instituições de ensino superior em Rondônia e Santa Catarina, lecionando disciplinas como Direito Empresarial, Direito Constitucional, Direito Agrário, Responsabilidade Civil e Direito Tributário. 

Sua vivência institucional também inclui atuação relevante junto à OAB de Vilhena, onde exerceu funções de liderança e representação da classe. 

Reconhecido por sua postura técnica, firme e estratégica, Dr. Josemário Secco reúne experiência em assessoria jurídica empresarial, estruturação patrimonial, prevenção de riscos, suporte ao agronegócio e acompanhamento de demandas complexas, sempre com foco em segurança jurídica, continuidade dos negócios e proteção dos interesses de seus clientes. Sua trajetória é marcada por credibilidade, visão prática e importantes resultados no cenário jurídico regional.`,
  },
  {
    tipo: "socio",
    nome: "Dr. Anderson Ballin",
    cargo: "Sócio",
    area: "Direito Tributário",
    descricao:
      "Especialista em planejamento tributário estratégico e contencioso fiscal.",
    imagem: "",
    bio: "Texto completo detalhado da trajetória profissional...",
  },
];

const equipe = [
  {
    tipo: "equipe",
    nome: "Julio Tiburcio",
    cargo: "Advogado Associado",
    area: "Direito Civil",
    imagem: "",
    bio: "Informações completas sobre Julio Tiburcio...",
  },
  {
    tipo: "equipe",
    nome: "Mariana Depié",
    cargo: "Assistente Jurídica",
    area: "Contencioso",
    imagem: "",
    bio: "Informações completas sobre Mariana Depié...",
  },
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className={styles.page}>

      <section className={styles.container}>
        <div className={styles.contSocios}>
          <div className={styles.titulo}>
            <h1>Sócios Fundadores</h1>
          </div>

          <div className={styles.listaSocios}>
            {socios.map((pessoa, index) => (
              <div key={index} className={styles.socioLinha}>

                <div className={styles.socioImagem}>
                  <Image
                    src={pessoa.imagem}
                    alt={pessoa.nome}
                    fill
                    className={styles.image}
                  />
                </div>

                <div className={styles.socioInfo}>
                  <h2>{pessoa.nome}</h2>
                  <span className={styles.cargo}>{pessoa.cargo}</span>

                  <p className={styles.area}>{pessoa.area}</p>

                  <p className={styles.descricao}>
                    {pessoa.descricao}
                  </p>

                  <button
                    className={styles.botaoPerfil}
                    onClick={() => setSelected(pessoa)}
                  >
                    Ver perfil completo
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
        <hr className={styles.hr}/>
      </section>
      
      <section>
        <div className={styles.contEquipe}>
          <h2 className={styles.subtitulo}>Nossa Equipe</h2>

          <div className={styles.gridEquipe}>
            {equipe.map((pessoa, index) => (
              <div
                key={index}
                className={styles.cardEquipe}
                onClick={() => setSelected(pessoa)}
              >
                <div className={styles.imageWrapperPequena}>
                  <Image
                    src={pessoa.imagem}
                    alt={pessoa.nome}
                    fill
                    className={styles.image}
                  />
                </div>

                <div className={styles.contentEquipe}>
                  <h3>{pessoa.nome}</h3>
                  <span>{pessoa.cargo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelected(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalLeft}>
              <button
                className={styles.closeButton}
                onClick={() => setSelected(null)}
              >
                <X size={28} />
              </button>

              <h2>{selected.nome}</h2>
              <span className={styles.modalCargo}>
                {selected.cargo}
              </span>

              <p className={styles.modalArea}>
                {selected.area}
              </p>

              <p className={styles.modalDescricao}>
                {selected.bio}
              </p>

              <div className={styles.modalIcons}>
                <Linkedin size={28} />
                <Mail size={28} />
                <Instagram size={28} />
              </div>
            </div>

            <div className={styles.modalRight}>
              <Image
                src={selected.imagem}
                alt={selected.nome}
                fill
                className={styles.modalImage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}