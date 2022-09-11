import * as KeycloakAdminClient from '@keycloak/keycloak-admin-client';

export const keycloakConfig = {
  realm: 'mess',
  clientId: 'mess-client',
  clientSecret: 'aqXl7V7kXDhWjfoKDaQIQwFzmDMsFnnV',
  baseUrl: 'http://localhost:8088/auth',
  loginUrl:
    'http://localhost:8088/auth/realms/mess/protocol/openid-connect/auth',
  logoutUrl:
    'http://localhost:8088/auth/realms/mess/protocol/openid-connect/logout',
  tokenUrl:
    'http://localhost:8088/auth/realms/mess/protocol/openid-connect/token',
  loginCallbackUri: '/callback',
  logoutCallbackUri: '/logout',
};

export const keycloakAdminClient = async function () {
  const kcAdminClient = new KeycloakAdminClient.default({
    baseUrl: keycloakConfig.baseUrl,
    realmName: keycloakConfig.realm,
  });

  await kcAdminClient.auth({
    username: 'user',
    password: 'user',
    grantType: 'password',
    clientId: 'admin-cli',
  });

  return kcAdminClient;
};
