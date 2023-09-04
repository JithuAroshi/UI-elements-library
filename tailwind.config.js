
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
  textColor: {
    skin: {
      primary: 'var(--primary)',
      primary_dark: 'var(--primary-dark)',
      accent: 'var(--accent)',
      accent_dark: 'var(--accent-dark)',
      success: 'var(--success)',
      success_dark: 'var(--success-dark)',
      destructive: 'var(--destructive)',
      destructive_dark: 'var(--destructive-dark)',
      warning: 'var(--warning)',
      warning_dark: 'var(--warning-dark)',
      info: 'var(--info)',
      info_dark: 'var(--info-dark)',

      primary_font: 'var(--primary-font)',
      secondary_font: 'var(--secondary-font)',
      tertiary_font: 'var(--tertiary-font)',
      primary_font_dark: 'var(--primary-font-dark)',
      secondary_font_dark: 'var(--secondary-font-dark)',
      tertiary_font_dark: 'var(--tertiary-font-dark)',
      button_text_color: 'var(--button-text-color)',

      button_disabled: 'var(--button-disabled)',
    }
  },
  backgroundColor: {
    skin: {
      primary: 'var(--primary)',
      primary_dark: 'var(--primary-dark)',
      accent: 'var(--accent)',
      accent_dark: 'var(--accent-dark)',
      success: 'var(--success)',
      success_dark: 'var(--success-dark)',
      destructive: 'var(--destructive)',
      destructive_dark: 'var(--destructive-dark)',
      warning: 'var(--warning)',
      warning_dark: 'var(--warning-dark)',
      info: 'var(--info)',
      info_dark: 'var(--info-dark)',

      primary_bg: 'var(--primary-bg)',
      secondary_bg: 'var(--secondary-bg)',
      tertiary_bg: 'var(--tertiary-bg)',
      primary_bg_dark: 'var(--primary-bg-dark)',
      secondary_bg_dark: 'var(--secondary-bg-dark)',
      tertiary_bg_dark: 'var(--tertiary-bg-dark)',

      my_bg_1: 'var(--my-bg-1)',
      my_bg_2: 'var(--my-bg-2)',
      my_bg_3: 'var(--my-bg-3)',
      my_bg_1_dark: 'var(--my-bg-1-dark)',
      my_bg_2_dark: 'var(--my-bg-2-dark)',
      my_bg_3_dark: 'var(--my-bg-3-dark)',

      button_disabled: 'var(--button-disabled)',    }
  },
  borderColor: {
    skin: {
      primary: 'var(--primary)',
      primary_dark: 'var(--primary-dark)',
      accent: 'var(--accent)',
      accent_dark: 'var(--accent-dark)',
      success: 'var(--success)',
      success_dark: 'var(--success-dark)',
      destructive: 'var(--destructive)',
      destructive_dark: 'var(--destructive-dark)',
      warning: 'var(--warning)',
      warning_dark: 'var(--warning-dark)',
      info: 'var(--info)',
      info_dark: 'var(--info-dark)',

      button_disabled: 'var(--button-disabled)',

      primary_border: 'var(--primary-bg)',
      secondary_border: 'var(--secondary-bg)',
      tertiary_border: 'var(--tertiary-bg)',
      primary_border_dark: 'var(--primary-bg-dark)',
      secondary_border_dark: 'var(--secondary-bg-dark)',
      tertiary_border_dark: 'var(--tertiary-bg-dark)',
    }
  }
    },
  },
  plugins: [],
}












