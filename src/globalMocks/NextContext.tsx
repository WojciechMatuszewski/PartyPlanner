import React from 'react';
import PropTypes from 'prop-types';
interface Props {
  headManager?: any;
  router?: any;
}

class MockNextContext extends React.Component<Props> {
  static childContextTypes = {
    headManager: PropTypes.object,
    router: PropTypes.object
  };
  getChildContext() {
    const { headManager, router } = this.props;
    return {
      headManager: {
        updateHead() {},
        ...headManager
      },
      router: {
        asPath: '/',
        route: '/',
        pathname: '/',
        query: {},
        // TODO: Properly mock the following methods
        back() {},
        beforePopState() {},
        prefetch() {},
        push() {},
        reload() {},
        replace() {},
        events: {
          // TODO: Implement EventEmitter
          on() {},
          off() {},
          trigger() {}
        },
        ...router
      }
    };
  }

  render() {
    return this.props.children;
  }
}

export default MockNextContext;
