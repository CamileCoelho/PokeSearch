export class PokemonService {
  selecionarPokemonPorNome(nome) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

    return fetch(url)
      .then((res) => this.processarResposta(res))
      .then((obj) => this.mapearPokemon(obj));
  }

  mapearPokemon(obj) {
    return {
      id: obj.id,
      nome: obj.name,
      spriteUrl: obj.sprites.other['official-artwork'].front_default,
    };
  }

  processarResposta(resposta) {
    if (resposta.ok) return resposta.json();
    throw new Error('Pokémon não encontrado!');
  }
}
