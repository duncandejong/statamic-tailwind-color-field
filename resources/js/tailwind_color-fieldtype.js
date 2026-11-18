import Fieldtype from './TailwindColor.vue';

Statamic.booting(() => {
    Statamic.component('tailwind_color-fieldtype', Fieldtype);
});
