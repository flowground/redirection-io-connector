/**
 * Auto-generated action file for "redirection.io" API.
 *
 * Generated at: 2019-05-07T14:43:50.450Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / redirection-io-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'getAggregateLogCollection'
 * Endpoint Path: '/aggregate-logs'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "page",
    "projectId",
    "createdAt",
    "source",
    "target",
    "statusCode",
    "referrer",
    "userAgent",
    "userAgentType",
    "simplifiedUserAgent",
    "ruleId",
    "instanceName",
    "excludeUrls",
    "excludeEmptyReferrer",
    "createdAt_gt",
    "createdAt_gte",
    "createdAt_lt",
    "createdAt_lte",
    "statusCode_gt",
    "statusCode_gte",
    "statusCode_lt",
    "statusCode_lte"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "page": "page",
    "projectId": "projectId",
    "createdAt": "createdAt",
    "source": "source",
    "target": "target",
    "statusCode": "statusCode",
    "referrer": "referrer",
    "userAgent": "userAgent",
    "userAgentType": "userAgentType",
    "simplifiedUserAgent": "simplifiedUserAgent",
    "ruleId": "ruleId",
    "instanceName": "instanceName",
    "excludeUrls": "excludeUrls",
    "excludeEmptyReferrer": "excludeEmptyReferrer",
    "createdAt_gt": "createdAt_gt",
    "createdAt_gte": "createdAt_gte",
    "createdAt_lt": "createdAt_lt",
    "createdAt_lte": "createdAt_lte",
    "statusCode_gt": "statusCode_gt",
    "statusCode_gte": "statusCode_gte",
    "statusCode_lt": "statusCode_lt",
    "statusCode_lte": "statusCode_lte"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['apiKey'] = cfg['apiKey'];

    let callParams = {
        spec: spec,
        operationId: 'getAggregateLogCollection',
        pathName: '/aggregate-logs',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}