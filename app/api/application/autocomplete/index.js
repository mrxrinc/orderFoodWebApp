import {app} from '../../constants';
import deRequest from '../../../../app/utils/deRequest';

export const autocompleteResFood = (cityId,query) => deRequest(app.autocomplete_ResFood(cityId,query), 'GET');
