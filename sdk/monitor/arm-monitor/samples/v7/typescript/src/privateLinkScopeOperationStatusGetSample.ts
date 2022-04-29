/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get the status of an azure asynchronous operation associated with a private link scope operation.
 *
 * @summary Get the status of an azure asynchronous operation associated with a private link scope operation.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2019-10-17-preview/examples/privateLinkScopeOperationStatuses.json
 */
async function getSpecificOperationStatus() {
  const subscriptionId = "613192d7-503f-477a-9cfe-4efc3ee2bd60";
  const asyncOperationId = "713192d7-503f-477a-9cfe-4efc3ee2bd11";
  const resourceGroupName = "MyResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.privateLinkScopeOperationStatus.get(
    asyncOperationId,
    resourceGroupName
  );
  console.log(result);
}

getSpecificOperationStatus().catch(console.error);