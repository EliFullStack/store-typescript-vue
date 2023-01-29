import { Module } from "vuex";
import { IState } from "@/store";
import state, { IProductsState } from "./state";


const productsModule: Module<IProductsState, IState> = {
    namespaced: true,
    state,
    
}

export default productsModule;