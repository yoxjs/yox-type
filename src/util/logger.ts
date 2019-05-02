export interface log { (msg: string): void }

export interface warn { (msg: string): void }

export interface error { (msg: string): void }

export interface fatal { (msg: string): never }