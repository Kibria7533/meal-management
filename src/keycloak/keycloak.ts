import * as KeycloakAdminClient from '@keycloak/keycloak-admin-client';

export const keycloakConfig = {
  realm: 'mymess',
  clientId: 'mymess-client',
  clientSecret: 'yfZP19xNuY7JUoC0D0BYSMzqIHwCjZNB',
  baseUrl: 'http://localhost:8080/auth',
  loginUrl:
    'http://localhost:8080/auth/realms/mymess/protocol/openid-connect/auth',
  logoutUrl:
    'http://localhost:8080/auth/realms/mymess/protocol/openid-connect/logout',
  tokenUrl:
    'http://localhost:8080/auth/realms/mymess/protocol/openid-connect/token',
  loginCallbackUri: '/callback',
  logoutCallbackUri: '/logout',
};

export const keycloakAdminClient = async function () {
  const kcAdminClient = new KeycloakAdminClient.default({
    baseUrl: keycloakConfig.baseUrl,
    realmName: keycloakConfig.realm,
  });

  await kcAdminClient.auth({
    username: 'kibria',
    password: 'admin',
    grantType: 'password',
    clientId: 'admin-cli',
    clientSecret: 'yfZP19xNuY7JUoC0D0BYSMzqIHwCjZNB'
  });

  return kcAdminClient;
};
