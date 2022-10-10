import ReadOnlyContentPlugin from '../read-only-content-plugin';

function pluginFactory(plugin) {
  return {
    create: (initializers) => {
      const pluginInstance = new plugin();
      Object.assign(pluginInstance, initializers);
      return pluginInstance;
    },
  };
}

export function initialize(application) {
  application.register(
    'plugin:read-only-content',
    pluginFactory(ReadOnlyContentPlugin),
    {
      singleton: false,
    }
  );
}

export default {
  initialize,
};
