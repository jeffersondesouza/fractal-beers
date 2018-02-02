import { shallow } from 'enzyme';

const shallowWithStore = (component, store) => {
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

export default shallowWithStore;