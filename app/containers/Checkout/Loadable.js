/**
 *
 * Asynchronously loads the component for Checkout
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
