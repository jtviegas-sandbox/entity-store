[![Build Status](https://travis-ci.org/jtviegas/entity-store.svg?branch=master)](https://travis-ci.org/jtviegas/entity-store)
[![Coverage Status](https://coveralls.io/repos/github/jtviegas/entity-store/badge.svg?branch=master)](https://coveralls.io/github/jtviegas/entity-store?branch=master)

entity-store
=========

a component that works as a store to generic entities

![overview][overview]

## Installation

  `npm install @jtviegas/entity-store`

## Usage

### required environment variables
    
    - region - aws region ( not mandatory, default: eu-west-1 )
    - AWS_ACCESS_KEY_ID ( mandatory )
    - AWS_SECRET_ACCESS_KEY ( mandatory )
    - DYNDBSTORE_TEST_ENDPOINT ( not mandatory, for testing purposes )

### code snippet example

    let store = require('@jtviegas/entity-store');
    store.entitiesRetrieval(APP, ENV, ENTITY, (e,d)=>{
        logger.info("entitiesRetrieval: %s", d);
        if(e)
            done(e);
        else {
            expect(d.length).to.equal(TEST_ITERATIONS);
            done(null);
        }
    });

    
## Tests

  `npm test`

## Contributing

    just help yourself and submit a pull request
    
 [overview]: assets/overview.png "overview"
