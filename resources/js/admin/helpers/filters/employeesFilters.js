import { FilterMatchMode } from 'primereact/api';

export const employeesFilters = {
  full_name: { value: null, matchMode: FilterMatchMode.CONTAINS },
  email: { value: null, matchMode: FilterMatchMode.CONTAINS },
  'area.name': { value: null, matchMode: FilterMatchMode.CONTAINS },
  'company.name': { value: null, matchMode: FilterMatchMode.CONTAINS },
};
