import { 
  defineConfig,
  presetUno, 
  presetAttributify, 
  presetIcons 
} from 'unocss';

const colors = [
  'blue',
  'green',
  'red',
  'yellow',
  'gray',
];

const icons = [
  'search',
  'edit',
  'check',
  'message',
  'delete',
  'add'
];

const safelist = [
  ...colors.map(v => `bg-${v}-100`),
  ...colors.map(v => `bg-${v}-500`),
  ...colors.map(v => `hover:bg-${v}-700`),
  ...colors.map(v => `border-${v}-500`),
  ...colors.map(v => `hover:border-${v}-700`),
  ...colors.map(v => `text-${v}-500`),
  ...icons.map(v => `i-ic-baseline-${v}`),
  ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
  ...["rounded-full", "rounded-md"],
  'py-1.5',
  'text-white'
];

export default defineConfig({
  safelist,
  presets: [presetUno(), presetAttributify(), presetIcons()]
});
