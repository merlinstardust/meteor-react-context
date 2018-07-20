const excludeModules = ['ecmascript-runtime-client'];
const excludeExports = ['meteorInstall', 'global']

const initialContext = Object.keys(Package).reduce((object, moduleName) => {
  const module = Package[moduleName];
  const exports = Object.keys(module);

  if (! exports.length || excludeModules.includes(moduleName)) {
    return object;
  }

  const filteredExports = exports.reduce((subObject, exportName) => {
    const moduleExport = module[exportName];

    const isObject = typeof moduleExport === 'object' || moduleExport && moduleExport.constructor === Object;
    const isFunction = typeof moduleExport === 'function' || moduleExport && moduleExport.constructor === Function;
    if (excludeExports.includes(exportName) || ! (isObject ||  isFunction)) {
      return subObject;
    }

    return {
      ...subObject,
      [exportName]: moduleExport,
    };
  }, {});

  return {
    ...object,
    ...filteredExports,
  };
}, {});

export default initialContext;
