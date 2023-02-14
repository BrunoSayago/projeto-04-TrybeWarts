const botaoEnviarHeader = document.getElementById('submit-header');
const emailHeader = document.getElementById('email-header');
const passwordHeader = document.getElementById('password-header');
const counter = document.getElementById('counter');
const textarea = document.getElementById('textarea');
const formData = document.getElementById('form-data');
const forms = document.getElementById('evaluation-form');

function mudaContador(evento) {
  const text = evento.target.value;
  const numeroCarac = text.length;
  const diferenca = 500 - numeroCarac;
  counter.innerText = diferenca;
}

textarea.addEventListener('keyup', mudaContador);

function enviaHeader(evento) {
  if (emailHeader.value === 'tryber@teste.com' && passwordHeader.value === '123456') {
    evento.preventDefault();
    window.alert('Olá, Tryber!');
  } else {
    evento.preventDefault();
    window.alert('Email ou senha inválidos.');
  }
}

botaoEnviarHeader.addEventListener('click', enviaHeader);

const button = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
function desativar() {
  button.disabled = true;
}

window.onload = desativar;
function ativar() {
  if (checkbox.checked === true) {
    button.disabled = false;
  } else if (checkbox.checked === false) {
    button.disabled = true;
  }
}
checkbox.addEventListener('click', ativar);

function mudaNome() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const dataNome = document.getElementById('data-nome');
  dataNome.innerText = `Nome: ${nome} ${sobrenome}`;
}

function mudaEmail() {
  const emailForm = document.getElementById('input-email').value;
  const dataEmail = document.getElementById('data-email');
  dataEmail.innerText = `Email: ${emailForm}`;
}

function mudaCasa() {
  const casa = document.getElementById('house').value;
  const dataCasa = document.getElementById('data-casa');
  dataCasa.innerText = `Casa: ${casa}`;
}

function mudaFamilia() {
  const listaFamilia = document.getElementsByClassName('familia');
  const dataFamilia = document.getElementById('data-familia');
  let indexFamiliaMarcada;
  for (let index = 0; index < listaFamilia.length; index += 1) {
    if (listaFamilia[index].checked) {
      indexFamiliaMarcada = index;
    }
  }
  const familiaMarcada = listaFamilia[indexFamiliaMarcada].value;
  dataFamilia.innerText = `Família: ${familiaMarcada}`;
}

function achaMateriaMarcada() {
  const listaMaterias = document.getElementsByClassName('subject');
  const listaMateriaMarcada = [];
  for (let index = 0; index < listaMaterias.length; index += 1) {
    if (listaMaterias[index].checked) {
      listaMateriaMarcada.push(listaMaterias[index].value);
    }
  }
  return listaMateriaMarcada;
}

function mudaMaterias() {
  const dataMateria = document.getElementById('data-materia');
  const listaMateriaMarcada = achaMateriaMarcada();
  let textData = 'Matérias:';
  for (let index2 = 0; index2 < listaMateriaMarcada.length; index2 += 1) {
    if (index2 < listaMateriaMarcada.length - 1) {
      textData = textData.concat(` ${listaMateriaMarcada[index2]},`);
    } else {
      textData = textData.concat(` ${listaMateriaMarcada[index2]}`);
    }
  }
  dataMateria.innerText = textData;
}

function mudaAvaliacao() {
  const listaAvaliacao = document.getElementsByClassName('radio');
  const dataAvaliacao = document.getElementById('data-avaliacao');
  let indexAvaliacaoMarcada;
  for (let index = 0; index < listaAvaliacao.length; index += 1) {
    if (listaAvaliacao[index].checked) {
      indexAvaliacaoMarcada = index;
    }
  }
  const avaliacaoMarcada = listaAvaliacao[indexAvaliacaoMarcada].value;
  dataAvaliacao.innerText = `Avaliação: ${avaliacaoMarcada}`;
}

function mudaObservacao() {
  const observacao = document.getElementById('textarea').value;
  const dataObs = document.getElementById('data-obs');
  dataObs.innerText = `Observações: ${observacao}`;
}

function mudaFormData() {
  mudaNome();
  mudaEmail();
  mudaCasa();
  mudaFamilia();
  mudaMaterias();
  mudaAvaliacao();
  mudaObservacao();
}

function enviarForms(evento) {
  mudaFormData();
  evento.preventDefault();
  forms.style.display = 'none';
  formData.style.display = 'flex';
}

button.addEventListener('click', enviarForms);
