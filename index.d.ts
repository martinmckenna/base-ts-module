declare module 'my-package/index' {
  export * from 'my-package/something/index';

}
declare module 'my-package/something/index' {
  export * from 'my-package/something/something';

}
declare module 'my-package/something/something' {
  export const doSomething: (text: string) => string;

}
declare module 'my-package' {
  import main = require('my-package/index.ts');
  export = main;
}