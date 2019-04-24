import DirectiveHooks from '../hooks/Directive'
import * as type from '../../index'

export default interface Directive {

  // 指令类型，如 event
  readonly type: string

  // 指令名称，如 click
  readonly name: string

  // 当前 vnode 所有指令唯一的一个 key
  readonly key: string

  readonly value?: any

  // 必须有 hooks, 不然玩个毛...
  readonly hooks: DirectiveHooks

  // 取值函数
  readonly getter?: type.directiveGetter | void

  // 事件或函数调用式的指令会编译成 handler
  readonly handler?: type.directiveHandler | type.eventListener | void

  // 单向绑定的 keypath
  readonly binding?: string | void

  // 单向绑定的 hint，用于区分 attr 和 prop
  readonly hint?: number

}