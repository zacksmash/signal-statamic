/** Import dependencies */
import UIkitIcons from 'uikit/dist/js/uikit-icons';
import { router } from 'js-dom-router';

/** UIkit Icons Plugin */
UIkit.use(UIkitIcons);

/** Routes */
import site from './views/site';
import home from './views/home';

router
  .on('site', site)
  .on('js--home', home)
  .ready();
