import redirect from '@apolloSetup/redirect';
import * as RouterDep from 'next/router';
import { SingletonRouter } from 'next/router';

jest.mock('next/router');

const routerMock = (RouterDep.default as any) as jest.Mock<
  SingletonRouter<any>
>;

const TARGET = '/auth-login';

describe('Redirect', () => {
  it('Works correctly when used at server side', () => {
    const mockedContext: any = {
      res: {
        writeHead: jest.fn(),
        end: jest.fn()
      }
    };
    redirect(mockedContext, TARGET);

    expect(mockedContext.res.writeHead).toHaveBeenCalled();
    expect(mockedContext.res.writeHead).toHaveBeenCalledWith(303, {
      Location: TARGET
    });
    expect(mockedContext.res.end).toHaveBeenCalled();
  });
  it('Works correctly when used inside browser', () => {
    const mockedContext: any = {};
    redirect(mockedContext, TARGET, TARGET);
    expect((routerMock as any).push).toHaveBeenCalled();
    expect((routerMock as any).push).toHaveBeenCalledWith(TARGET, TARGET);
  });
});
