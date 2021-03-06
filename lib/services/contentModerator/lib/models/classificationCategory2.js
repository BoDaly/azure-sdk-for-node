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

/**
 * The category2 score details of the text. <a
 * href="https://aka.ms/textClassifyCategories">Click here</a> for more details
 * on category classification.
 *
 */
class ClassificationCategory2 {
  /**
   * Create a ClassificationCategory2.
   * @member {number} [score] The category2 score.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ClassificationCategory2
   *
   * @returns {object} metadata of ClassificationCategory2
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Classification_Category2',
      type: {
        name: 'Composite',
        className: 'ClassificationCategory2',
        modelProperties: {
          score: {
            required: false,
            serializedName: 'Score',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ClassificationCategory2;
