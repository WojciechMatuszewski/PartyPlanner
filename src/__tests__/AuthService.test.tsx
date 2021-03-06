import * as redirectDep from '@apolloSetup/redirect';

import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';
import {
  handleLogin,
  handleLogout,
  saveToken,
  getAuthToken
} from '@services/AuthService';

jest.mock('@apolloSetup/redirect');

const TOKEN = 'alamakota';

const redirectMock = redirectDep.default as jest.Mock<
  typeof redirectDep.default
>;

afterEach(() => jest.clearAllMocks());
afterAll(() => jest.restoreAllMocks());

describe('AuthService', () => {
  it('Handles login correctly', () => {
    handleLogin(TOKEN);
    expect(redirectMock).toHaveBeenCalled();
    expect(redirectMock).toHaveBeenCalledWith({}, '/user/dashboard');
    expect(document.cookie).toBe(`token=${TOKEN}`);
  });
  it('Handles logout correctly', async () => {
    const mockedApolloClient = {
      cache: {
        reset: jest.fn()
      }
    };
    const { getByTestId } = render(
      <div>
        <button
          data-testid="button"
          onClick={() => handleLogout(mockedApolloClient as any)}
        />
      </div>
    );
    const button = getByTestId('button');
    fireEvent.click(button);
    expect(document.cookie).toBe('');
    await wait(() => expect(mockedApolloClient.cache.reset).toHaveBeenCalled());
    expect(redirectMock).toHaveBeenCalled();
    expect(redirectMock).toHaveBeenCalledWith({}, '/auth-login', '/login');
  });
  it('Gets token from cookies correctly', () => {
    saveToken(TOKEN);
    expect(getAuthToken()).toBe(TOKEN);
  });
});
