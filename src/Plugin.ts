import Yox from './Yox'

export default interface Plugin {
  install: (yox: Yox) => void
}