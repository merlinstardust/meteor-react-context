import React from 'react';
import {Meteor} from 'meteor/meteor';
import initialContext from './initialContext';

const MeteorPackages = React.createContext();

const withMeteorPackages = (Component) => (
  (props) => (
    <MeteorPackages.Consumer>
      {meteorPackages =>
        <Component {...props} meteorPackages={meteorPackages} />
      }
    </MeteorPackages.Consumer>
  )
);

export const name = 'merlin:react-context';

export {MeteorPackages, initialContext, withMeteorPackages};
export default withMeteorPackages;
