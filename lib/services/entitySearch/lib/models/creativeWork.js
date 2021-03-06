/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a CreativeWork.
 * @extends models['Thing']
 */
class CreativeWork extends models['Thing'] {
  /**
   * Create a CreativeWork.
   * @member {string} [thumbnailUrl] The URL to a thumbnail of the item.
   * @member {array} [provider] The source of the creative work.
   * @member {string} [text]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CreativeWork
   *
   * @returns {object} metadata of CreativeWork
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreativeWork',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'CreativeWork',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          contractualRules: {
            required: false,
            readOnly: true,
            serializedName: 'contractualRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ContractualRulesContractualRuleElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ContractualRulesContractualRule',
                    className: 'ContractualRulesContractualRule'
                  }
              }
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            readOnly: true,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          image: {
            required: false,
            readOnly: true,
            serializedName: 'image',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'ImageObject'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          entityPresentationInfo: {
            required: false,
            readOnly: true,
            serializedName: 'entityPresentationInfo',
            type: {
              name: 'Composite',
              className: 'EntitiesEntityPresentationInfo'
            }
          },
          bingId: {
            required: false,
            readOnly: true,
            serializedName: 'bingId',
            type: {
              name: 'String'
            }
          },
          thumbnailUrl: {
            required: false,
            readOnly: true,
            serializedName: 'thumbnailUrl',
            type: {
              name: 'String'
            }
          },
          provider: {
            required: false,
            readOnly: true,
            serializedName: 'provider',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ThingElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Thing'
                  }
              }
            }
          },
          text: {
            required: false,
            readOnly: true,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CreativeWork;
