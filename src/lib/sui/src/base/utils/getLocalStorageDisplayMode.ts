import { localStorage } from '../constants';
import getLocalStorageValue from './getLocalStorageValue';

function getLocalStorageDisplayMode(localStorageId: string) {
  return getLocalStorageValue(localStorageId, localStorage.displayModeKey);
}

export default getLocalStorageDisplayMode;
