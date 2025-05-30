import {
  responsTemplate,
  indicatorTemplate,
  weighingTemplate,
} from '../../components/table/Riotable/Riotemplates';

export const employeesRioColumns = [
  {
    field: 'responsibility',
    header: 'Responsabilidad',
    body: responsTemplate,
    
    
  },
  {
    field: 'indicator',
    header: 'Indicador',
    body: indicatorTemplate,
    
  },
  {
    field: 'weighing',
    header: 'Ponderación',
    body: weighingTemplate,
    
  },
];
