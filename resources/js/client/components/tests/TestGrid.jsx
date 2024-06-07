import { TestCard } from './TestCard';

export const TestGrid = ({ tests }) => {
  return (
    <div className='flex flex-wrap gap-1 md:gap-4 xl:gap-8 justify-content-center'>
      {tests.map(test => (
        <TestCard key={test.id} test={test} />
      ))}
    </div>
  );
};
