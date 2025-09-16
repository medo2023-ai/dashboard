/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
         
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        text: 'var(--text)',
        input: 'var(--input)',
        border: 'var(--border)',
        ring: 'var(--ring)',
        success: 'var(--success)',
        danger: 'var(--danger)',
        choose: 'var(--choose)',
        shadow: 'var(--shadow)',
        rate: 'var(--rate)',
        check: 'var(--check)',
        popup: 'var(--popup)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',

        // Sidebar
        sidebar: 'var(--sidebar)',
        'sidebar-foreground': 'var(--sidebar-foreground)',
        'sidebar-primary': 'var(--sidebar-primary)',
        'sidebar-primary-foreground': 'var(--sidebar-primary-foreground)',
        'sidebar-accent': 'var(--sidebar-accent)',
        'sidebar-accent-foreground': 'var(--sidebar-accent-foreground)',
        'sidebar-border': 'var(--sidebar-border)',
        'sidebar-ring': 'var(--sidebar-ring)',

        // Charts
        chart1: 'var(--chart-1)',
        chart2: 'var(--chart-2)',
        chart3: 'var(--chart-3)',
        chart4: 'var(--chart-4)',
        chart5: 'var(--chart-5)',

        // Custom categories
        electronics: 'var(--color-electronics)',
        accessories: 'var(--color-accessories)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
