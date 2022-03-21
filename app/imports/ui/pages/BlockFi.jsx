import React from 'react';
import TopMenu from '../components/TopMenu';
import MidPage from '../components/MidPage';
import MiddleMenu from '../components/MiddleMenu';
import FooterMenu from '../components/FooterMenu';

export default class Blockfi extends React.Component {

  render() {
    return (
      <div>
        <MidPage/>
        <MiddleMenu/>
      </div>
    );
  }
}
