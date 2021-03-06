import Router from 'next/router';
import { NextContext } from 'next';

export default (context: NextContext, target: string, as?: string) => {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.push(target, as);
  }
};
