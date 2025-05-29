import PropTypes from 'prop-types';

export const TableHeader = ({ tableTitle, children }) => {
  return (
    <div className='flex justify-content-between align-item} px-4 pt-4'>
      <span className='text-3xl text-900 font-bold text-secondary'>
        {tableTitle}
      </span>

      {children}
    </div>
  );
};

TableHeader.propTypes = {
  tableTitle: PropTypes.string.isRequired,
  children: PropTypes.node,
};
