import * as yup from 'yup';

const isProduction = process.env.NODE_ENV === 'production';
const envVarsSchema = yup
  .object()
  .shape({
    PORT: isProduction ? yup.number() : yup.number().required(),
  })
  .required();

const config = () => {
  let envVars;
  try {
    envVars = envVarsSchema.validateSync(process.env, { stripUnknown: true });
  } catch (error) {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      throw new Error(`Config validation error: ${error.message}`);
    }
  }

  return {
    port: envVars.PORT,
  };
};

export default config;
