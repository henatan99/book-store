import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <select className="filter" id="category" name="category" onChange={handleFilterChange}>
      {categories.map((book) => <option key={book} value={book}>{book}</option>)}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
