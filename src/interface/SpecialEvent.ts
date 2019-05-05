import * as type from '../type'

export default interface SpecialEvent {
  on(node: HTMLElement, listener: type.nativeListener): void,
  off(node: HTMLElement, listener: type.nativeListener): void,
}