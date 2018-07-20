import React from 'react';
import {Meteor} from 'meteor/meteor';
import initialContext from './initialContext';

const MeteorPackages = React.createContext();

const withMeteorPackages = (Component) => {
  const WithMeteorPackagesComponent = (props) => (
    <MeteorPackages.Consumer>
      {meteorPackages =>
        <Component {...props} meteorPackages={meteorPackages} />
      }
    </MeteorPackages.Consumer>
  );
  WithMeteorPackagesComponent.displayName = `withMeteorPackages(${Component.displayName})`;
  return WithMeteorPackagesComponent;
};

export const name = 'merlin:react-context';
export {MeteorPackages, initialContext, withMeteorPackages};
export default withMeteorPackages;
