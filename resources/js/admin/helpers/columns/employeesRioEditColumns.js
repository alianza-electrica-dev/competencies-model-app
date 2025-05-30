import {
  realTemplate,
  complianceTemplate,
  observationsTemplate,
} from '../../components/table/Riotable/Riotemplates';

export const employeesRioEditColumns = [
   {
    field: 'real',
    header: 'Real',
    body: realTemplate,
   
  },
  {
    field: 'compliance',
    header: 'Cumplimiento',
    body: complianceTemplate,
   
  },
  {
    field: 'observations',
    header: 'Observaciones',
    body: observationsTemplate,
    
  },
];
