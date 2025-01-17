/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DocumentModels } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GeneratedClient } from "../generatedClient";
import {
  DocumentModelSummary,
  DocumentModelsListModelsNextOptionalParams,
  DocumentModelsListModelsOptionalParams,
  ContentType,
  DocumentModelsAnalyzeDocument$binaryOptionalParams,
  DocumentModelsAnalyzeDocument$textOptionalParams,
  DocumentModelsAnalyzeDocument$jsonOptionalParams,
  DocumentModelsAnalyzeDocumentResponse,
  DocumentModelsGetAnalyzeResultOptionalParams,
  DocumentModelsGetAnalyzeResultResponse,
  BuildDocumentModelRequest,
  DocumentModelsBuildModelOptionalParams,
  DocumentModelsBuildModelResponse,
  ComposeDocumentModelRequest,
  DocumentModelsComposeModelOptionalParams,
  DocumentModelsComposeModelResponse,
  AuthorizeCopyRequest,
  DocumentModelsAuthorizeModelCopyOptionalParams,
  DocumentModelsAuthorizeModelCopyResponse,
  CopyAuthorization,
  DocumentModelsCopyModelToOptionalParams,
  DocumentModelsCopyModelToResponse,
  DocumentModelsListModelsResponse,
  DocumentModelsGetModelOptionalParams,
  DocumentModelsGetModelResponse,
  DocumentModelsDeleteModelOptionalParams,
  DocumentModelsListModelsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DocumentModels operations. */
export class DocumentModelsImpl implements DocumentModels {
  private readonly client: GeneratedClient;

  /**
   * Initialize a new instance of the class DocumentModels class.
   * @param client Reference to the service client
   */
  constructor(client: GeneratedClient) {
    this.client = client;
  }

  /**
   * List all document models
   * @param options The options parameters.
   */
  public listModels(
    options?: DocumentModelsListModelsOptionalParams
  ): PagedAsyncIterableIterator<DocumentModelSummary> {
    const iter = this.listModelsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listModelsPagingPage(options);
      }
    };
  }

  private async *listModelsPagingPage(
    options?: DocumentModelsListModelsOptionalParams
  ): AsyncIterableIterator<DocumentModelSummary[]> {
    let result = await this._listModels(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listModelsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listModelsPagingAll(
    options?: DocumentModelsListModelsOptionalParams
  ): AsyncIterableIterator<DocumentModelSummary> {
    for await (const page of this.listModelsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Analyzes document with document model.
   * @param modelId Unique document model name.
   * @param contentType Upload file type
   * @param options The options parameters.
   */
  analyzeDocument(
    modelId: string,
    contentType: ContentType,
    options?: DocumentModelsAnalyzeDocument$binaryOptionalParams
  ): Promise<DocumentModelsAnalyzeDocumentResponse>;
  /**
   * Analyzes document with document model.
   * @param modelId Unique document model name.
   * @param contentType Upload file type
   * @param options The options parameters.
   */
  analyzeDocument(
    modelId: string,
    contentType: "text/html",
    options?: DocumentModelsAnalyzeDocument$textOptionalParams
  ): Promise<DocumentModelsAnalyzeDocumentResponse>;
  /**
   * Analyzes document with document model.
   * @param modelId Unique document model name.
   * @param contentType Body Parameter content-type
   * @param options The options parameters.
   */
  analyzeDocument(
    modelId: string,
    contentType: "application/json",
    options?: DocumentModelsAnalyzeDocument$jsonOptionalParams
  ): Promise<DocumentModelsAnalyzeDocumentResponse>;
  /**
   * Analyzes document with document model.
   * @param args Includes all the parameters for this operation.
   */
  analyzeDocument(
    ...args:
      | [
          string,
          ContentType,
          DocumentModelsAnalyzeDocument$binaryOptionalParams?
        ]
      | [string, "text/html", DocumentModelsAnalyzeDocument$textOptionalParams?]
      | [
          string,
          "application/json",
          DocumentModelsAnalyzeDocument$jsonOptionalParams?
        ]
  ): Promise<DocumentModelsAnalyzeDocumentResponse> {
    let operationSpec: coreClient.OperationSpec;
    let operationArguments: coreClient.OperationArguments;
    let options;
    if (
      args[1] === "application/octet-stream" ||
      args[1] === "application/pdf" ||
      args[1] ===
        "application/vnd.openxmlformats-officedocument.presentationml.presentation" ||
      args[1] ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      args[1] ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      args[1] === "image/bmp" ||
      args[1] === "image/heif" ||
      args[1] === "image/jpeg" ||
      args[1] === "image/png" ||
      args[1] === "image/tiff"
    ) {
      operationSpec = analyzeDocument$binaryOperationSpec;
      operationArguments = {
        modelId: args[0],
        contentType: args[1],
        options: args[2]
      };
      options = args[2];
    } else if (args[1] === "text/html") {
      operationSpec = analyzeDocument$textOperationSpec;
      operationArguments = {
        modelId: args[0],
        contentType: args[1],
        options: args[2]
      };
      options = args[2];
    } else if (args[1] === "application/json") {
      operationSpec = analyzeDocument$jsonOperationSpec;
      operationArguments = {
        modelId: args[0],
        contentType: args[1],
        options: args[2]
      };
      options = args[2];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[1]}".`
      );
    }
    operationArguments.options = options || {};
    return this.client.sendOperationRequest(operationArguments, operationSpec);
  }

  /**
   * Gets the result of document analysis.
   * @param modelId Unique document model name.
   * @param resultId Analyze operation result ID.
   * @param options The options parameters.
   */
  getAnalyzeResult(
    modelId: string,
    resultId: string,
    options?: DocumentModelsGetAnalyzeResultOptionalParams
  ): Promise<DocumentModelsGetAnalyzeResultResponse> {
    return this.client.sendOperationRequest(
      { modelId, resultId, options },
      getAnalyzeResultOperationSpec
    );
  }

  /**
   * Builds a custom document analysis model.
   * @param buildRequest Building request parameters.
   * @param options The options parameters.
   */
  buildModel(
    buildRequest: BuildDocumentModelRequest,
    options?: DocumentModelsBuildModelOptionalParams
  ): Promise<DocumentModelsBuildModelResponse> {
    return this.client.sendOperationRequest(
      { buildRequest, options },
      buildModelOperationSpec
    );
  }

  /**
   * Creates a new document model from document types of existing document models.
   * @param composeRequest Compose request parameters.
   * @param options The options parameters.
   */
  composeModel(
    composeRequest: ComposeDocumentModelRequest,
    options?: DocumentModelsComposeModelOptionalParams
  ): Promise<DocumentModelsComposeModelResponse> {
    return this.client.sendOperationRequest(
      { composeRequest, options },
      composeModelOperationSpec
    );
  }

  /**
   * Generates authorization to copy a document model to this location with specified modelId and
   * optional description.
   * @param authorizeCopyRequest Authorize copy request parameters.
   * @param options The options parameters.
   */
  authorizeModelCopy(
    authorizeCopyRequest: AuthorizeCopyRequest,
    options?: DocumentModelsAuthorizeModelCopyOptionalParams
  ): Promise<DocumentModelsAuthorizeModelCopyResponse> {
    return this.client.sendOperationRequest(
      { authorizeCopyRequest, options },
      authorizeModelCopyOperationSpec
    );
  }

  /**
   * Copies document model to the target resource, region, and modelId.
   * @param modelId Unique document model name.
   * @param copyToRequest Copy to request parameters.
   * @param options The options parameters.
   */
  copyModelTo(
    modelId: string,
    copyToRequest: CopyAuthorization,
    options?: DocumentModelsCopyModelToOptionalParams
  ): Promise<DocumentModelsCopyModelToResponse> {
    return this.client.sendOperationRequest(
      { modelId, copyToRequest, options },
      copyModelToOperationSpec
    );
  }

  /**
   * List all document models
   * @param options The options parameters.
   */
  private _listModels(
    options?: DocumentModelsListModelsOptionalParams
  ): Promise<DocumentModelsListModelsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listModelsOperationSpec
    );
  }

  /**
   * Gets detailed document model information.
   * @param modelId Unique document model name.
   * @param options The options parameters.
   */
  getModel(
    modelId: string,
    options?: DocumentModelsGetModelOptionalParams
  ): Promise<DocumentModelsGetModelResponse> {
    return this.client.sendOperationRequest(
      { modelId, options },
      getModelOperationSpec
    );
  }

  /**
   * Deletes document model.
   * @param modelId Unique document model name.
   * @param options The options parameters.
   */
  deleteModel(
    modelId: string,
    options?: DocumentModelsDeleteModelOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { modelId, options },
      deleteModelOperationSpec
    );
  }

  /**
   * ListModelsNext
   * @param nextLink The nextLink from the previous successful call to the ListModels method.
   * @param options The options parameters.
   */
  private _listModelsNext(
    nextLink: string,
    options?: DocumentModelsListModelsNextOptionalParams
  ): Promise<DocumentModelsListModelsNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listModelsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const analyzeDocument$binaryOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels/{modelId}:analyze",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.DocumentModelsAnalyzeDocumentHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.analyzeRequest,
  queryParameters: [
    Parameters.pages,
    Parameters.locale,
    Parameters.stringIndexType,
    Parameters.apiVersion,
    Parameters.features,
    Parameters.queryFields
  ],
  urlParameters: [Parameters.endpoint, Parameters.modelId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "binary",
  serializer
};
const analyzeDocument$textOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels/{modelId}:analyze",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.DocumentModelsAnalyzeDocumentHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.analyzeRequest1,
  queryParameters: [
    Parameters.pages,
    Parameters.locale,
    Parameters.stringIndexType,
    Parameters.apiVersion,
    Parameters.features,
    Parameters.queryFields
  ],
  urlParameters: [Parameters.endpoint, Parameters.modelId],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "text",
  serializer
};
const analyzeDocument$jsonOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels/{modelId}:analyze",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.DocumentModelsAnalyzeDocumentHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.analyzeRequest2,
  queryParameters: [
    Parameters.pages,
    Parameters.locale,
    Parameters.stringIndexType,
    Parameters.apiVersion,
    Parameters.features,
    Parameters.queryFields
  ],
  urlParameters: [Parameters.endpoint, Parameters.modelId],
  headerParameters: [Parameters.contentType2, Parameters.accept2],
  mediaType: "json",
  serializer
};
const getAnalyzeResultOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels/{modelId}/analyzeResults/{resultId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AnalyzeResultOperation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.modelId, Parameters.resultId],
  headerParameters: [Parameters.accept2],
  serializer
};
const buildModelOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels:build",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.DocumentModelsBuildModelHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.buildRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept2, Parameters.contentType3],
  mediaType: "json",
  serializer
};
const composeModelOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels:compose",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.DocumentModelsComposeModelHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.composeRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept2, Parameters.contentType3],
  mediaType: "json",
  serializer
};
const authorizeModelCopyOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels:authorizeCopy",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CopyAuthorization
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.authorizeCopyRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept2, Parameters.contentType3],
  mediaType: "json",
  serializer
};
const copyModelToOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels/{modelId}:copyTo",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.DocumentModelsCopyModelToHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.copyToRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.modelId],
  headerParameters: [Parameters.accept2, Parameters.contentType3],
  mediaType: "json",
  serializer
};
const listModelsOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetDocumentModelsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept2],
  serializer
};
const getModelOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels/{modelId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DocumentModelDetails
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.modelId],
  headerParameters: [Parameters.accept2],
  serializer
};
const deleteModelOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels/{modelId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.modelId],
  headerParameters: [Parameters.accept2],
  serializer
};
const listModelsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetDocumentModelsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept2],
  serializer
};
