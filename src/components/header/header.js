"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  /* scroll header */

  useEffect(() => {

    const handleScroll = () => {
      const threshold = 80;
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  /* fechar submenu ao fechar menu */

  useEffect(() => {
    if (!open) setSubmenuOpen(false);
  }, [open]);

  /* fechar ao trocar de página */

  useEffect(() => {
    setOpen(false);
    setSubmenuOpen(false);
  }, [pathname]);

  /* fechar ao clicar fora */

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setSubmenuOpen(false);
      }

    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  return (

    <header
      ref={headerRef}
          className={`
          ${styles.container}
          ${(!isHome || scrolled) ? styles.solid : ""}
        `}
    >

      <div className={styles.logo}>
        <span className={styles.logoTitle}>SECCO & BALLIN</span>
        <span className={styles.logoSub}>ADVOCACIA & CONSULTORIA</span>
      </div>

      <button
        className={`${styles["menu-toggle"]} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div
          className={styles.backdrop}
          onClick={() => setOpen(false)}
        />
      )}

      <div className={`${styles.nav} ${open ? styles.open : ""}`}>

        <ul className={styles.menu}>

          <li>
            <Link href="/" onClick={() => setOpen(false)}>INÍCIO</Link>
          </li>

          <li>
            <Link href="/#sobre" onClick={() => setOpen(false)}>SOBRE</Link>
          </li>

          <li className={styles.hasSubmenu}>

            <button
              className={styles.submenuToggle}
              aria-haspopup="true"
              aria-expanded={submenuOpen}
              onClick={() => setSubmenuOpen(!submenuOpen)}
            >
              ÁREAS
            </button>

            <ul
              className={`${styles.submenu} ${submenuOpen ? styles.submenuOpen : ""}`}
            >

              <li>
                <Link href="/areas/direito-civil-empresarial" onClick={() => setSubmenuOpen(false)}>
                  Direito Civil e Empresarial
                </Link>
              </li>

              <li>
                <Link href="/areas/trabalhista" onClick={() => setSubmenuOpen(false)}>
                  Trabalhista
                </Link>
              </li>

              <li>
                <Link href="/areas/agronegocio" onClick={() => setSubmenuOpen(false)}>
                  Agronegócio
                </Link>
              </li>

              <li>
                <Link href="/areas/tributario" onClick={() => setSubmenuOpen(false)}>
                  Tributário
                </Link>
              </li>

              <li>
                <Link href="/areas/complice" onClick={() => setSubmenuOpen(false)}>
                  Compliance
                </Link>
              </li>

              <li>
                <Link href="/areas/previdenciario" onClick={() => setSubmenuOpen(false)}>
                  Previdenciário
                </Link>
              </li>

            </ul>

          </li>

          <li>
            <Link href="/equipe" onClick={() => setOpen(false)}>EQUIPE</Link>
          </li>

        </ul>

        <div className={styles.button}>
          <Link href="/#contato" onClick={() => setOpen(false)}>
            CONTATO
          </Link>
        </div>

      </div>

    </header>

  );

}