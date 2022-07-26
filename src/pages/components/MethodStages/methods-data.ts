export interface MethodsProps {
  phase: string;
  title: string;
  content: string;
}

export const methods: MethodsProps[] = [
  {
    phase: 'Fase 1',
    title: 'Fase Detox',
    content:
      'Duração 1 semana: Fase de Desintoxicação onde o cliente emagrece em média 3% de seu peso corporal.',
  },

  {
    phase: 'Fase 2',
    title: 'Eliminação de peso',
    content:
      'Duração 4 semana: Fase de Emagrecimento rápido onde o cliente elimina em média 5% a 7% de seu peso corporal.',
  },

  {
    phase: 'Fase 3',
    title: 'Reeducação alimentar',
    content:
      'Duração 3 semana: Fase de Reeducação alimentar, para reintroduzir carboidratos de baixos índices glicêmicos.',
  },

  {
    phase: 'Fase 4',
    title: 'Manutenção',
    content:
      'Duração 16 semana: Fase de Equilíbrio e Manutenção para o cliente manter uma alimentação saudável e evitar o efeito sanfona.',
  },
];
