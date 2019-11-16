
entity-store
=========

a component that works as a store to generic entities

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
