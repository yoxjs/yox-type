import * as type from '../index'

export default interface SpecialEvent {
  on(node: HTMLElement, listener: type.nativeListener): void,
  off(node: HTMLElement, listener: type.nativeListener): void,
}