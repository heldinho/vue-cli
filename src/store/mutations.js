const mutations = {
  MUTATION_LANGUAGE: (state, payload) => {
    let lang = payload.lang === 'BR' ? 'pt-br' : payload.lang
    state.language = lang
    localStorage.setItem('lang', lang)
    payload.i18n.locale = lang
    payload.moment.locale(lang)
  }
}
export default mutations
