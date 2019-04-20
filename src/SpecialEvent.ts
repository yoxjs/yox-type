import * as type from '../index'

export default interface SpecialEvent {
  on: (node: HTMLElement, listener: type.specialEventListener) => void,
  off: (node: HTMLElement, listener: type.specialEventListener) => void,
}