// Criação de uma classe chamada ArrayList
class ArrayList {
  constructor() {
    // Criação de um novo Array
    this.data = new Array()
  }

  // Adiciona um elemento ao final da lista
  append(element) {
    this.data[this.size()] = element
  }

  // Insere um elemento em uma posição específica da lista
  insert(position, element) {
    // Lança um erro se a posição for inválida
    if (position < 0 || position > this.size()) {
      throw new Error('Invalid position')
    }

    // Usa o método push se a posição for igual ao tamanho do array
    if (position == this.data.length) {
      this.data.push(element)
    } else {
      // Usa o método splice para inserir o elemento na posição sem remover nenhum elemento
      this.data.splice(position, 0, element)
    }
  }

  // Remove um elemento da lista, dado o seu valor
  remove(element) {
    // Obtém o índice do elemento usando o método auxiliar _getIndexOf
    let index = this._getIndexOf(element)

    // Remove o elemento no índice encontrado
    this.removeAt(index)
  }

  // Remove um elemento de uma posição especifica da lista
  removeAt(position) {
    // Lança um erro se a posição for inválida
    if (position < 0 || position > this.size() - 1) {
      throw new Error('Invalid position')
    }

    // Remove o elemento na posição e retorna o valor removido
    return this.data.splice(index, 1)
  }

  // Retorna o tamanho da lista
  size() {
    return this.data.length
  }

  // Converte a lista em uma string, usando um separador opcional
  toString(separator = '-') {
    return this.data.join(separator)
  }

  // Retorna o índice de um elemento na lista, ou lança um erro se não encontrar
  _getIndexOf(element) {
    // Lança um erro se o array estiver vazio
    if (this.data.length == 0) {
      throw new Error('empty list')
    }

    // Percorre o array até encontrar o elemento ou chegar ao final
    let i = 0
    while (i < this.data.length) {
      if (this.data[i] == element) {
        // Retorna o índice do elemento
        return i
      }
      i++
    }

    // Lança um erro se o elemento não for encontrado
    throw new Error('not found')
  }
}
