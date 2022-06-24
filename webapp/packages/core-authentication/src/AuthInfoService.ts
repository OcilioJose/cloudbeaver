/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2022 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { injectable } from '@cloudbeaver/core-di';
import { AsyncTaskInfoService, AuthInfo, AuthProviderConfiguration, UserInfo } from '@cloudbeaver/core-sdk';
import { WindowsService } from '@cloudbeaver/core-ui';

import { AuthProvidersResource } from './AuthProvidersResource';
import { type ILoginOptions, UserInfoResource } from './UserInfoResource';

@injectable()
export class AuthInfoService {
  get userInfo(): UserInfo | null {
    return this.userInfoResource.data;
  }

  get userAuthConfigurations(): AuthProviderConfiguration[] {
    const tokens = this.userInfo?.authTokens;
    const result: AuthProviderConfiguration[] = [];

    if (!tokens) {
      return result;
    }

    for (const token of tokens) {
      if (token.authConfiguration) {
        const provider = this.authProvidersResource.values.find(
          provider => provider.id === token.authProvider
        );

        if (provider) {
          const configuration = provider.configurations?.find(
            configuration => configuration.id === token.authConfiguration
          );

          if (configuration) {
            result.push(configuration);
          }
        }
      }
    }

    return result;
  }

  constructor(
    private readonly userInfoResource: UserInfoResource,
    private readonly authProvidersResource: AuthProvidersResource,
    private readonly windowsService: WindowsService,
    private readonly asyncTaskInfoService: AsyncTaskInfoService
  ) {
  }

  async login(providerId: string, options: ILoginOptions): Promise<AuthInfo | null> {
    const authInfo = await this.userInfoResource.login(providerId, options);

    await this.federatedAuthentication(providerId, options, authInfo);

    return authInfo;
  }

  async logout(): Promise<void> {
    await this.userInfoResource.logout();
  }

  private async federatedAuthentication(
    providerId: string,
    options: ILoginOptions,
    { redirectLink, taskInfo }: AuthInfo
  ): Promise<void> {
    let id = providerId;

    if (options.configurationId) {
      const configuration = this.authProvidersResource.getConfiguration(providerId, options.configurationId);

      if (configuration) {
        id = configuration.id;
      }
    }

    if (redirectLink) {
      const window = this.windowsService.open(id, {
        url: redirectLink,
        target: id,
        width: 600,
        height: 700,
      });

      if (window) {
        window.focus();
      }
    }

    if (taskInfo) {
      const asyncTask = this.asyncTaskInfoService.create(() => Promise.resolve(taskInfo));
      const info = await this.asyncTaskInfoService.run(asyncTask);
      await this.userInfoResource.finishFederatedAuthentication(info.id);
    }
  }
}
