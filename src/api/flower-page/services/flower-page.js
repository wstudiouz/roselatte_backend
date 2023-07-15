'use strict';

/**
 * flower-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flower-page.flower-page');
