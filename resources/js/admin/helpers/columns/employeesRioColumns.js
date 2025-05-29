import {
  realTemplate,
  complianceTemplate,
  observationsTemplate,
  responsTemplate,
  indicatorTemplate,
  weighingTemplate,
  periodTemplate,
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
  {
    field: 'period',
    header: 'Período',
    body: periodTemplate,
  },
];
