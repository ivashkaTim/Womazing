import {StateProducts} from "@/store/modules/products/state";

export type ActionType<F> = F extends (state: infer S, payload: infer P) => infer R ? (payload?: P) => Promise<R> : never
export type MutationType<F> = F extends (state: infer S, payload: infer P) => infer R ? (payload: P) => R : never

export type StateRoot = {
    products: StateProducts
}