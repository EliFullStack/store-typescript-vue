import myStoreApi from "@/api/myStoreApi";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

    
const actions: ActionTree<IProductsState, IState> = {

    async fetchProducts({ commit }) {
    
    commit("setIsLoading", true);

    const { data } = await myStoreApi.get<unknown, AxiosResponse<Product[]>>("/products");

    commit("setIsLoading", false);

    commit("setProducts", data);
    }
}

export default actions;
