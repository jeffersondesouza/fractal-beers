import { shallow } from 'enzyme';

export function shallowWithStore(component, store) {
  const context = {
    store,
  };
  const props = {
    params: {
      id: 1,
    }
  };
  return shallow(component, { context, props });
};

