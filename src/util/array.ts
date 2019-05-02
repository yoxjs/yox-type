export interface join { (array: string[], separator: string): string }

export interface each<T> {
  (
    array: T[],
    callback: (item: T, index: number, length: number) => boolean | void,
    reversed?: boolean
  ): void
}

export interface push<T> { (array: T[], target: T | T[]): void }

export interface unshift<T> { (array: T[], target: T | T[]): void }

export interface toArray<T> { (array: T[] | ArrayLike<T>): T[] }

export interface toObject { (array: any[], key?: string | null, value?: any): Object }

export interface indexOf<T> { (array: T[], target: T, strict?: boolean): number }

export interface has<T> { (array: T[], target: T, strict?: boolean): boolean }

export interface last<T> { (array: T[]): T | void }

export interface pop<T> { (array: T[]): T | void }

export interface remove<T> { (array: T[], target: T, strict?: boolean): number }

export interface falsy { (array: any): boolean }