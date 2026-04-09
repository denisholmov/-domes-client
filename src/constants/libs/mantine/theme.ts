// src/theme/index.ts
import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Montserrat, system-ui, sans-serif",

  // Цветовая схема
  primaryColor: "brand",
  primaryShade: { light: 6, dark: 8 },

  // Скругления
  defaultRadius: "md",

  // Брейкпоинты (адаптивность)
  breakpoints: {
    xs: "36em", // 576px
    sm: "48em", // 768px
    md: "62em", // 992px
    lg: "75em", // 1200px
    xl: "88em", // 1408px
  },

  // Цвета
  colors: {
    brand: [
      "#f5f7fa", // 0
      "#e8ecf2", // 1
      "#c9d3e0", // 2
      "#a3b3c9", // 3
      "#7b91af", // 4
      "#5a7699", // 5
      "#3d5f85", // 6
      "#2c4a6e", // 7
      "#1e3a5c", // 8
      "#132d4a", // 9
    ],
    gray: [
      "#f9fafb",
      "#f3f4f6",
      "#e5e7eb",
      "#d1d5db",
      "#9ca3af",
      "#6b7280",
      "#4b5563",
      "#374151",
      "#1f2937",
      "#111827",
    ],
  },

  // Типографика
  headings: {
    fontFamily: "Montserrat, system-ui, sans-serif",
    fontWeight: "600",
    sizes: {
      h1: { fontSize: rem(40), lineHeight: "1.2" },
      h2: { fontSize: rem(32), lineHeight: "1.3" },
      h3: { fontSize: rem(28), lineHeight: "1.3" },
      h4: { fontSize: rem(24), lineHeight: "1.4" },
      h5: { fontSize: rem(20), lineHeight: "1.4" },
      h6: { fontSize: rem(16), lineHeight: "1.5" },
    },
  },

  // Размеры шрифтов
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },

  // Отступы
  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
  },

  // Компоненты - глобальные настройки
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1320,
        },
      },
    },

    TextInput: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
    },

    Button: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },

    Card: {
      defaultProps: {
        radius: "md",
        padding: "lg",
        withBorder: true,
      },
    },

    Paper: {
      defaultProps: {
        radius: "md",
        p: "md",
        withBorder: true,
      },
    },
  },
});
