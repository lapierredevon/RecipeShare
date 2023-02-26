
// This tells typescript to treat all `.mp4' files  as modules that have the default export of a string. 
declare module '*.mp4' {
  const src: string;
  export default src;
}