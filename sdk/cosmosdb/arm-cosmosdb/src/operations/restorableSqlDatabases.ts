/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/restorableSqlDatabasesMappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";

/** Class representing a RestorableSqlDatabases. */
export class RestorableSqlDatabases {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Create a RestorableSqlDatabases.
   * @param {CosmosDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Show the event feed of all mutations done on all the Azure Cosmos DB SQL databases under the
   * restorable account.  This helps in scenario where database was accidentally deleted to get the
   * deletion time.  This API requires
   * 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param [options] The optional parameters
   * @returns Promise<Models.RestorableSqlDatabasesListResponse>
   */
  list(location: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<Models.RestorableSqlDatabasesListResponse>;
  /**
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param callback The callback
   */
  list(location: string, instanceId: string, callback: msRest.ServiceCallback<Models.RestorableSqlDatabasesListResult>): void;
  /**
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(location: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RestorableSqlDatabasesListResult>): void;
  list(location: string, instanceId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RestorableSqlDatabasesListResult>, callback?: msRest.ServiceCallback<Models.RestorableSqlDatabasesListResult>): Promise<Models.RestorableSqlDatabasesListResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        instanceId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.RestorableSqlDatabasesListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableSqlDatabases",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.instanceId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RestorableSqlDatabasesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
