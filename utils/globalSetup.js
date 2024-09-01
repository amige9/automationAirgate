const { FullConfig } = require('@playwright/test');

const dotenv = require('dotenv');

async function globalSetup(FullConfig){

    if(process.env.test_env){
        dotenv.config({
            path: `tests/helper/env/.env.${process.env.test_env}`,
            override: true
        })
    }
}

module.exports = globalSetup;