# Meteor React Context

A React context wrapper around all client side Meteor packages so they can be passed in as props.

## Use

### Wrap app with MeteorPackages.Provider

`MeteorPackages` houses the [React Context](https://reactjs.org/docs/context.html) Provider and Consumer.

`initialContext` contains all client side package exports that are objects or functions.

Import `MeteorPackages` and `initialContext` into your top level component (here `Layout`) and wrap its contents with `<MeteorPackages.Provider value={initialContext}>`.

```
// Layout.js
import {MeteorPackages, initialContext} from 'meteor/merlin:react-context';
import ContentContainer from './ContentContainer';
const Layout = () => (
  <MeteorPackages.Provider value={initialContext}>
    <ContentContainer />
  </MeteorPackages.Provider>
);
```

### Use withMeteorPackages on component

`withMeteorPackages` is a higher order component that passes in `meteorPackages` as a prop to the component.

Import `withMeteorPackages` into a container and wrap the component with it.

Then in the component, you can access `props.meteorPackages` (or `this.props.meteorPackages` if your component is class).

```
// ContentContainer.js
import withMeteorPackages from 'meteor/merlin:react-context';
// import {withMeteorPackages} from 'meteor/merlin:react-context';
import Content from './Content';

export default withMeteorPackages(Content);

// Content.js
const Content = ({meteorPackages}) => {
  const {Meteor} = meteorPackages;
  return (
    <div />
  );
};
```

### Custom Context

If you do not want all your packages in context, you can create a custom context and pass that in to the Provider instead.

```
// Layout.js
import {MeteorPackages} from 'meteor/merlin:react-context';
import customContext from './customContext';
import ContentContainer from './ContentContainer';
const Layout = () => (
  <MeteorPackages.Provider value={customContext}>
    <ContentContainer />
  </MeteorPackages.Provider>
);

// customContext.js
import {Meteor} from 'meteor/meteor';
// import other packages
const customContext = {
  Meteor,
  // list other packages
};
```
