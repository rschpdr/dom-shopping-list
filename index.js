const shoppingList = document.getElementById("shopping-list");
const addItemBtn = document.getElementById("add-item-btn");
const mainItem = document.getElementById("main-item");

const mainMinusBtn = mainItem.querySelector(".shopping-btn-minus");
const mainPlusBtn = mainItem.querySelector(".shopping-btn-plus");

addListenerToButton(mainMinusBtn, "decrement");
addListenerToButton(mainPlusBtn, "increment");

addItemBtn.addEventListener("click", () => {
  // 1. Recuperar o que foi digitado pelo usuário
  // const input = document.querySelector('.shopping-item-text');
  const inputs = document.getElementsByClassName("shopping-item-text");

  console.log(inputs[0]);

  const currentItemText = inputs[0].value;

  // 2. Recuperar a quantidade desse item
  const currentItemQuantity =
    inputs[0].nextElementSibling.children[1].innerText;
  // const currentItemQuantity =
  //   shoppingList.firstElementChild.lastElementChild.children[1];

  console.log(currentItemQuantity);

  // 3. Gerar o HTML necessário

  // Opção 1
  const newItem = `<li>
    <input class="shopping-item-text" placeholder="Digite um item" value="${currentItemText}" />
    <div>
      <button class="shopping-btn-minus">-</button>
      <span class="shopping-item-quantity">${currentItemQuantity}</span>
      <button class="shopping-btn-plus">+</button>
    </div>
  </li>`;

  // Opção 2
  // const newItem = document.createElement("li");
  // const newInput = document.createElement("input");
  // const newDiv = document.createElement("div");
  // const newMinusBtn = document.createElement("button");
  // const newSpan = document.createElement("span");
  // const newPlusBtn = document.createElement("button");

  // newInput.classList.add("shopping-item-text");
  // newInput.value = currentItemText;

  // newMinusBtn.classList.add("shopping-btn-minus");
  // newMinusBtn.innerText = "-";
  // newSpan.classList.add("shopping-item-quantity");
  // newSpan.innerText = currentItemQuantity;
  // newPlusBtn.classList.add("shopping-btn-plus");
  // newPlusBtn.innerText = "+";

  // newItem.appendChild(newInput); // <li><input /></li>

  // newDiv.appendChild(newPlusBtn);
  // newDiv.appendChild(newSpan);
  // newDiv.appendChild(newMinusBtn);

  // newItem.appendChild(newDiv);

  // 4. Juntar o HTML gerado na lista existente

  // Opção 1

  shoppingList.innerHTML += newItem;

  // Opção 2

  // shoppingList.appendChild(newItem);

  // 5. Colocar os event listeners nos botões de + e -

  const allItems = shoppingList.querySelectorAll("li");
  const newlyCreatedItem = allItems[allItems.length - 1];
  const newlyCreatedSpan = newlyCreatedItem.lastElementChild.children[1];

  // newItem.nextElementSibling.firstElementChild se refere ao botão de -

  addListenerToButton(
    newlyCreatedItem.lastElementChild.firstElementChild,
    "decrement"
  );

  addListenerToButton(
    newlyCreatedItem.lastElementChild.lastElementChild,
    "increment"
  );
});

// Extrair a lógica de adicionar os listeners de evento pra uma função reutilizável para podermos usar esta função em todos os botões da página
function addListenerToButton(button, type) {
  button.addEventListener("click", () => {
    const span = button.nextElementSibling || button.previousElementSibling;

    let currentQuantity = parseInt(span.innerText);

    if (type === "increment") {
      currentQuantity++;
    } else {
      if (currentQuantity > 0) {
        currentQuantity--;
      }
    }

    span.innerText = currentQuantity;
  });
}
