export const TokenUtils = {
    set(tokens: { accessToken: string; refreshToken: string }) {
      localStorage.setItem("tokens", JSON.stringify(tokens));
    },
  
    get() {
      const tokens = localStorage.getItem("tokens");
      return tokens ? JSON.parse(tokens) : null; // parse and return object
    },
  };
  