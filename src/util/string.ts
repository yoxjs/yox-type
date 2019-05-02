export interface camelize { (str: string): string }

export interface hyphenate { (str: string): string }

export interface capitalize { (str: string): string }

export interface trim { (str: any): string }

export interface slice { (str: string, start: number, end?: number): string }

export interface indexOf { (str: string, part: string, start?: number): number }

export interface lastIndexOf { (str: string, part: string, end?: number): number }

export interface has { (str: string, part: string): boolean }

export interface startsWith { (str: string, part: string): boolean }

export interface endsWith { (str: string, part: string): boolean }

export interface charAt { (str: string, index?: number): string }

export interface codeAt { (str: string, index?: number): number }

export interface falsy { (str: any): boolean }
