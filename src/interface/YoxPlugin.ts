import YoxClass from './YoxClass'

export default interface YoxPlugin {
  version: string
  install(Yox: YoxClass): void
}