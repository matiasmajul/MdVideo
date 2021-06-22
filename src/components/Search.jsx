import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchVideo } from '../actions'

const Search = (props) => {
  const { id, cover, title, year, contentRating, duration, isHome } = props;

  const inputStyle = classNames('input', {
    isHome
  });

  const handleChange = (event) => {
    props.searchVideo(event.target.value)
  }



  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className={inputStyle} onChange={handleChange} placeholder="Buscar..." />
    </section>
  );
}

Search.propTypes = {
  isHome: PropTypes.bool
}


const mapDispatchToProps = {
  searchVideo,
}
export default connect(null, mapDispatchToProps)(Search);