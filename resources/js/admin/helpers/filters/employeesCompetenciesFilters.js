import { FilterMatchMode } from 'primereact/api';

export const employeesCompetenciesFilters = {
  name: { value: null, matchMode: FilterMatchMode.CONTAINS },
  'competency.name': { value: null, matchMode: FilterMatchMode.CONTAINS },
  'pivot.status.name': { value: null, matchMode: FilterMatchMode.CONTAINS },
  'pivot.status.score': { value: null, matchMode: FilterMatchMode.CONTAINS },
};
