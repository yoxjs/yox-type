import * as type from './type'

export default interface SpecialEvent {
  on: (node: HTMLElement, listener: type.specialEventListener) => void,
  off: (node: HTMLElement, listener: type.specialEventListener) => void,
}