initSidebarItems({"enum":[["AuthType","Indicates whether requests to the authorization server should use basic authentication or include the parameters in the request body for requests in which either is valid."],["AuthenticationFlow","Authentication flow, which determines how the Authorization Server returns the OpenID Connect ID token and OAuth2 access token to the Relying Party."],["ClaimsVerificationError","Error verifying claims."],["ConfigurationError","There was a problem configuring the request."],["DiscoveryError","Error retrieving provider metadata."],["JsonWebTokenError","Error creating a JSON Web Token."],["RequestTokenError","Error encountered while requesting access token."],["RevocationErrorResponseType","OAuth 2.0 Token Revocation error response types."],["SignatureVerificationError","Error verifying claims signature."],["SigningError","Error signing a message."],["UserInfoError","Error retrieving user info."]],"mod":[["core","Baseline OpenID Connect implementation and types."],["registration","OpenID Connect Dynamic Client Registration."],["reqwest","HTTP client backed by the reqwest crate. Requires “reqwest” feature."]],"struct":[["AccessToken","Access token returned by the token endpoint and used to access protected resources."],["AccessTokenHash","Access token hash."],["AddressClaim","Address claims."],["AddressCountry","Country portion of address."],["AddressLocality","Locality portion of address."],["AddressPostalCode","Postal code portion of address."],["AddressRegion","Region portion of address."],["Audience","Audience claim value."],["AuthUrl","URL of the authorization server’s authorization endpoint."],["AuthenticationContextClass","Set of authentication methods or procedures that are considered to be equivalent to each other in a particular context."],["AuthenticationMethodReference","Identifier for an authentication method (e.g., `password` or `totp`)."],["AuthorizationCode","Authorization code returned from the authorization endpoint."],["AuthorizationCodeHash","Authorization code hash."],["AuthorizationRequest","A request to the authorization endpoint."],["Client","OpenID Connect client."],["ClientConfigUrl","Client configuration endpoint URL."],["ClientContactEmail","Client contact e-mail address."],["ClientCredentialsTokenRequest","A request to exchange client credentials for an access token."],["ClientId","Client identifier issued to the client during the registration process described by Section 2.2."],["ClientName","OpenID Connect client name."],["ClientSecret","Client password issued to the client during the registration process described by Section 2.2."],["ClientUrl","Client homepage URL."],["CodeTokenRequest","A request to exchange an authorization code for an access token."],["CsrfToken","Value used for CSRF protection via the `state` parameter."],["EmptyAdditionalClaims","No additional claims."],["EmptyAdditionalProviderMetadata","Empty (default) extra [`ProviderMetadata`] fields."],["EmptyExtraTokenFields","Empty (default) extra token fields."],["EndUserBirthday","End user’s birthday, represented as an ISO 8601:2004 `YYYY-MM-DD` format."],["EndUserEmail","End user’s e-mail address."],["EndUserFamilyName","End user’s family name."],["EndUserGivenName","End user’s given name."],["EndUserMiddleName","End user’s middle name."],["EndUserName","End user’s name."],["EndUserNickname","End user’s nickname."],["EndUserPhoneNumber","End user’s phone number."],["EndUserPictureUrl","URL of end user’s profile picture."],["EndUserProfileUrl","URL of end user’s profile page."],["EndUserTimezone","End user’s time zone as a string from the time zone database."],["EndUserUsername","End user’s username."],["EndUserWebsiteUrl","URL of end user’s website."],["FormattedAddress","Full mailing address, formatted for display or use on a mailing label."],["HttpRequest","An HTTP request."],["HttpResponse","An HTTP response."],["IdToken","OpenID Connect ID token."],["IdTokenClaims","OpenID Connect ID token claims."],["IdTokenFields","Extends the base OAuth2 token response with an ID token."],["IdTokenVerifier","ID token verifier."],["InitiateLoginUrl","URI using the `https` scheme that a third party can use to initiate a login by the Relying Party."],["IntrospectionRequest","A request to introspect an access token."],["IntrospectionUrl","URL of the client’s RFC 7662 OAuth 2.0 Token Introspection endpoint."],["IssuerUrl","URL using the `https` scheme with no query or fragment component that the OP asserts as its Issuer Identifier."],["JsonWebKeyId","ID of a JSON Web Key."],["JsonWebKeySet","JSON Web Key Set."],["JsonWebKeySetUrl","JSON Web Key Set URL."],["LanguageTag","Language tag adhering to RFC 5646 (e.g., `fr` or `fr-CA`)."],["LocalizedClaim","A locale-aware claim."],["LoginHint","Hint about the login identifier the End-User might use to log in."],["LogoUrl","URL that references a logo for the Client application."],["Nonce","String value used to associate a client session with an ID Token, and to mitigate replay attacks."],["OpPolicyUrl","URL providing the OpenID Connect Provider’s data usage policies for client applications."],["OpTosUrl","URL providing the OpenID Connect Provider’s Terms of Service."],["PasswordTokenRequest","A request to exchange resource owner credentials for an access token."],["PkceCodeChallenge","Code Challenge used for PKCE protection via the `code_challenge` parameter."],["PkceCodeChallengeMethod","Code Challenge Method used for PKCE protection via the `code_challenge_method` parameter."],["PkceCodeVerifier","Code Verifier used for PKCE protection via the `code_verifier` parameter. The value must have a minimum length of 43 characters and a maximum length of 128 characters.  Each character must be ASCII alphanumeric or one of the characters “-” / “.” / “_” / “~”."],["PolicyUrl","URL providing a client application’s data usage policy."],["ProviderMetadata","Provider metadata returned by OpenID Connect Discovery."],["RedirectUrl","URL of the client’s redirection endpoint."],["RefreshToken","Refresh token used to obtain a new access token (if supported by the authorization server)."],["RefreshTokenRequest","A request to exchange a refresh token for an access token."],["RegistrationAccessToken","Access token used by a client application to access the Client Registration endpoint."],["RegistrationUrl","URL of the Client Registration endpoint."],["RequestUrl","URL used to pass request parameters as JWTs by reference."],["ResourceOwnerPassword","Resource owner’s password used directly as an authorization grant to obtain an access token."],["ResourceOwnerUsername","Resource owner’s username used directly as an authorization grant to obtain an access token."],["ResponseTypes","Informs the Authorization Server of the desired authorization processing flow, including what parameters are returned from the endpoints used."],["RevocationRequest","A request to revoke a token via an `RFC 7009` compatible endpoint."],["RevocationUrl","URL of the authorization server’s RFC 7009 token revocation endpoint."],["Scope","Access token scope, as defined by the authorization server."],["SectorIdentifierUrl","URL for retrieving redirect URIs that should receive identical pairwise subject identifiers."],["ServiceDocUrl","URL for developer documentation for an OpenID Connect Provider."],["StandardClaims","Standard Claims defined by OpenID Connect Core."],["StandardErrorResponse","Error response returned by server after requesting an access token."],["StandardTokenIntrospectionResponse","Standard OAuth2 token introspection response."],["StandardTokenResponse","Standard OAuth2 token response."],["StreetAddress","A user’s street address."],["SubjectIdentifier","Locally unique and never reassigned identifier within the Issuer for the End-User, which is intended to be consumed by the client application."],["ToSUrl","URL for the relying party’s Terms of Service."],["TokenUrl","URL of the authorization server’s token endpoint."],["UserInfoClaims","User info claims."],["UserInfoJsonWebToken","JSON Web Token (JWT) containing user info claims."],["UserInfoRequest","User info request."],["UserInfoUrl","URL for a provider’s user info endpoint."],["UserInfoVerifier","User info verifier."]],"trait":[["AdditionalClaims","Additional claims beyond the set of Standard Claims defined by OpenID Connect Core."],["AdditionalProviderMetadata","Trait for adding extra fields to [`ProviderMetadata`]."],["ApplicationType","Client application type."],["AuthDisplay","How the Authorization Server displays the authentication and consent user interface pages to the End-User."],["AuthPrompt","Whether the Authorization Server should prompt the End-User for reauthentication and consent."],["ClaimName","Claim name."],["ClaimType","Claim type (e.g., normal, aggregated, or distributed)."],["ClientAuthMethod","Client authentication method."],["ErrorResponse","Server Error Response"],["ErrorResponseType","Error types enum."],["ExtraTokenFields","Trait for adding extra fields to the `TokenResponse`."],["GenderClaim","Gender claim."],["GrantType","Grant type."],["JsonWebKey","JSON Web Key."],["JsonWebKeyType","Key type (e.g., RSA)."],["JsonWebKeyUse","Allowed key usage."],["JweContentEncryptionAlgorithm","JSON Web Encryption (JWE) content encryption algorithm."],["JweKeyManagementAlgorithm","JSON Web Encryption (JWE) key management algorithm."],["JwsSigningAlgorithm","JSON Web Signature (JWS) algorithm."],["NonceVerifier","Trait for verifying ID token nonces."],["OAuth2TokenResponse","Common methods shared by all OAuth2 token implementations."],["PrivateSigningKey","Private or symmetric key for signing."],["ResponseMode","Response mode indicating how the OpenID Connect Provider should return the Authorization Response to the Relying Party (client)."],["ResponseType","Response type indicating the desired authorization processing flow, including what parameters are returned from the endpoints used."],["RevocableToken","A revocable token."],["SubjectIdentifierType","Subject identifier type returned by an OpenID Connect Provider to uniquely identify its users."],["TokenIntrospectionResponse","Common methods shared by all OAuth2 token introspection implementations."],["TokenResponse","Extends the base OAuth2 token response with an ID token."],["TokenType","Trait for OAuth2 access tokens."]]});