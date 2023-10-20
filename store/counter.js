export const state=()=> ({
    list:['Bangun','Kerja','Tidur']
})

export const getters = {
    getNomor: (state) => {
      return state.list
    }
}

export const mutations ={
    setNomor(state,data)  {
      return state.list.push(data);
    }
}