# ![LOGO](logo.png) redirection.io **flow**ground Connector

## Description

A generated **flow**ground connector for the redirection.io API (version 1.1.0).

Generated from: https://api.apis.guru/v2/specs/redirection.io/1.1.0/swagger.json<br/>
Generated at: 2019-05-07T17:43:50+03:00

## API Description

API documentation for redirection.io

## Authorization

Supported authorization schemes:
- API Key
## Actions

### Creates a AgentFlushAggregateRequest resource.

*Tags:* `AgentFlushAggregateRequest`

### Creates a AgentFlushRequest resource.

*Tags:* `AgentFlushRequest`

### Creates a Instance resource.

*Tags:* `Instance`

### Replaces the Instance resource.

*Tags:* `Instance`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of Rule resources.

*Tags:* `Rule`

#### Input Parameters
* `projectId` - _required_

### Retrieves the collection of Rule resources.

*Tags:* `Rule`

#### Input Parameters
* `projectId` - _required_

### Retrieves the collection of Rule resources.

*Tags:* `Rule`

#### Input Parameters
* `projectId` - _required_

### Retrieves the collection of AggregateLog resources.

*Tags:* `AggregateLog`

#### Input Parameters
* `page` - _optional_ - The collection page number
* `projectId` - _optional_
* `createdAt` - _optional_
* `source` - _optional_
* `target` - _optional_
* `statusCode` - _optional_
* `referrer` - _optional_
* `userAgent` - _optional_
* `userAgentType` - _optional_
* `simplifiedUserAgent` - _optional_
* `ruleId` - _optional_
* `instanceName` - _optional_
* `excludeUrls` - _optional_
* `excludeEmptyReferrer` - _optional_
* `createdAt_gt` - _optional_
* `createdAt_gte` - _optional_
* `createdAt_lt` - _optional_
* `createdAt_lte` - _optional_
* `statusCode_gt` - _optional_
* `statusCode_gte` - _optional_
* `statusCode_lt` - _optional_
* `statusCode_lte` - _optional_

### Retrieves a AggregateLog resource.

*Tags:* `AggregateLog`

#### Input Parameters
* `id` - _required_

### Retrieves a ComputedStatistic resource.

*Tags:* `ComputedStatistic`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of CrawlUrl resources.

*Tags:* `CrawlUrl`

#### Input Parameters
* `page` - _optional_ - The collection page number

### Retrieves a CrawlUrl resource.

*Tags:* `CrawlUrl`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of Crawl resources.

*Tags:* `Crawl`

#### Input Parameters
* `projectId` - _required_
* `firstUrl` - _optional_
* `sort[createdAt]` - _optional_
* `page` - _optional_ - The collection page number

### Creates a Crawl resource.

*Tags:* `Crawl`

### Retrieves a Crawl resource.

*Tags:* `Crawl`

#### Input Parameters
* `id` - _required_

### Creates a Crawl resource.

*Tags:* `Crawl`

#### Input Parameters
* `id` - _required_

### Creates a ExplainUrl resource.

*Tags:* `ExplainUrl`

### Retrieves a ExplainUrl resource.

*Tags:* `ExplainUrl`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of Rule resources.

*Tags:* `Rule`

#### Input Parameters
* `projectId` - _required_
* `isEnabled` - _optional_
* `isEnabled[]` - _optional_
* `sort[id]` - _optional_
* `sort[viewCount]` - _optional_
* `sort[isEnabled]` - _optional_

### Creates a ImpactRuleChange resource.

*Tags:* `ImpactRuleChange`

### Retrieves a ImpactRuleChange resource.

*Tags:* `ImpactRuleChange`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of Import resources.

*Tags:* `Import`

#### Input Parameters
* `projectId` - _required_
* `page` - _optional_ - The collection page number

### Creates a Import resource.

*Tags:* `Import`

### Retrieves a Import resource.

*Tags:* `Import`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of Instance resources.

*Tags:* `Instance`

#### Input Parameters
* `projectId` - _required_

### Retrieves a Instance resource.

*Tags:* `Instance`

#### Input Parameters
* `id` - _required_

### Replaces the Instance resource.

*Tags:* `Instance`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of Invitation resources.

*Tags:* `Invitation`

#### Input Parameters
* `targetId` - _required_
* `targetType` - _required_

### Creates a Invitation resource.

*Tags:* `Invitation`

### Creates a Invitation resource.

*Tags:* `Invitation`

#### Input Parameters
* `token` - _required_ - The invitation acceptation token

### Removes the Invitation resource.

*Tags:* `Invitation`

#### Input Parameters
* `id` - _required_

### Retrieves a Invitation resource.

*Tags:* `Invitation`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of Log resources.

*Tags:* `Log`

#### Input Parameters
* `page` - _optional_ - The collection page number
* `projectId` - _optional_
* `createdAt` - _optional_
* `source` - _optional_
* `target` - _optional_
* `statusCode` - _optional_
* `referrer` - _optional_
* `userAgent` - _optional_
* `userAgentType` - _optional_
* `simplifiedUserAgent` - _optional_
* `ruleId` - _optional_
* `instanceName` - _optional_
* `excludeUrls` - _optional_
* `excludeEmptyReferrer` - _optional_
* `createdAt_gt` - _optional_
* `createdAt_gte` - _optional_
* `createdAt_lt` - _optional_
* `createdAt_lte` - _optional_
* `statusCode_gt` - _optional_
* `statusCode_gte` - _optional_
* `statusCode_lt` - _optional_
* `statusCode_lte` - _optional_

### Retrieves a Log resource.

*Tags:* `Log`

#### Input Parameters
* `id` - _required_

### Creates a Marker resource.

*Tags:* `Marker`

### Removes the Marker resource.

*Tags:* `Marker`

#### Input Parameters
* `id` - _required_

### Retrieves a Marker resource.

*Tags:* `Marker`

#### Input Parameters
* `id` - _required_

### Replaces the Marker resource.

*Tags:* `Marker`

#### Input Parameters
* `id` - _required_

### Creates a MatchingUrl resource.

*Tags:* `MatchingUrl`

### Retrieves a MatchingUrl resource.

*Tags:* `MatchingUrl`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of Notification resources.

*Tags:* `Notification`

#### Input Parameters
* `page` - _optional_ - The collection page number

### Retrieves a Notification resource.

*Tags:* `Notification`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of Organization resources.

*Tags:* `Organization`

### Creates a Organization resource.

*Tags:* `Organization`

### Removes the Organization resource.

*Tags:* `Organization`

#### Input Parameters
* `id` - _required_

### Retrieves a Organization resource.

*Tags:* `Organization`

#### Input Parameters
* `id` - _required_

### Replaces the Organization resource.

*Tags:* `Organization`

#### Input Parameters
* `id` - _required_

### Creates a AgentFlushRequest resource.

*Tags:* `AgentFlushRequest`

### Retrieves the collection of Project resources.

*Tags:* `Project`

### Creates a Project resource.

*Tags:* `Project`

### Removes the Project resource.

*Tags:* `Project`

#### Input Parameters
* `id` - _required_

### Retrieves a Project resource.

*Tags:* `Project`

#### Input Parameters
* `id` - _required_

### Replaces the Project resource.

*Tags:* `Project`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of PublishHistory resources.

*Tags:* `PublishHistory`

#### Input Parameters
* `projectId` - _required_
* `createdAt[before]` - _optional_
* `createdAt[strictly_before]` - _optional_
* `createdAt[after]` - _optional_
* `createdAt[strictly_after]` - _optional_
* `page` - _optional_ - The collection page number

### Retrieves a PublishHistory resource.

*Tags:* `PublishHistory`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of RuleChange resources.

*Tags:* `RuleChange`

#### Input Parameters
* `versionId` - _required_
* `page` - _optional_ - The collection page number

### Creates a RuleChange resource.

*Tags:* `RuleChange`

### Removes the RuleChange resource.

*Tags:* `RuleChange`

#### Input Parameters
* `id` - _required_

### Retrieves a RuleChange resource.

*Tags:* `RuleChange`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of RuleSetVersion resources.

*Tags:* `RuleSetVersion`

#### Input Parameters
* `projectId` - _required_
* `sort[createdAt]` - _optional_
* `page` - _optional_ - The collection page number

### Retrieves a RuleSetVersion resource.

*Tags:* `RuleSetVersion`

#### Input Parameters
* `id` - _required_

### Clear a version

*Tags:* `RuleSetVersion`

#### Input Parameters
* `id` - _required_ - The id of the version

### Publish a version

*Tags:* `RuleSetVersion`

#### Input Parameters
* `id` - _required_ - The id of the version

### Retrieves the collection of Rule resources.

*Tags:* `Rule`

#### Input Parameters
* `projectId` - _required_
* `isEnabled` - _optional_
* `isEnabled[]` - _optional_
* `sort[id]` - _optional_
* `sort[viewCount]` - _optional_
* `sort[isEnabled]` - _optional_
* `page` - _optional_ - The collection page number

### Retrieves a Rule resource.

*Tags:* `Rule`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of ComputedStatistic resources.

*Tags:* `ComputedStatistic`

#### Input Parameters
* `projectId` - _required_

### Creates a UserOrganization resource.

*Tags:* `UserOrganization`

### Removes the UserOrganization resource.

*Tags:* `UserOrganization`

#### Input Parameters
* `id` - _required_

### Retrieves a UserOrganization resource.

*Tags:* `UserOrganization`

#### Input Parameters
* `id` - _required_

### Replaces the UserOrganization resource.

*Tags:* `UserOrganization`

#### Input Parameters
* `id` - _required_

### Retrieves a UserProjectFlattened resource.

*Tags:* `UserProjectFlattened`

#### Input Parameters
* `id` - _required_

### Creates a UserProject resource.

*Tags:* `UserProject`

### Removes the UserProject resource.

*Tags:* `UserProject`

#### Input Parameters
* `id` - _required_

### Retrieves a UserProject resource.

*Tags:* `UserProject`

#### Input Parameters
* `id` - _required_

### Replaces the UserProject resource.

*Tags:* `UserProject`

#### Input Parameters
* `id` - _required_

### Retrieves the collection of User resources.

*Tags:* `User`

#### Input Parameters
* `organizationId` - _required_
* `search` - _optional_

### Creates a User resource.

*Tags:* `User`

### Creates a ForgotPasswordRequest resource.

*Tags:* `ForgotPasswordRequest`

### Replaces the User resource.

*Tags:* `User`

#### Input Parameters
* `resetToken` - _required_

### Removes the User resource.

*Tags:* `User`

#### Input Parameters
* `id` - _required_

### Retrieves a User resource.

*Tags:* `User`

#### Input Parameters
* `id` - _required_

### Retrieves a User resource.

*Tags:* `User`

#### Input Parameters
* `id` - _required_
* `newEmailToken` - _required_

### Replaces the User resource.

*Tags:* `User`

#### Input Parameters
* `id` - _required_

### Replaces the User resource.

*Tags:* `User`

#### Input Parameters
* `id` - _required_

### Replaces the User resource.

*Tags:* `User`

#### Input Parameters
* `id` - _required_

## License

**flow**ground :- Telekom iPaaS / redirection-io-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
