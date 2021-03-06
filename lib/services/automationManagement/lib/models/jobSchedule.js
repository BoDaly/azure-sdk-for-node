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
 * Definition of the job schedule.
 *
 */
class JobSchedule {
  /**
   * Create a JobSchedule.
   * @member {string} [id] Gets the id of the resource.
   * @member {string} [name] Gets the name of the variable.
   * @member {string} [type] Resource type
   * @member {string} [jobScheduleId] Gets or sets the id of job schedule.
   * @member {object} [schedule] Gets or sets the schedule.
   * @member {string} [schedule.name] Gets or sets the name of the schedule.
   * @member {object} [runbook] Gets or sets the runbook.
   * @member {string} [runbook.name] Gets or sets the name of the runbook.
   * @member {string} [runOn] Gets or sets the hybrid worker group that the
   * scheduled job should run on.
   * @member {object} [parameters] Gets or sets the parameters of the job
   * schedule.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobSchedule
   *
   * @returns {object} metadata of JobSchedule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobSchedule',
      type: {
        name: 'Composite',
        className: 'JobSchedule',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
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
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          jobScheduleId: {
            required: false,
            serializedName: 'properties.jobScheduleId',
            type: {
              name: 'String'
            }
          },
          schedule: {
            required: false,
            serializedName: 'properties.schedule',
            type: {
              name: 'Composite',
              className: 'ScheduleAssociationProperty'
            }
          },
          runbook: {
            required: false,
            serializedName: 'properties.runbook',
            type: {
              name: 'Composite',
              className: 'RunbookAssociationProperty'
            }
          },
          runOn: {
            required: false,
            serializedName: 'properties.runOn',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            serializedName: 'properties.parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = JobSchedule;
