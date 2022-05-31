/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { RecoveryServicesBackupClient } = require("@azure/arm-recoveryservicesbackup");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates Vault encryption config.
 *
 * @summary Updates Vault encryption config.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2022-03-01/examples/BackupResourceEncryptionConfig_Put.json
 */
async function updateVaultEncryptionConfiguration() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "source-rsv";
  const resourceGroupName = "test-rg";
  const parameters = {
    properties: {
      encryptionAtRestType: "CustomerManaged",
      infrastructureEncryptionState: "true",
      keyUri: "https://gktestkv1.vault.azure.net/keys/Test1/ed2e8cdc7f86477ebf0c6462b504a9ed",
      subscriptionId: "1a2311d9-66f5-47d3-a9fb-7a37da63934b",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.backupResourceEncryptionConfigs.update(
    vaultName,
    resourceGroupName,
    parameters
  );
  console.log(result);
}

updateVaultEncryptionConfiguration().catch(console.error);