import './util.js';
import {createPostingPhoto} from './data.js';
import {createMiniatures} from './miniatures';
import './form.js';

createMiniatures(createPostingPhoto());
