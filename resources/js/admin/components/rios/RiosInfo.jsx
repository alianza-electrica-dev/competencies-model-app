import React from 'react';
import { useRioStepper } from '../../hooks/rios/useRioStepper';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import PropTypes from 'prop-types';

export const RiosInfo = ({ rios }) => {
  const { onStepDescription } = useRioStepper();

  return (
    <>
      <h1>{onStepDescription().title}</h1>
      {/* <p>Información o descripción</p> */}

      <DataTable
        value={rios}
        scrollable
        scrollHeight='flex'
        tableStyle={{ minWidth: '10rem' }}
      >
        <Column
          field='responsability'
          header='Información o descripción'
        ></Column>
      </DataTable>
    </>
  );
};

RiosInfo.propTypes = {
  rios: PropTypes.array.isRequired,
};
