import { Container } from "@mantine/core";
import classnames from "classnames";

import { LANDING_DATA } from "@/constants/features/landing";

import styles from "./styles/index.module.css";

type FooterProps = {
  className?: string;
};

export const Footer = ({ className }: FooterProps) => (
  <footer className={classnames(styles.footer, className)}>
    <Container size="lg">
      <div className={styles.inner}>
        <span className={styles.logo}>{LANDING_DATA.companyName}</span>
        <span className={styles.copyright}>
          © {new Date().getFullYear()} {LANDING_DATA.companyName}. Все права
          защищены.
        </span>
      </div>
    </Container>
  </footer>
);
