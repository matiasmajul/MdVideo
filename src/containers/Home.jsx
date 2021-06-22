import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';


const Home = ({ searching, myList, trends, originals }) => {

  return (
    <>
      <Header />
      <Search isHome />
      {searching.length > 0 &&
        <Categories title="Encontrado">
          <Carousel>
            {searching.map(item =>
              <CarouselItem
                key={item.id}
                {...item}
              />)}
          </Carousel>
        </Categories>
      }
      {myList.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map(item =>
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales">
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
}

//Solo traigo los elementos que necesito
const mapStateToProps = state => {
  return {
    searching: state.searching,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  }

}

Home.propTypes = {
  searching: PropTypes.array,
  myList: PropTypes.array,
  trends: PropTypes.array,
  originals: PropTypes.array
}

//mapStateToPros = mapeo de props. Pasamos lo que tenemos en nuestro estado a propiedades
//mapDispacthToPros = actions. Mapeamos las acciones. Si tenemos algun evento.
export default connect(mapStateToProps, null)(Home)