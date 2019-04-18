import * as signature from './signature'

export default interface SpecialEvent {
  on: (node: HTMLElement, listener: signature.specialEventListener) => void,
  off: (node: HTMLElement, listener: signature.specialEventListener) => void,
}