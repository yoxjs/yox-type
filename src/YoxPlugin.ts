import Yox from './Yox'

export default interface YoxPlugin {
  install: (Yox: any) => void
}
