/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  Input,
  StreamAnalyticsManagementClient
} from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates an input or replaces an already existing input under an existing streaming job.
 *
 * @summary Creates an input or replaces an already existing input under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Input_Create_Reference_Blob_CSV.json
 */
async function createAReferenceBlobInputWithCsvSerialization() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg8440";
  const jobName = "sj9597";
  const inputName = "input7225";
  const input: Input = {
    properties: {
      type: "Reference",
      datasource: {
        type: "Microsoft.Storage/Blob",
        container: "state",
        dateFormat: "yyyy/MM/dd",
        pathPattern: "{date}/{time}",
        storageAccounts: [
          { accountKey: "someAccountKey==", accountName: "someAccountName" }
        ],
        timeFormat: "HH"
      },
      serialization: { type: "Csv", encoding: "UTF8", fieldDelimiter: "," }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.inputs.createOrReplace(
    resourceGroupName,
    jobName,
    inputName,
    input
  );
  console.log(result);
}

createAReferenceBlobInputWithCsvSerialization().catch(console.error);

/**
 * This sample demonstrates how to Creates an input or replaces an already existing input under an existing streaming job.
 *
 * @summary Creates an input or replaces an already existing input under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Input_Create_Stream_EventHub_JSON.json
 */
async function createAStreamEventHubInputWithJsonSerialization() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg3139";
  const jobName = "sj197";
  const inputName = "input7425";
  const input: Input = {
    properties: {
      type: "Stream",
      datasource: {
        type: "Microsoft.ServiceBus/EventHub",
        consumerGroupName: "sdkconsumergroup",
        eventHubName: "sdkeventhub",
        serviceBusNamespace: "sdktest",
        sharedAccessPolicyKey: "someSharedAccessPolicyKey==",
        sharedAccessPolicyName: "RootManageSharedAccessKey"
      },
      serialization: { type: "Json", encoding: "UTF8" }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.inputs.createOrReplace(
    resourceGroupName,
    jobName,
    inputName,
    input
  );
  console.log(result);
}

createAStreamEventHubInputWithJsonSerialization().catch(console.error);

/**
 * This sample demonstrates how to Creates an input or replaces an already existing input under an existing streaming job.
 *
 * @summary Creates an input or replaces an already existing input under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Input_Create_Stream_IoTHub_Avro.json
 */
async function createAStreamIoTHubInputWithAvroSerialization() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg3467";
  const jobName = "sj9742";
  const inputName = "input7970";
  const input: Input = {
    properties: {
      type: "Stream",
      datasource: {
        type: "Microsoft.Devices/IotHubs",
        consumerGroupName: "sdkconsumergroup",
        endpoint: "messages/events",
        iotHubNamespace: "iothub",
        sharedAccessPolicyKey: "sharedAccessPolicyKey=",
        sharedAccessPolicyName: "owner"
      },
      serialization: { type: "Avro" }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.inputs.createOrReplace(
    resourceGroupName,
    jobName,
    inputName,
    input
  );
  console.log(result);
}

createAStreamIoTHubInputWithAvroSerialization().catch(console.error);

/**
 * This sample demonstrates how to Creates an input or replaces an already existing input under an existing streaming job.
 *
 * @summary Creates an input or replaces an already existing input under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Input_Create_Stream_Blob_CSV.json
 */
async function createAStreamBlobInputWithCsvSerialization() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg8161";
  const jobName = "sj6695";
  const inputName = "input8899";
  const input: Input = {
    properties: {
      type: "Stream",
      datasource: {
        type: "Microsoft.Storage/Blob",
        container: "state",
        dateFormat: "yyyy/MM/dd",
        pathPattern: "{date}/{time}",
        sourcePartitionCount: 16,
        storageAccounts: [
          { accountKey: "someAccountKey==", accountName: "someAccountName" }
        ],
        timeFormat: "HH"
      },
      serialization: { type: "Csv", encoding: "UTF8", fieldDelimiter: "," }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.inputs.createOrReplace(
    resourceGroupName,
    jobName,
    inputName,
    input
  );
  console.log(result);
}

createAStreamBlobInputWithCsvSerialization().catch(console.error);