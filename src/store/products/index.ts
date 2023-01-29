import { Module } from "vuex";
import { IState } from "@/store";
import state, { IProductsState } from "./state";
import getters from "./getters";


const productsModule: Module<IProductsState, IState> = {
    namespaced: true,
    state,
    getters
    
}

export default productsModule;