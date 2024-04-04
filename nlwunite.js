let participantes = [
  {
    nome: "Hudson Luiz",
    email: "hudson@gmail.com",
    datainscricao: new Date(2024, 2, 22, 19, 20),
    datacheckin: new Date('2024, 2, 25, 22, 00')
  },
  {
    nome: "Maria Silva",
    email: "maria@gmail.com",
    datainscricao: new Date(2024, 2, 23, 14, 30),
    datacheckin: new Date(2024, 2, 26, 9, 45)
  },
  {
    nome: "João Oliveira",
    email: "joao@gmail.com",
    datainscricao: new Date(2024, 2, 24, 10, 15),
    datacheckin: new Date(2024, 2, 27, 16, 20)
  },
  {
    nome: "Ana Santos",
    email: "ana@gmail.com",
    datainscricao: new Date(2024, 2, 25, 20, 45),
    datacheckin: new Date(2024, 2, 28, 12, 10)
  },
  {
    nome: "Pedro Souza",
    email: "pedro@gmail.com",
    datainscricao: new Date(2024, 2, 26, 9, 0),
    datacheckin: new Date(2024, 2, 29, 18, 30)
  },
  {
    nome: "Camila Costa",
    email: "camila@gmail.com",
    datainscricao: new Date(2024, 2, 27, 16, 30),
    datacheckin: new Date(2024, 2, 30, 14, 15)
  },
  {
    nome: "Lucas Lima",
    email: "lucas@gmail.com",
    datainscricao: new Date(2024, 2, 28, 11, 20),
    datacheckin: new Date(2024, 3, 1, 20, 0)
  },
  {
    nome: "Fernanda Pereira",
    email: "fernanda@gmail.com",
    datainscricao: new Date(2024, 2, 29, 13, 10),
    datacheckin: new Date(2024, 3, 2, 10, 30)
  },
  {
    nome: "Rafael Martins",
    email: "rafael@gmail.com",
    datainscricao: new Date(2024, 2, 30, 18, 45),
    datacheckin: new Date(2024, 3, 3, 15, 20)
  },
  {
    nome: "Mariana Almeida",
    email: "mariana@gmail.com",
    datainscricao: new Date(2024, 3, 1, 8, 15),
    datacheckin: new Date(2024, 3, 4, 11, 45)
  }

  ]


const criarnovoparticipante = (participante) => {
  const datainscricao = dayjs(Date.now()).to(participante.datainscricao)
  
  let datacheckin = dayjs(Date.now()).to(participante.datacheckin)

 if(participante.datacheckin == null) {
    datacheckin = `
      <button
        data-email="${participante.email}"
        onclick="fazercheckin(event)"
      > 
        Confirmar Check-in
      </button>
    `
 }


  return `
  <tr>
      <td>
        <strong>
        ${participante.nome}
        </strong>
        <br>
        <small>
        ${participante.email}
        </small>
      </td>
      <td>${datainscricao}</td>
      <td>${datacheckin}</td>
    </tr>
  `
}

const atualizarlita = (participantes) => {

let output = ""

for(let participante of participantes) {
 output = output + criarnovoparticipante(participante)
}

document
.querySelector('tbody')
.innerHTML = output
}

atualizarlita(participantes)

const adicionarparticipante = (event) => {
  event.preventDefault()

  const dadosdoformulario = new FormData(event.target)

  const participante = {
    nome: dadosdoformulario.get('nome'),
    email: dadosdoformulario.get('email'),
    datainscricao: new Date(),
    datacheckin: null
  }

// verificar se o participante ja existe
  const participanteexiste = participantes.find(
    (p) => p.email == participante.email
  )

 if(participanteexiste) {
  alert('Este email já está cadastrado!')
  return 
}



  participantes = [participante, ...participantes]
  atualizarlita(participantes)


//Limpar formulario
event.target.querySelector('[name="nome"]').value = ""
event.target.querySelector('[name="email"]').value = ""

}

const fazercheckin = (event) => {


const mensagemconfirmacao = 'Tem certeza que deseja fazer o check-in?'
if(confirm('Tem certeza que deseja fazer o check-in?') == false) {
  return
}

  
const participante = participantes.find((p) => {
  return p.email == event.target.dataset.email
})

participante.datacheckin = new Date ()

atualizarlita(participantes)
}

