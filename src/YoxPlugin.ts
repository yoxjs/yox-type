import Yox from './Yox'

export default interface YoxPlugin {
  install: (instance: Yox) => void
}