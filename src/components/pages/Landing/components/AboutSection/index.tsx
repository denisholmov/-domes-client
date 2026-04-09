import { Container } from "@mantine/core";
import classnames from "classnames";

import { LANDING_DATA } from "@/constants/features/landing";

import styles from "./styles/index.module.css";

type AboutSectionProps = {
  className?: string;
};

export const AboutSection = ({ className }: AboutSectionProps) => (
  <section className={classnames(styles.section, className)} id="about">
    <Container size="lg">
      <div className={styles.inner}>
        <div>
          <h2 className={styles.sectionTitle}>О компании</h2>
          {LANDING_DATA.aboutText.map((paragraph) => (
            <p className={styles.text} key={paragraph.slice(0, 30)}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className={styles.stats}>
          {LANDING_DATA.advantages.map((advantage) => (
            <div className={styles.statItem} key={advantage.label}>
              <div className={styles.statValue}>{advantage.value}</div>
              <div className={styles.statLabel}>{advantage.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
