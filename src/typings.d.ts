/* SystemJS module definition */
declare module 'underscore';//<=== aded by me to be able to use underscore.js
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
