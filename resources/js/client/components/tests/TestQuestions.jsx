import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { RadioButton } from 'primereact/radiobutton';

export const TestQuestions = ({ questions, testName = '' }) => {
  const [visible, setVisible] = useState(false);

  const categories = [
    { name: 'Por debajo de la expectativa', key: 'D', value: 1 },
    { name: 'Cumple con la expectativa', key: 'C', value: 2 },
    { name: 'Excede la expectativa', key: 'E', value: 3 },
  ];

  // Estado para almacenar la selección de categoría para cada pregunta
  const [selectedCategories, setSelectedCategories] = useState(
    questions.reduce((acc, question) => {
      acc[question.id] = categories[1]; // Inicialmente selecciona la categoría "Cumple con la expectativa"
      return acc;
    }, {}),
  );

  const handleCategoryChange = (questionId, category) => {
    setSelectedCategories(prevState => ({
      ...prevState,
      [questionId]: category,
    }));
  };

  return (
    <div className='card flex justify-content-center'>
      <Button
        label='responder'
        icon='pi pi-file-edit'
        onClick={() => setVisible(true)}
      />

      <Dialog
        maximizable
        header={testName}
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => setVisible(false)}
      >
        {questions.map(question => (
          <div key={question.id}>
            <h3>{question.question_text}</h3>
            <div className='card flex'>
              <div className='flex flex-column gap-3'>
                {categories.map(category => (
                  <div key={category.key} className='flex align-items-center'>
                    <RadioButton
                      inputId={`${question.id}-${category.key}`}
                      name={`category-${question.id}`}
                      value={category}
                      onChange={e => handleCategoryChange(question.id, e.value)}
                      checked={
                        selectedCategories[question.id].key === category.key
                      }
                    />
                    <label
                      htmlFor={`${question.id}-${category.key}`}
                      className='ml-2'
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <Button label='Terminar evaluacion' className='mt-5'/>
      </Dialog>
    </div>
  );
};
