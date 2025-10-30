// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-fade':
          'radial-gradient(1200px circle at 70% 20%, rgba(168,85,247,0.25), transparent 40%), radial-gradient(800px circle at 10% 80%, rgba(59,130,246,0.18), transparent 40%)',
      },
    },
  },
  plugins: [],
}

export default config
