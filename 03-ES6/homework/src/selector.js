var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)=== true) resultSet.push(startEl);
  
  for(let i = 0; i<startEl.children.length; i ++){
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet =[...resultSet,...result]
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === '#') return "id"
  if (selector[0] === '.') return "class"
  if (selector.includes('.')) return "tag.class"
  if (selector) return "tag"
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction 
  if (selectorType === "id") { 
    matchFunction = function(element) {
      // if(`#${element.id}` === selector) return true
      if(element.id === selector.slice(1)) return true
      return false
    };
  } else if (selectorType === "class") {
    matchFunction = function(element) {
      //if(`.${element.className}` === selector) return true
      // if(element.className.split(' ').includes(selector.slice(1))) return true
      if(element.className === selector.slice(1)) return true
      if(element.classList.contains(selector.slice(1))) return true
      return false
    }; 
  } else if (selectorType === "tag.class") {
    // debería devolver un función que matchie el TAG.CLASS que devuelva TRUE cuando el elemento matchea el tagName AND Class
    // debería devolver un función que matchie el TAG.CLASS que devuelva FALSE si el elemento no matchea el tag
    // debería devolver un función que matchie el TAG.CLASS que devuelva FALSE si el elemento no matchea el className
    matchFunction = function(element) {
      //selector = "img.photo"
      const selectorArray = selector.split('.') // El selector se transforma en un arreglo de strings
      //selector = ["img", "photo"]
      // const find = element.className.split(' ').find(e => e === selectorArray[1])
      // element.className = "It's a img for instragram"
      // element.className = ["It's", "a", "img", "for", "instragram"] cuando aplicamos el split
      // el find recorre el arreglo element.className buscando match(coincidencia) con la palabra "photo"
      // if(element.tagName.toLowerCase() === selectorArray[0] && find) return true
      // if(find) return true
      if(element.tagName.toLowerCase() === selectorArray[0] && element.classList.contains(selectorArray[1])) return true
      if(element.tagName.toLowerCase() !== selectorArray[0]) return false
      if(element.classList.contains(selectorArray[1])) return true
      return false
    }
  } else if (selectorType === "tag") {
    matchFunction = function(element) {
      if(element.tagName.toLowerCase() === selector) return true
      return false
    };
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
