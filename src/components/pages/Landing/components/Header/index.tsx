import { Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classnames from "classnames";
import { useEffect, useState } from "react";

import styles from "./styles/index.module.css";

const NAV_ITEMS = [
  { label: "Услуги", href: "#services" },
  { label: "Галерея", href: "#gallery" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [opened, { toggle, close }] = useDisclosure(false);

  useEffect(() => {
    const wrapper = document.querySelector("[data-scroll-wrapper]");

    const handleScroll = () => {
      const scrollTop = wrapper ? wrapper.scrollTop : window.scrollY;

      setScrolled(scrollTop > 20);
    };

    const target = wrapper || window;

    target.addEventListener("scroll", handleScroll);

    return () => target.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    close();
  };

  return (
    <header
      className={classnames(styles.header, {
        [styles.headerScrolled]: scrolled,
      })}
    >
      <Container size="lg">
        <div className={styles.inner}>
          <span className={styles.logo}>КровлиСтрой</span>

          <nav>
            <ul className={styles.nav}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    className={styles.navLink}
                    onClick={() => handleNavClick(item.href)}
                    type="button"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <Burger
            className={styles.burger}
            opened={opened}
            onClick={toggle}
            size="sm"
            aria-label="Меню навигации"
          />
        </div>

        {opened && (
          <nav>
            <ul className={styles.mobileNav}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    className={styles.navLink}
                    onClick={() => handleNavClick(item.href)}
                    type="button"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
};
