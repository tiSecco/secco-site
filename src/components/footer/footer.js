import styles from "./footer.module.css";
import Link from "next/link";
import { Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        {/* Top Section: Logo + Menus + Contato */}
        <div className={styles.topSection}>
          

          {/* Menus */}
          <div className={styles.grid}>
            <nav className={styles.navColumn}>
              <h4>Escritório</h4>
              <ul>
                <li><Link href="/sobre">Sobre Nós</Link></li>
                <li><Link href="/equipe">Nossa Equipe</Link></li>
                <li><Link href="/carreiras">Carreiras</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </nav>

            <nav className={styles.navColumn}>
              <h4>Áreas de Atuação</h4>
              <ul>
                <li><Link href="/areas/direito-civil-empresarial">Direito Civil e Empresarial</Link></li>
                <li><Link href="/areas/trabalhista">Trabalhista</Link></li>
                <li><Link href="/areas/agronegocio">Agronegócio</Link></li>
                <li><Link href="/areas/tributario">Tributário</Link></li>
                <li><Link href="/areas/complice">Complice</Link></li>
                <li><Link href="/areas/previdenciario">Previdenciário</Link></li>
              </ul>
            </nav>

            <nav className={styles.navColumn}>
              <h4>Recursos</h4>
              <ul>
                <li><Link href="/artigos">Artigos</Link></li>
                <li><Link href="/publicacoes">Publicações</Link></li>
                <li><Link href="/eventos">Eventos</Link></li>
                <li><Link href="/newsletter">Newsletter</Link></li>
              </ul>
            </nav>

            <nav className={styles.navColumn}>
              <h4>Contato Rápido</h4>
              <ul className={styles.contactList}>
                <li><Phone size={16} /> (69) 99999-9999</li>
                <li><Mail size={16} /> contato@seccoeballin.com.br</li>
                <li><MapPin size={16} /> Vilhena - RO</li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Social + Bottom */}
        <div className={styles.bottomSection}>
          <div className={styles.social}>
            <a href="https://instagram.com/seccoeballin" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={28} />
            </a>
            <a href="https://linkedin.com/company/seccoeballin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={28} />
            </a>
          </div>

          <div className={styles.bottom}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} SECCO & BALLIN Advocacia & Consultoria.
            </p>
            <div className={styles.legalLinks}>
              <Link href="/politica-privacidade">Política de Privacidade</Link>
              <span> • </span>
              <Link href="/termos-uso">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}