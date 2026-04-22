# Frontend Canvas: Checkbox Toggle + Select by ID + Select All

## 🎯 Objetivo
Implementar três comportamentos em uma lista de checkboxes:
1. **Toggle individual** (marcar/desmarcar um item)
2. **Select by ID** (marcar um item específico via JS, sabendo o ID)
3. **Select all / Deselect all** (marcar/desmarcar todos)

## 🧠 Lógica central (sem framework, JS puro)

### Estrutura HTML mínima
```html
<div id="app">
  <button id="selectAllBtn">Selecionar todos</button>
  <button id="deselectAllBtn">Desmarcar todos</button>
  <button id="selectByIdBtn">Selecionar item com ID 2</button>
  
  <ul id="list">
    <li><input type="checkbox" data-id="1"> Item 1</li>
    <li><input type="checkbox" data-id="2"> Item 2</li>
    <li><input type="checkbox" data-id="3"> Item 3</li>
  </ul>
</div>
```

```js
// 1. Selecionar elementos
const list = document.getElementById('list');
const selectAllBtn = document.getElementById('selectAllBtn');
const deselectAllBtn = document.getElementById('deselectAllBtn');
const selectByIdBtn = document.getElementById('selectByIdBtn');

// 2. Função auxiliar: pegar todos os checkboxes atuais (vivo, não estático)
function getAllCheckboxes() {
  return Array.from(document.querySelectorAll('#list input[type="checkbox"]'));
}

// 3. Toggle individual (já funciona nativamente com clique do usuário)
// Mas se você quiser togglar via JS:
function toggleCheckboxById(id) {
  const checkbox = document.querySelector(`#list input[data-id="${id}"]`);
  if (checkbox) {
    checkbox.checked = !checkbox.checked;
    // ⚠️ DISPARAR EVENTO MANUALMENTE se houver listeners de 'change'
    checkbox.dispatchEvent(new Event('change', { bubbles: true }));
  }
}

// 4. Select by ID (marcar, não toggle)
function selectById(id) {
  const checkbox = document.querySelector(`#list input[data-id="${id}"]`);
  if (checkbox && !checkbox.checked) {
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change', { bubbles: true }));
  }
}

// 5. Select all / Deselect all
function selectAll(checked) {
  getAllCheckboxes().forEach(cb => {
    if (cb.checked !== checked) {
      cb.checked = checked;
      cb.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
}

// 6. Sincronizar estado do "Select All" (se houver um checkbox mestre)
// ⚠️ ISSO É O QUE 90% ESQUECE:
function updateMasterCheckbox() {
  const all = getAllCheckboxes();
  const master = document.getElementById('masterCheckbox'); // vc precisa criar
  if (!master) return;
  
  const everyChecked = all.length > 0 && all.every(cb => cb.checked);
  const someChecked = all.some(cb => cb.checked);
  
  master.checked = everyChecked;
  master.indeterminate = someChecked && !everyChecked;
}

// Conectar eventos
selectAllBtn.onclick = () => selectAll(true);
deselectAllBtn.onclick = () => selectAll(false);
selectByIdBtn.onclick = () => selectById(2);

// Observar mudanças individuais para atualizar o mestre
list.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
    updateMasterCheckbox();
  }
});

// Inicializar
updateMasterCheckbox();
```
