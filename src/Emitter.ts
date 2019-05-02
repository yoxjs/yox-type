import * as type from '../index'

import EmitterOptions from './options/Emitter'

export default interface EmitterUtil {

  ns: boolean

  listeners: Record<string, EmitterOptions[]>

  nativeListeners?: Record<string, type.nativeEventListener>

  fire(
    bullet: string | CustomEvent,
    data: type.eventData | any[] | void,
    filter?: (options: EmitterOptions, data: type.eventData | any[] | void) => boolean | void
  ): boolean

  has(
    type: string,
    listener?: type.eventListener | EmitterOptions
  ): boolean

  on(
    type: string | Record<string, type.eventListener | EmitterOptions>,
    listener?: type.eventListener | EmitterOptions,
    extra?: EmitterOptions
  ): void

  off(
    type?: string,
    listener?: type.eventListener | EmitterOptions
  ): void

}