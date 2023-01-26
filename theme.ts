import { buildLegacyTheme, defineConfig } from "sanity";

const props = {
    "--color-white": "#fff",
    "--color-black": "#1a1a1a",
    "--color-primary": "#05dae9",
    "--color-red": "#db4437",
    "--color-yellow": "#f4b400",
    "--color-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    "--black": props["--color-black"],
    "--white": props["--color-white"],
  
    "--gray": "#666",
    "--gray-base": "#666",
  
    "--component-bg": props["--color-black"],
    "--component-text-color": props["--color-white"],
  
    /* Brand */
    "--brand-primary": props["--color-primary"],
  
    // Default button
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--color-primary"],
    "--default-button-success-color": props["--color-green"],
    "--default-button-warning-color": props["--color-yellow"],
    "--default-button-danger-color": props["--color-red"],
  
    /* State */
    "--state-info-color": props["--color-primary"],
    "--state-success-color": props["--color-green"],
    "--state-warning-color": props["--color-yellow"],
    "--state-danger-color": props["--color-red"],
  
    /* Navbar */
    "--main-navigation-color": props["--color-black"],
    "--main-navigation-color--inverted": props["--color-white"],
  
    "--focus-color": props["--color-primary"],
  });