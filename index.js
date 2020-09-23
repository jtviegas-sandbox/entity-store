'use strict';
const winston = require('winston');
const commons = require('@jtviegas/jscommons').commons;
const store = require('@jtviegas/dyndbstore');
const logger = winston.createLogger(commons.getDefaultWinstonConfig());

const entityStore = {

    entityRetrieval: (app, env, entity, id, callback) => {
        logger.debug("[entity-store|entityRetrieval|in] (%s,%s,%s,%s)", app, env, entity, id);
        let table = commons.getTableNameV4(app, entity, env);
        store.getObj(table, id, (e,d) => {
            if(e)
                callback(e);
            else
                callback(null, d);
        });
        logger.debug("[entity-store|entsityRetrieval|out]");
    }

    , entitiesRetrieval: (app, env, entity, params, callback) => {
        logger.debug("[entity-store|entitiesRetrieval|in] (%s,%s,%s,%o)", app, env, entity, params);
        let table = commons.getTableNameV4(app, entity, env);

        if( params ){

        }

        store.findObjsByIdRange(table, 3, 4);

        store.getObjs(table, (e,d) => {
            if(e)
                callback(e);
            else
                callback(null, d);
        });
        logger.debug("[entity-store|entitiesRetrieval|out]");
    }

};

module.exports = entityStore;
