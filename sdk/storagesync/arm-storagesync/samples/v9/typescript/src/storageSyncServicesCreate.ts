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
 * This sample demonstrates how to Create a new StorageSyncService.
 *
 * @summary Create a new StorageSyncService.
 * x-ms-original-file: specification/storagesync/resource-manager/Microsoft.StorageSync/stable/2020-09-01/examples/StorageSyncServices_Create.json
 */
import {
  StorageSyncServiceCreateParameters,
  MicrosoftStorageSync
} from "@azure/arm-storagesync";
import { DefaultAzureCredential } from "@azure/identity";

async function storageSyncServicesCreate() {
  const subscriptionId = "52b8da2f-61e0-4a1f-8dde-336911f367fb";
  const resourceGroupName = "SampleResourceGroup_1";
  const storageSyncServiceName = "SampleStorageSyncService_1";
  const parameters: StorageSyncServiceCreateParameters = {
    incomingTrafficPolicy: "AllowAllTraffic",
    location: "WestUS",
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftStorageSync(credential, subscriptionId);
  const result = await client.storageSyncServices.beginCreateAndWait(
    resourceGroupName,
    storageSyncServiceName,
    parameters
  );
  console.log(result);
}

storageSyncServicesCreate().catch(console.error);