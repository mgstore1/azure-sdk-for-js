/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Creates a new queue with the specified queue name, under the specified account.
 *
 * @summary Creates a new queue with the specified queue name, under the specified account.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-08-01/examples/QueueOperationPutWithMetadata.json
 */
const { StorageManagementClient } = require("@azure/arm-storage");
const { DefaultAzureCredential } = require("@azure/identity");

async function queueOperationPutWithMetadata() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res3376";
  const accountName = "sto328";
  const queueName = "queue6185";
  const queue = {
    metadata: { sample1: "meta1", sample2: "meta2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.queue.create(resourceGroupName, accountName, queueName, queue);
  console.log(result);
}

queueOperationPutWithMetadata().catch(console.error);