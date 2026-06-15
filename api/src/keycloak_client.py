# Environmental Variables
from main import (
    KEYCLOAK_URL,
    KEYCLOAK_ADMIN_USERNAME,
    KEYCLOAK_ADMIN_PASSWORD,
    KEYCLOAK_REALM_NAME,
    KEYCLOAK_CLIENT_ID,
    KEYCLOAK_CLIENT_SECRET,
)

# Keycloak
from keycloak import KeycloakOpenIDConnection, KeycloakAdmin, KeycloakOpenID

admin_connection = KeycloakOpenIDConnection(
    server_url=KEYCLOAK_URL,
    username=KEYCLOAK_ADMIN_USERNAME,
    password=KEYCLOAK_ADMIN_PASSWORD,
    realm_name=KEYCLOAK_REALM_NAME,
    client_id=str(KEYCLOAK_CLIENT_ID),
    client_secret_key=KEYCLOAK_CLIENT_SECRET,
    verify=True,
)

admin_client = KeycloakAdmin(connection=admin_connection)


print(admin_client.get_user_id("fbla_dev"))
