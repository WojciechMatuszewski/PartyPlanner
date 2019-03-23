import * as redirectDep from '@apolloSetup/redirect';
import {
  handleLogin,
  handleLogout,
  saveToken,
  getToken
} from '@components/Authentication/AuthService';
import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';

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
    expect(redirectMock).toHaveBeenCalledWith({}, '/dashboard');
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
    expect(redirectMock).toHaveBeenCalledWith({}, '/login');
  });
  it('Gets token from cookies correctly', () => {
    saveToken(TOKEN);
    expect(getToken()).toBe(TOKEN);
  });
});
