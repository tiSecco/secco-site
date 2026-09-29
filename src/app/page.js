"use client";

import styles from "./page.module.css";
import { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FadeContent from '@/components/animations/FadeContent/fadeContent.js'
import AnimatedContent from "@/components/animations/teste/teste.js";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [area, setArea] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);

  const selectRef = useRef(null);
  const options = [
    "Direito Civil e Empresarial",
    "Trabalhista",
    "Agronegócio",
    "Tributário",
    "Compliance",
    "Previdenciário"
  ];

  function formatPhone(value) {
    const numbers = value.replace(/\D/g, "").slice(0, 11);

    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 3) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3, 7)}-${numbers.slice(7)}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if (telefone && telefone.replace(/\D/g, "").length !== 11) {
      setStatus("error");
      setLoading(false);
      return;
    }

    const formData = new FormData(e.target);

    const data = {
      nome: formData.get("nome"),
      telefone: telefone,
      email: formData.get("email"),
      area: area,
      mensagem: formData.get("mensagem"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        setTelefone("");
        setMensagem("");
        setArea("");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setSelectOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const valores = [
    {
      titulo: "Ética e Integridade Profissional",
      desc: "Honestidade, responsabilidade e respeito ao ordenamento jurídico."
    },
    {
      titulo: "Excelência Técnica",
      desc: "Compromisso permanente com estudo, atualização e qualidade."
    },
    {
      titulo: "Estratégia e Visão Empresarial",
      desc: "Compreensão profunda das dinâmicas do agronegócio e do ambiente empresarial."
    },
    {
      titulo: "Compromisso com o Cliente",
      desc: "Defesa responsável e estratégica dos interesses confiados a nós."
    },
    {
      titulo: "Sigilo e Discrição",
      desc: "Proteção absoluta das informações e interesses dos clientes."
    },
    {
      titulo: "Responsabilidade Institucional",
      desc: "Respeito às instituições, à magistratura e ao Estado de Direito."
    }
  ];

  // função que quebra em grupos de 3
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const linhas = chunkArray(valores, 3);

  return (
    <div className={styles.container}>
      {/* ================= INÍCIO ================= */}
      <section id="inicio" className={styles.inicioSection}>
        <div className={styles.inicioContent}>
          <AnimatedContent distance={60} direction="vertical" duration={1} ease="power3.out" initialOpacity={0} threshold={0.2}>
            <h1 className={styles.inicioTitle}>
              <span className={styles.nameHighlight}>
                Secco <br className={styles.mobileBreak} />
                & <br className={styles.mobileBreak} />
                Ballin
              </span>
            </h1>
          </AnimatedContent>

          <AnimatedContent distance={40} direction="vertical" duration={0.9} ease="power3.out" initialOpacity={0} threshold={0.2} delay={0.2}>
            <span className={styles.subtitlePart}>ADVOGADOS ASSOCIADOS</span>
          </AnimatedContent>

          <AnimatedContent distance={50} direction="vertical" duration={1} ease="power3.out" initialOpacity={0} threshold={0.2} delay={0.4}>
            <p className={styles.inicioSubtitle}>
              Direito estratégico para empresas, patrimônios e agronegócio.
              Atuamos na proteção patrimonial, estruturação jurídica de negócios
              e assessoria especializada ao setor empresarial e agropecuário.
            </p>
          </AnimatedContent>
        </div>
      </section>

      {/* ================= SOBRE ================= */}
      <section id="sobre" className={styles.sobreSection}>
        <div className={styles.inner}>
          <AnimatedContent distance={80} direction="vertical" duration={0.9} ease="power3.out" initialOpacity={0} threshold={0.15}>
            <div className={styles.header}>
              <div className={styles.topWrapper}>
                <span className={styles.line}></span>
                <span className={styles.topText}>QUEM SOMOS</span>
                <span className={styles.line}></span>
              </div>
              <h1 className={styles.titleSobre}>Sobre o Escritório</h1>
              <div className={styles.divider}></div>
            </div>

            <div className={styles.sobreContent}>
              <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out" initialOpacity={0} threshold={0.2} delay={0.1}>
                <div className={styles.sobreText}>
                  <h3>Estrutura Jurídica Moderna e Atuação Estratégica</h3>
                  <p>A Secco & Ballin é uma sociedade de advogados dedicada à prestação de serviços jurídicos especializados, com atuação estratégica voltada à defesa de direitos, proteção patrimonial e estruturação jurídica de empresas e organizações.</p>
                  <p>Com sólida experiência na advocacia empresarial e patrimonial, atua de forma destacada no agronegócio brasileiro, assessorando produtores rurais, empresas agrícolas, famílias empresárias e investidores na condução segura de seus negócios.</p>
                  <p>Nossa atuação combina conhecimento jurídico aprofundado, visão empresarial e análise estratégica, proporcionando segurança jurídica e estabilidade nas relações comerciais e patrimoniais de nossos clientes.</p>
                </div>
              </AnimatedContent>

              <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out" initialOpacity={0} threshold={0.2} delay={0.3}>
                <div className={styles.sobreBox}>
                  <h4>Identidade Institucional</h4>
                  <ul>
                    <li>Estrutura jurídica moderna e especializada</li>
                    <li>Atuação estratégica no meio empresarial</li>
                    <li>Forte presença no agronegócio</li>
                    <li>Proteção patrimonial e planejamento jurídico</li>
                  </ul>
                </div>
              </AnimatedContent>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* ================= MISSÃO, VISÃO E VALORES ================= */}
      <section id="missao-visao" className={styles.missaoSection}>
        <div className={styles.inner}>
          <AnimatedContent distance={80} direction="vertical" duration={1} ease="power3.out" initialOpacity={0} threshold={0.15}>
            <div className={styles.header}>
              <div className={styles.topWrapper}>
                <span className={styles.line}></span>
                <span className={styles.topText}>NOSSA ESSÊNCIA</span>
                <span className={styles.line}></span>
              </div>
              <h1 className={styles.titlemissao}>Missão, Visão e Valores</h1>
              <div className={styles.divider}></div>
            </div>

            <div className={styles.gridMissao}>
              <AnimatedContent className={styles.cardMissao} distance={50} direction="vertical" duration={0.8} ease="power3.out" initialOpacity={0} threshold={0.2} delay={0.1}>
                <div >
                  <h3>Missão</h3>
                  <p>Prestar serviços jurídicos de <strong>excelência técnica</strong> e <strong>estratégica</strong>.</p>
                  <p>Oferecendo soluções seguras para a proteção de direitos, patrimônios, empresas e atividades do agronegócio. Transformar conhecimento jurídico em segurança jurídica, estabilidade empresarial e resultados concretos para nossos clientes.</p>
                </div>
              </AnimatedContent>

              <AnimatedContent className={styles.cardMissao} distance={50} direction="vertical" duration={0.8} ease="power3.out" initialOpacity={0} threshold={0.2} delay={0.2}>
                <div >
                  <h3>Visão</h3>
                  <p>Consolidar-se como referência em advocacia empresarial e jurídica voltada ao agronegócio.</p>
                  <p>Sendo reconhecida pela excelência técnica, confiabilidade institucional e capacidade de oferecer soluções jurídicas sofisticadas para empresas e produtores rurais.</p>
                </div>
              </AnimatedContent>

              <AnimatedContent
                className={styles.cardMissaoValores}
                distance={60}
                direction="vertical"
                duration={0.9}
                ease="power3.out"
                initialOpacity={0}
                threshold={0.15}
                delay={0.3}
              >
                <div>
                  <h3 className={styles.valores}>Valores</h3>

                  <div className={styles.valoresWrapper}>
                    {linhas.map((linha, rowIndex) => (
                      <div key={rowIndex} className={styles.valoresRow}>
                        {linha.map((item, index) => {
                          const numero = rowIndex * 3 + index + 1;

                          return (
                            <div key={numero} className={styles.valorCard}>
                              <span className={styles.numero}>
                                {String(numero).padStart(2, "0")}
                              </span>

                              <h4>{item.titulo}</h4>
                              <p>{item.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>

                </div>
              </AnimatedContent>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* ================= ÁREAS DE ATUAÇÃO ================= */}
      <section id="areas" className={styles.areasSection}>
        <div className={styles.inner}>
          <AnimatedContent distance={80} direction="vertical" duration={0.9} ease="power3.out" initialOpacity={0} threshold={0.15}>
            <div className={styles.header}>
              <div className={styles.topWrapper}>
                <span className={styles.line}></span>
                <span className={styles.topText}>ESPECIALIDADES</span>
                <span className={styles.line}></span>
              </div>
              <h1 className={styles.titleSobre}>Áreas de Atuação</h1>
              <div className={styles.divider}></div>
            </div>

            <div className={styles.gridAreas}>
              {[
                {
                  title: "Direito do Agronegócio",
                  desc: "Assessoria jurídica a produtores rurais, empresas agrícolas e investidores do setor agropecuário, envolvendo contratos agrários."
                },
                {
                  title: "Direito Empresarial",
                  desc: "Assessoria jurídica empresarial, contratos empresariais, reorganizações societárias, governança corporativa e estruturação de negócios."
                },
                {
                  title: "Direito Societário",
                  desc: "Constituição de sociedades, acordos de sócios, dissoluções societárias, exclusão de sócios e apuração de haveres."
                },
                {
                  title: "Planejamento Patrimonial e Sucessório",
                  desc: "Estruturação de holdings familiares, proteção patrimonial e planejamento sucessório empresarial e rural."
                },
                {
                  title: "Direito Civil e Contratual",
                  desc: "Elaboração, revisão e gestão de contratos, responsabilidade civil e litígios contratuais."
                },
                {
                  title: "Contencioso Estratégico",
                  desc: "Atuação judicial em demandas complexas envolvendo empresas, patrimônio e agronegócio."
                }
              ].map((item, index) => (
                <AnimatedContent
                  key={item.title}
                  distance={40}
                  direction="vertical"
                  duration={0.7}
                  ease="power3.out"
                  initialOpacity={0}
                  threshold={0.25}
                  delay={index * 0.08}
                >
                  <div className={styles.areaCard}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* ================= COMPROMISSO FINAL ================= */}
      <section className={styles.compromissoSection}>
        <div className={styles.inner}>
          <AnimatedContent distance={80} direction="vertical" duration={1} ease="power3.out" initialOpacity={0} threshold={0.2}>
            <div className={styles.compromissoContent}>
              <h2>Compromisso Institucional</h2>
              <p>Na Secco & Ballin – Empresa Jurídica, cada demanda é tratada com responsabilidade, profundidade técnica e visão estratégica.</p>
              <p>Nossa atuação parte da convicção de que o Direito deve servir como instrumento de segurança jurídica, proteção patrimonial e desenvolvimento sustentável das atividades empresariais e do agronegócio.</p>
              <p>Buscamos atuar como parceiros jurídicos estratégicos de nossos clientes, contribuindo para a estabilidade e o crescimento seguro de seus negócios.</p>

              <div className={styles.sloganFinal}>
                <h3>SECCO & BALLIN</h3>
                <p>Empresa Jurídica</p>
                <p className={styles.sloganText}>Direito. Estratégia. Segurança Jurídica.</p>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* ================= CONTATO ================= */}
      <section id="contato">
        <div className={styles.content}>
          <div className={styles.inner}>
            <AnimatedContent distance={80} direction="vertical" duration={0.9} ease="power3.out" initialOpacity={0} threshold={0.15}>
              <div className={styles.header}>
                <div className={styles.topWrapper}>
                  <span className={styles.line}></span>
                  <span className={styles.topText}>ENTRE EM CONTATO</span>
                  <span className={styles.line}></span>
                </div>
                <h1 className={styles.titleContato}>Fale com Nossa Equipe</h1>
                <div className={styles.divider}></div>
              </div>
            </AnimatedContent>
          </div>

          <div className={styles.inner}>
            <div className={styles.left}>
              <div className={styles.leftStack}>
                {[
                  { icon: MapPin, title: "ENDEREÇO", text: "Av. Cap. Castro, 3446 - Centro\nVilhena, RO — 76980-228" },
                  { icon: Phone, title: "TELEFONE", text: "(11) 3045-7890 | (11) 99900-1234" },
                  { icon: Mail, title: "E-MAIL", text: "contato@seccoeballin.com.br" },
                  { icon: Clock, title: "HORÁRIO", text: "Seg — Sex: 8h às 12h / 14h às 18h\nSáb: 8h às 12h" }
                ].map((item, index) => (
                  <AnimatedContent
                    key={item.title}
                    delay={index * 0.1 + 0.1}
                    distance={40}
                    direction="vertical"
                    duration={0.7}
                    ease="power3.out"
                    initialOpacity={0}
                    threshold={0.25}
                  >
                    <FadeContent blur duration={800}>
                      <div className={styles.item}>
                        <div className={styles.iconBox}><item.icon size={18} /></div>
                        <div>
                          <h5>{item.title}</h5>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </FadeContent>
                  </AnimatedContent>
                ))}

                <AnimatedContent
                  delay={0.5}
                  distance={40}
                  direction="vertical"
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  threshold={0.25}
                >
                  <FadeContent blur duration={900}>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Av.+Cap.+Castro,+3446,+Centro,+Vilhena,+RO,+76980-228"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mapCard}
                    >
                      <div className={styles.mapOverlay}>
                        <div className={styles.mapIcon}>
                          <MapPin size={28} />
                        </div>
                        <h3>Av. Cap. Castro, 3446</h3>
                        <p>Vilhena - RO</p>
                      </div>
                    </a>
                  </FadeContent>
                </AnimatedContent>
              </div>
            </div>

            <AnimatedContent
              delay={0.3}
              distance={60}
              direction="vertical"
              duration={0.9}
              ease="power3.out"
              initialOpacity={0}
              threshold={0.2}
            >
              <FadeContent blur duration={900}>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <h1 className={styles.formTitle}>Entre em Contato</h1>
                  <div className={styles.row}>
                    <div className={styles.inputGroup}>
                      <label>NOME COMPLETO *</label>
                      <input name="nome" placeholder="Seu Nome" type="text" required maxLength={80} />
                    </div>

                    <div className={styles.inputGroup}>
                      <label>TELEFONE</label>
                      <input
                        name="telefone"
                        placeholder="(99) 9 9999-9999"
                        type="tel"
                        value={telefone}
                        onChange={(e) => setTelefone(formatPhone(e.target.value))}
                        inputMode="numeric"
                      />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.inputGroup}>
                      <label>E-MAIL *</label>
                      <input name="email" placeholder="Ex: seu@gmail.com" type="email" required maxLength={120} />
                    </div>

                    <div className={styles.inputGroup}>
                      <label>ÁREA JURÍDICA</label>
                      <div className={styles.customSelect} ref={selectRef}>
                        <button
                          type="button"
                          className={styles.selectHeader}
                          onClick={() => setSelectOpen(!selectOpen)}
                        >
                          <span>{area || "Selecione uma área"}</span>
                          <ChevronDown
                            size={18}
                            className={`${styles.arrow} ${selectOpen ? styles.rotate : ""}`}
                          />
                        </button>

                        {selectOpen && (
                          <ul className={styles.selectOptions}>
                            {options.map((option) => (
                              <li
                                key={option}
                                onClick={() => {
                                  setArea(option);
                                  setSelectOpen(false);
                                }}
                              >
                                {option}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>MENSAGEM *</label>
                    <textarea
                      name="mensagem"
                      placeholder="Descreva brevemente o seu caso..."
                      rows={6}
                      required
                      maxLength={1000}
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                    />
                    <span style={{ marginTop: "5px", color: "white" }}>
                      {mensagem.length}/1000
                    </span>
                  </div>

                  <button type="submit" className={styles.button} disabled={loading}>
                    {loading ? "Enviando..." : <>ENVIAR MENSAGEM <Send size={16} /></>}
                  </button>

                  {status === "success" && (
                    <div className={styles.success}>
                      Mensagem enviada com sucesso! Em breve entraremos em contato.
                    </div>
                  )}

                  {status === "error" && (
                    <div className={styles.error}>
                      Ocorreu um erro ao enviar. Tente novamente.
                    </div>
                  )}

                  <span className={styles.privacy}>
                    Suas informações são tratadas com total sigilo e confidencialidade.
                  </span>
                </form>
              </FadeContent>
            </AnimatedContent>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/5599999999999"
        target="_blank"
        className={styles.whatsappContainer}
      >
        <span className={styles.whatsappText}>WhatsApp</span>

        <div className={styles.whatsappButton}>
          <FaWhatsapp
            size={36}
          />
        </div>
      </a>
    </div>
  );
}

