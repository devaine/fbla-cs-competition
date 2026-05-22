# Environmental Variables
from main import (
    KEYCLOAK_URL,
    KEYCLOAK_ADMIN_USERNAME,
    KEYCLOAK_ADMIN_PASSWORD,
    KEYCLOAK_REALM_NAME,
    KEYCLOAK_CLIENT_ID,
)

# Keycloak
from keycloak import KeycloakOpenIDConnection, KeycloakAdmin

OIDC_Connect = KeycloakOpenIDConnection(
    server_url=KEYCLOAK_URL,
    username=KEYCLOAK_ADMIN_USERNAME,
    password=KEYCLOAK_ADMIN_PASSWORD,
    realm_name=KEYCLOAK_REALM_NAME,
    client_id=str(KEYCLOAK_CLIENT_ID),
    verify=True,
)

admin = KeycloakAdmin(connection=OIDC_Connect)
