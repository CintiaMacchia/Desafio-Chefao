export interface StateOption {
    readonly value: string;
    readonly label: string;
  }
  
  export const stateOptions: readonly StateOption[] = [
    { value: 'Recentes', label: 'Recentes' },
    { value: 'novos ', label: 'semi - novos'},
    { value: 'AP', label: 'Usados' },

    
  ];
  
