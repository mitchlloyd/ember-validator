import Ember from 'ember';
import Errors from 'computed-validator/errors';
import ValidationBuilder from 'computed-validator/validation-builder';
import { last, flow } from 'computed-validator/utils';
const { get } = Ember;

/**
 * A function used to create validation rules.
 *
 * @module
 * @public
 * @param {function} build - A function that returns a validation blueprint
 */
export default function validationRule(build) {

  // User validation declaration with relevant validation arguments
  return function(...args) {

    // Return an object to update args
    return new ValidationBuilder(build, args);

  };

}

function handleMessageOption({ dependentKeys, validate }, options) {
  let message = options.message;

  if (!message) {
    return arguments[0];
  }

  return {
    dependentKeys,

    validate(...args) {
      if (validate(...args).length) {
        return [getMessage(message, this)];
      } else {
        return [];
      }
    }
  };
}

function getMessage(message, context) {
  if (typeof message === 'function') {
    return message(context);
  } else {
    return message;
  }
}

function handleWhenOption({ dependentKeys, validate }, options) {
  let whenKey = options.when;

  if (!whenKey) {
    return arguments[0];
  }

  dependentKeys.push(whenKey);

  return {
    dependentKeys,

    validate(subject) {
      if (get(subject, whenKey)) {
        return validate(subject);
      } else {
        return [];
      }
    }
  };
}

function normalizeErrors(errorOrErrors) {
  if (!errorOrErrors) {
    return [];
  } else if (Errors.isSingleType(errorOrErrors)) {
    return [errorOrErrors];
  } else if (Array.isArray(errorOrErrors)) {
    return errorOrErrors;
  } else {
    throw new Error(`invalid return value from validate: ${errorOrErrors}`);
  }
}


// required()
// returns a validationRule
//
// required().dependentKeys
// required().validate()
// function(min, max, options) {
//   return new ValidationRule({
//     dependentKeys(ruleKey);
//     validate(),


//   })
// }
