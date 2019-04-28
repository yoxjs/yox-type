import * as type from '../index'

export default interface SpecialEvent {
  on: (node: HTMLElement, listener: type.nativeEventListener) => void,
  off: (node: HTMLElement, listener: type.nativeEventListener) => void,
}