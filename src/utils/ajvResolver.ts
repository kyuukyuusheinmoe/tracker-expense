import Ajv from "ajv";
import {Resolver} from '../types/form'
import ajvErrors from "ajv-errors";

export const ajvResolver: Resolver =
  (schema, schemaOptions, resolverOptions = {}) =>
  async (values, _, options) => {
    const ajv = new Ajv(
      Object.assign(
        {},
        {
          allErrors: true,
          $data: true,
          validateSchema: true,
        },
        schemaOptions
      )
    );

    ajvErrors(ajv);

    const validate = ajv.compile(
      Object.assign(
        { $async: resolverOptions && resolverOptions.mode === "async" },
        schema
      )
    );

    const valid = validate(values);
    let errorsFormatted = validate?.errors?.reduce((prev, current) => ({
        ...prev,
        [current.instancePath.replace("/", "")]: current
    }), {}) || [];

    return valid
      ? { values, errors: {} }
      : {
          values: {},
          errors: errorsFormatted }
  };