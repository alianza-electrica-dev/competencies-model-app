import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Tag } from 'primereact/tag';

const calRow = value => {
  switch (true) {
    case value >= 0 && value < 80:
      return 2;
    case value >= 80 && value < 96:
      return 1;
    case value >= 96 && value <= 100:
      return 0;
    default:
      return null;
  }
};

const calCol = value => {
    switch (true) {
    case value >= 0 && value < 2:
      return 0;
    case value >= 2 && value < 2.7:
      return 1;
    case value >= 2.7 && value <= 3:
      return 2;
    default:
      return null;
  }
};

const getColor = value => {

    switch (value){
        case 1:
            return '#70D669'
        case 2:
            return '#98E293'
        case 3:
            return '#C8F0C5'
        case 4:
            return '#D2D2D2'
        case 5:
            return '#5C5C5C'
    }
}

export function RiosGrid({ rios, tests }) {
  const [visible, setVisible] = useState(false);
  
  const periodEJ = 0 ?? rios.filter(item => item.period_id === 1)[0].total ;
  const periodJD = 0 ?? rios.filter(item => item.period_id === 2)[0].total;
  const promRio = parseFloat(((periodEJ + periodJD) / 2).toFixed(2));

  const score = 0 ??
    tests.map(item => item.pivot.score).reduce((acc, act) => acc + act, 0);
  const promCom = parseFloat((score / tests.length).toFixed(2));

  const califMatriz = [
    [4, 2, 1],
    [4, 3, 2],
    [5, 4, 4],
  ];

  const row = calRow(promRio);
  const col = calCol(promCom);

  const finalCalif = califMatriz[row][col];

  const foterEvaluations = () => {
    return (
      <>
        <div className='flex justify-content-end gap-2 px-3'>
          <h4>Calificación Final:</h4>
          <div className='flex'>
             <Tag value={finalCalif} rounded style={{background:getColor(finalCalif), width: '55px', height:'55px', fontSize: '30px'}}></Tag>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className='card flex justify-content-center '>
        <Button
          className='h-3rem'
          label='Ver Mi Evaluación Anual'
          icon='pi pi-graduation-cap'
          onClick={() => setVisible(true)}
          severity='warning'
        />
        <Dialog
          header='Cuadro de evaluación Anual'
          visible={visible}
          style={{ width: '30vw', height: '40vw' }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
          footer={foterEvaluations}
        >
          <div className='flex justify-content-center'>
            <img
              src='/assets/images/CuadroAnual.png'
              alt='Not Found'
              width='350'
            />
          </div>
          <div className='flex flex-column'>
            <div>
              <h4>Competencias</h4>
              <div className='flex flex-column gap-4 ml-5'>
                <div>Puntaje acumulado: <strong>{score}</strong></div>
                <div>Promedio Final: <strong>{promCom}</strong></div>
              </div>
            </div>
            <div>
              <h4>Rios</h4>
              <div className='flex flex-column gap-4 ml-5'> 
                <div>Periodo Enero -Junio: <strong>{periodEJ}</strong></div>
                <div>Periodo Julio - Diciembre: <strong>{periodJD}</strong></div>
                <div>Promedio Final: <strong>{promRio}</strong>%</div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}

RiosGrid.propTypes = {
  rios: PropTypes.arrayOf(PropTypes.object).isRequired,
  tests: PropTypes.arrayOf(PropTypes.object).isRequired,
};
