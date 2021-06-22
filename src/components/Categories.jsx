import React from 'react';
import '../assets/styles/components/Categories.scss';
import PropTypes from 'prop-types';

const Categories = ({ children, title }) => (
  <div className="categories">
    <h3 className="categories__title">{title}</h3>
    {children}
  </div>
);

Categories.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}

export default Categories;