import { Module } from "vuex";
import { IState } from "@/store";
import state, { IProductsState } from "./state";
import getters from "./getters";
import mutations from "./mutations";


const productsModule: Module<IProductsState, IState> = {
    namespaced: true,
    state,
    getters,
    mutations
    
}

export default productsModule;