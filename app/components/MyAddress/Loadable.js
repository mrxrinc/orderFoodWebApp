/**
 *
 * Asynchronously loads the component for MyAddress
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
