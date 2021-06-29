export const doSomething = (name: string): string => {
  return `Hello ${name}`;
};

export const init = (): { setNewToken: (newToken: string) => void } => {
  let interceptor: (() => void) | null = null;
  return {
    setNewToken: token => {
      if (interceptor) {
        /* clear previously cached interceptor function */
      }
      interceptor = () => {
        /* intercept all HTTP requests here with new token */
      };
    }
  };
};
