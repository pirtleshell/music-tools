// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routes from '../constants/routes.json';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="container" data-tid="container">
        <h2>Home</h2>
        <ul>
          <li>
            <Link to={routes.PIANO}>Piano</Link>
          </li>
          <li>
            <Link to={routes.COUNTER}>Counter</Link>
          </li>
        </ul>
      </div>
    );
  }
}
