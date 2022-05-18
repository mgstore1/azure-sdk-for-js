/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { VMwareCloudSimple } from "@azure/arm-vmwarecloudsimple";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Returns list virtual machine within subscription
 *
 * @summary Returns list virtual machine within subscription
 * x-ms-original-file: specification/vmwarecloudsimple/resource-manager/Microsoft.VMwareCloudSimple/stable/2019-04-01/examples/ListVirtualMachines.json
 */
async function listVirtualMachines() {
  const subscriptionId = "{subscription-id}";
  const credential = new DefaultAzureCredential();
  const client = new VMwareCloudSimple(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualMachines.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listVirtualMachines().catch(console.error);