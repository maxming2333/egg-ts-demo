
import { Application } from 'egg';

export default (application: Application) => {
  const { router, controller } = application;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
};
