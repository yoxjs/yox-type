import YoxClass from './YoxClass'

export default interface YoxPlugin {
  install: (Yox: YoxClass) => void
}
