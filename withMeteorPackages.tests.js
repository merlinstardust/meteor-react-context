import {Tinytest} from 'meteor/tinytest';
import {name as packageName} from 'meteor/merlin:react-context';

Tinytest.add('meteor-react-context - example', function (test) {
  test.equal(packageName, 'merlin:react-context');
});
