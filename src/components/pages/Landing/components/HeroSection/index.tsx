import { Button, Container } from "@mantine/core";
import classnames from "classnames";

import { LANDING_DATA } from "@/constants/features/landing";

import styles from "./styles/index.module.css";

type HeroSectionProps = {
  className?: string;
};

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const HeroSection = ({ className }: HeroSectionProps) => (
  <section className={classnames(styles.hero, className)}>
    <Container size="lg">
      <div className={styles.content}>
        <h1 className={styles.title}>{LANDING_DATA.heroTitle}</h1>
        <p className={styles.subtitle}>{LANDING_DATA.heroSubtitle}</p>

        <div className={styles.actions}>
          <Button
            size="lg"
            radius="md"
            color="white"
            variant="filled"
            c="brand.7"
            onClick={() => scrollToSection("#contacts")}
          >
            Обсудить проект
          </Button>
          <Button
            size="lg"
            radius="md"
            variant="outline"
            color="white"
            onClick={() => scrollToSection("#gallery")}
          >
            Наши работы
          </Button>
        </div>
      </div>
    </Container>
  </section>
);
