export const getTokenHeader = (csrfToken) => ({
  headers: {
    [csrfToken.tokenName]: csrfToken.token
  }
});
