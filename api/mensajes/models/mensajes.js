'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

 module.exports = {
    lifecycles: {
        afterCreate: async (result, data) => {
            // after create registry from strapi admin
           
            return (data)
        }
  }
}
