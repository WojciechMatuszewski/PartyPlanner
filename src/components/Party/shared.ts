import { NextFunctionComponent } from 'next';
import { NextContextWithApollo } from '@pages/_app';
import { PartyAuthenticationResult } from '@auth/party-auth';

export const MOBILE_LIST_BREAKPOINT = '800px';

export type PartyPage<
  InjectedProps = PartyAuthenticationResult
> = NextFunctionComponent<
  InjectedProps,
  InjectedProps,
  NextContextWithApollo<{ id?: string }>
>;
