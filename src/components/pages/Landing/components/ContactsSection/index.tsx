import { Button, Container, Textarea, TextInput } from "@mantine/core";
import classnames from "classnames";

import { LANDING_DATA } from "@/constants/features/landing";

import styles from "./styles/index.module.css";

type ContactsSectionProps = {
  className?: string;
};

const CONTACT_ITEMS = [
  {
    icon: "📞",
    label: "Телефон",
    value: LANDING_DATA.contacts.phone,
    href: `tel:${LANDING_DATA.contacts.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    icon: "✉️",
    label: "Email",
    value: LANDING_DATA.contacts.email,
    href: `mailto:${LANDING_DATA.contacts.email}`,
  },
  {
    icon: "📍",
    label: "Адрес",
    value: LANDING_DATA.contacts.address,
    href: null,
  },
  {
    icon: "🕐",
    label: "Режим работы",
    value: LANDING_DATA.contacts.workingHours,
    href: null,
  },
];

export const ContactsSection = ({ className }: ContactsSectionProps) => (
  <section className={classnames(styles.section, className)} id="contacts">
    <Container size="lg">
      <h2 className={styles.sectionTitle}>Контакты</h2>
      <p className={styles.sectionSubtitle}>
        Свяжитесь с нами для обсуждения вашего проекта
      </p>

      <div className={styles.grid}>
        <div className={styles.contactCards}>
          {CONTACT_ITEMS.map((item) => (
            <div className={styles.contactCard} key={item.label}>
              <div className={styles.contactIcon}>{item.icon}</div>
              <div>
                <div className={styles.contactLabel}>{item.label}</div>
                <div className={styles.contactValue}>
                  {item.href ? (
                    <a className={styles.contactLink} href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.formWrapper}>
          <h3 className={styles.formTitle}>Оставить заявку</h3>
          <p className={styles.formSubtitle}>
            Опишите ваш проект и мы свяжемся с вами
          </p>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <TextInput label="Ваше имя" placeholder="Иван Иванов" />
            <TextInput
              label="Телефон"
              placeholder="+7 (XXX) XXX-XX-XX"
              type="tel"
            />
            <Textarea
              label="Описание проекта"
              placeholder="Расскажите о вашем проекте: тип объекта, размеры, сроки..."
              minRows={4}
              autosize
            />
            <Button type="submit" size="md" fullWidth>
              Отправить заявку
            </Button>
          </form>
        </div>
      </div>
    </Container>
  </section>
);
