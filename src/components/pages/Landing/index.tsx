import { AboutSection } from "./components/AboutSection";
import { ContactsSection } from "./components/ContactsSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import styles from "./styles/index.module.css";

export const Landing = () => (
  <div className={styles.wrapper} data-scroll-wrapper>
    <Header />
    <HeroSection className={styles.section} />
    <ServicesSection className={styles.section} />
    <GallerySection className={styles.section} />
    <AboutSection className={styles.section} />
    <ContactsSection className={styles.section} />
    <Footer className={styles.section} />
  </div>
);
