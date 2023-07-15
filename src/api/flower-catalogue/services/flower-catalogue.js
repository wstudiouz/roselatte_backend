'use strict';

/**
 * flower-catalogue service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flower-catalogue.flower-catalogue');
