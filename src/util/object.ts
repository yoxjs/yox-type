import ValueHolder from '../ValueHolder'

export interface keys { (object: Object): string[] }

export interface sort { (object: Object, desc?: boolean): string[] }

export interface each { (object: Object, callback: (value: any, key: string) => boolean | void): void }

export interface has { (object: Object, key: string | number): boolean }

export interface clear { (object: Object): void }

export interface extend { (original: Object, ...objects: Object[]): Object }

export interface copy { (object: any, deep?: boolean): any }

export interface get { (object: any, keypath: string): ValueHolder | undefined }

export interface set { (object: Object, keypath: string, value: any, autofill?: boolean): void }

export interface falsy { (object: any): boolean }