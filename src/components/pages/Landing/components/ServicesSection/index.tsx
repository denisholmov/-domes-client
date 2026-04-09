import { Container } from "@mantine/core";
import classnames from "classnames";

import { LANDING_DATA } from "@/constants/features/landing";

import styles from "./styles/index.module.css";

type ServicesSectionProps = {
  className?: string;
};

const SERVICE_ICONS: Record<string, string> = {
  dome: "⛪",
  roof: "🏠",
  delivery: "🚚",
  restore: "🔧",
};

export const ServicesSection = ({ className }: ServicesSectionProps) => (
  <section className={classnames(styles.section, className)} id="services">
    <Container size="lg">
      <h2 className={styles.sectionTitle}>Наши услуги</h2>
      <p className={styles.sectionSubtitle}>
        Полный спектр работ по изготовлению куполов и кровле
      </p>

      <div className={styles.grid}>
        {LANDING_DATA.services.map((service) => (
          <article className={styles.card} key={service.title}>
            <div className={styles.cardIcon}>{SERVICE_ICONS[service.icon]}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
