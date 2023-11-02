'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('import-excel')
      .service('myService')
      .getWelcomeMessage();
  },
});
