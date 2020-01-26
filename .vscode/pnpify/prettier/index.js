const {createRequire, createRequireFromPath} = require(`module`);
const {dirname, resolve} = require(`path`);

const relPnpApiPath = "../../../.pnp.js";

const absPnpApiPath = resolve(__dirname, relPnpApiPath);
const absRequire = (createRequire || createRequireFromPath)(absPnpApiPath);

// Setup the environment to be able to require prettier
require(absPnpApiPath).setup();

// Prepare the environment (to be ready in case of child_process.spawn etc)
process.env.NODE_OPTIONS = process.env.NODE_OPTIONS || ``;
process.env.NODE_OPTIONS += ` -r ${absPnpApiPath}`;

// Defer to the real prettier your application uses
module.exports = absRequire(`prettier`);
