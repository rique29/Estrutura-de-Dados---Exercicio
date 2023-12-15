// Criação de uma classe chamada DynamicList
class DynamicList {
  constructor() {
    // Inicializa a cabeça e o tamanho da lista como null e zero, respectivamente
    this.head = null
    this.length = 0
  }

  // Retorna o último nó da lista, ou null se a lista estiver vazia
  getLast() {
    // Inicializa uma variável com a cabeça da lista
    let current = this.head
    // Percorre a lista até encontrar o último nó, que tem o ponteiro next como null
    while (current != null && current.next != null) {
      current = current.next
    }
    // Retorna o último nó, ou null se a lista estiver vazia
    return current
  }

  // Adiciona um elemento no final da lista, se o elemento for válido
  append(element) {
    // Verifica se o elemento é válido
    if (!element) {
      // Se não for, encerra a função sem fazer nada
      return
    }

    // Cria um novo nó com o elemento
    const node = new Node(element)
    // Verifica se a lista está vazia
    if (this.head == null) {
      // Se estiver, adiciona o nó como a cabeça da lista
      this.head = node
    } else {
      // Caso contrário, adiciona o nó ao final da lista, usando o método getLast
      this.getLast().next = node
    }
    // Incrementa o tamanho da lista
    this.length++
  }
  
  // Insere um elemento em uma posição específica da lista, se a posição for válida
  insert(position, element) {
    // Verifica se a posição é válida
    if (position < 0 || position > this.size()) {
      // Se não for, lança um erro
      throw new Error('Invalid position')
    }

    // Cria um novo nó com o elemento
    const node = new Node(element)

    // Verifica se a posição é zero, ou seja, o início da lista
    if (position == 0) {
      // Se for, insere o nó antes do head e atualiza o head
      node.next = this.head
      this.head = node
    } else {
      // Caso contrário, percorre a lista até encontrar o nó anterior à posição desejada
      let previous = this.head
      let index = 0
      while (index < position - 1) {
        previous = previous.next
        index++
      }
      // Insere o nó depois do nó anterior e atualiza o ponteiro next
      node.next = previous.next
      previous.next = node
    }
    // Incrementa o tamanho da lista
    this.length++
  }

  // Remove um elemento da lista, dado o seu valor, se o elemento for válido
  remove(element) {
    // Verifica se o elemento é válido
    if (!element) {
      // Se não for, encerra a função sem fazer nada
      return
    }

    // Verifica se o head tem o elemento
    if (this.head.content == element) {
      // Se tiver, remove o head e atualiza o ponteiro next
      this.head = this.head.next
    } else {
      // Caso contrário, percorre a lista até encontrar o nó que tem o elemento
      let previous = this.head
      let current = this.head.next
      while (current != null) {
        // Se encontrar, remove o nó e atualiza o ponteiro next do nó anterior
        if (current.content == element) {
          previous.next = current.next
          // Encerra o loop
          break
        }
        // Atualiza os valores de previous e current
        previous = current
        current = current.next
      }
    }
    // Decrementa o tamanho da lista
    this.length--
  }

  // Remove um elemento de uma posição especifica da lista, se a posição for válida
  removeAt(position) {
    // Verifica se a posição é válida
    if (position < 0 || position > this.size() - 1) {
      // Se não for, lança um erro
      throw new Error('Invalid position')
    }

    // Verifica se a posição é zero, ou seja, o início da lista
    if (position == 0) {
      // Se for, remove o head e atualiza o ponteiro next
      this.head = this.head.next
    } else {
      // Caso contrário, percorre a lista até encontrar o nó anterior à posição desejada
      let previous = this.head
      let index = 0
      while (index < position - 1) {
        previous = previous.next
        index++
      }
      // Remove o nó na posição e atualiza o ponteiro next do nó anterior
      previous.next = previous.next.next
    }
    // Decrementa o tamanho da lista
    this.length--
  }

  // Retorna o tamanho da lista
  size() {
    return this.length
  }
  
  // Converte a lista em uma string, usando um separador opcional
  toString(separator = '-') {
    // Inicializa uma variável para armazenar a string
    let output = ''

    // Verifica se a lista está vazia
    if (this.head == null) {
      // Se estiver, retorna a string vazia
      return output
    }

    // Percorre a lista e concatena os valores dos nós com o separador
    for (let i = this.head; i != null; i = i.next) {
      output = output + i.content + separator
    }

    // Remove o último separador da string
    const outputCut = output.length - separator.length
    output = output.substring(0, outputCut)
    // Retorna a string
    return output
  }
}