import {
  indicatorTemplate,
  weighingTemplate,
  objectiveTemplate
} from '../../components/table/Riotable/Riotemplates';

export const employeesRioColumns = [
  {
    field: 'indicator',
    header: 'Indicador',
    body: indicatorTemplate,
    
  },
  {
    field: 'weighing',
    header: 'Pond.',
    body: weighingTemplate,
    
  },
  {
    field: 'objective',
    header: 'Objetivo',
    body: objectiveTemplate,
  }
];
