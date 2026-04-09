import { Container } from "@mantine/core";
import classnames from "classnames";

import { LANDING_DATA } from "@/constants/features/landing";

import styles from "./styles/index.module.css";

type GallerySectionProps = {
  className?: string;
};

export const GallerySection = ({ className }: GallerySectionProps) => (
  <section className={classnames(styles.section, className)} id="gallery">
    <Container size="lg">
      <h2 className={styles.sectionTitle}>Наши работы</h2>
      <p className={styles.sectionSubtitle}>
        Примеры выполненных проектов по всей России
      </p>

      <div className={styles.grid}>
        {LANDING_DATA.gallery.map((item) => (
          <div className={styles.imageWrapper} key={item.alt}>
            <div className={styles.placeholder}>
              <span className={styles.placeholderIcon}>📷</span>
              <span>{item.alt}</span>
            </div>
            <div className={styles.overlay}>{item.alt}</div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
