import * as config from '../../../yox-config/src/config'

import * as type from '../type'

import DirectiveHooks from '../hooks/Directive'
import TransitionHooks from '../hooks/Transition'
import YoxOptions from '../options/Yox'

import Yox from './Yox'
import EmitterClass from '../event/EmitterClass'
import CustomEventClass from '../event/CustomEventClass'

import YoxPlugin from './YoxPlugin'

import API from '../util/API'
import isUtil from '../util/is'
import arrayUtil from '../util/array'
import objectUtil from '../util/object'
import stringUtil from '../util/string'
import loggerUtil from '../util/logger'

export default interface YoxClass {

  dom: API

  is: isUtil

  array: arrayUtil

  object: objectUtil

  string: stringUtil

  logger: loggerUtil

  Emitter: EmitterClass

  Event: CustomEventClass

  new(options?: YoxOptions): Yox

  use(plugin: YoxPlugin): void

  nextTick(task: Function, context?: any): void

  compile(template: string, stringify?: boolean): Function | string

  directive(
    name: string | Record<string, DirectiveHooks>,
    directive?: DirectiveHooks
  ): DirectiveHooks | void

  transition(
    name: string | Record<string, TransitionHooks>,
    transition?: TransitionHooks
  ): TransitionHooks | void

  component(
    name: string | Record<string, type.component>,
    component?: type.component
  ): type.component | void

  partial(
    name: string | Record<string, string>,
    partial?: string
  ): Function | void

  filter(
    name: string | Record<string, type.filter>,
    filter?: type.filter
  ): type.filter | void

  [config.HOOK_BEFORE_CREATE]?: type.yoxClassBeforeCreateHook

  [config.HOOK_AFTER_CREATE]?: type.yoxClassOtherHook

  [config.HOOK_BEFORE_MOUNT]?: type.yoxClassOtherHook

  [config.HOOK_AFTER_MOUNT]?: type.yoxClassOtherHook

  [config.HOOK_BEFORE_UPDATE]?: type.yoxClassOtherHook

  [config.HOOK_AFTER_UPDATE]?: type.yoxClassOtherHook

  [config.HOOK_BEFORE_DESTROY]?: type.yoxClassOtherHook

  [config.HOOK_AFTER_DESTROY]?: type.yoxClassOtherHook

}