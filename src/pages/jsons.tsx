export const estados = [
  { uf: "AC", nome: "Acre" },
  { uf: "AL", nome: "Alagoas" },
  { uf: "AP", nome: "Amapá" },
  { uf: "AM", nome: "Amazonas" },
  { uf: "BA", nome: "Bahia" },
  { uf: "CE", nome: "Ceará" },
  { uf: "DF", nome: "Distrito Federal" },
  { uf: "ES", nome: "Espirito Santo" },
  { uf: "GO", nome: "Goiás" },
  { uf: "MA", nome: "Maranhão" },
  { uf: "MS", nome: "Mato Grosso do Sul" },
  { uf: "MT", nome: "Mato Grosso" },
  { uf: "MG", nome: "Minas Gerais" },
  { uf: "PA", nome: "Pará" },
  { uf: "PB", nome: "Paraíba" },
  { uf: "PR", nome: "Paraná" },
  { uf: "PE", nome: "Pernambuco" },
  { uf: "PI", nome: "Piauí" },
  { uf: "RJ", nome: "Rio de Janeiro" },
  { uf: "RN", nome: "Rio Grande do Norte" },
  { uf: "RS", nome: "Rio Grande do Sul" },
  { uf: "RO", nome: "Rondônia" },
  { uf: "RR", nome: "Roraima" },
  { uf: "SC", nome: "Santa Catarina" },
  { uf: "SP", nome: "São Paulo" },
  { uf: "SE", nome: "Sergipe" },
  { uf: "TO", nome: "Tocantins" },
];

export const genero = [
  { value: "Feminino", label: "Feminino" },
  { value: "Masculino", label: "Masculino" },
];

export const escolaridade = [
  { value: "1", label: "Ensino Fundamental" },
  { value: "2", label: "Ensino Médio" },
];

export const turnos = [
  { value: "1", label: "Manhã" },
  { value: "2", label: "Tarde" },
  { value: "3", label: "Noite" },
];

export const series = [
  { value: "1", label: "1º Ano" },
  { value: "2", label: "2º Ano" },
  { value: "3", label: "3º Ano" },
  { value: "4", label: "4º Ano" },
  { value: "5", label: "5º Ano" },
  { value: "6", label: "6º Ano" },
  { value: "7", label: "7º Ano" },
  { value: "8", label: "8º Ano" },
  { value: "9", label: "9º Ano" },
  { value: "10", label: "1º Ano do Ensino Médio" },
  { value: "11", label: "2º Ano do Ensino Médio" },
  { value: "12", label: "3º Ano do Ensino Médio" },
];

export const situacoes = [
  { value: "1", label: "reprovado" },
  { value: "2", label: "aprovado" },
];

export const locomocao = [
  { value: "1", label: "A pé" },
  { value: "2", label: "Bicicleta" },
  { value: "3", label: "ônibus" },
  { value: "4", label: "Escolar" },
  { value: "5", label: "Carona" },
  { value: "6", label: "Veículo" },
  { value: "7", label: "Manhã" },
  { value: "8", label: "proprio" },
  { value: "9", label: "cidade" },
];

export const boleano = [
  { value: "Sim", label: "True" },
  { value: "Não", label: "False" },
];

export const paisVivos = [
  { value: "Sim", label: "True" },
  { value: "Não", label: "False" },
  { value: "Somente Pai", label: "Pai" },
  { value: "Somente Mãe", label: "Mae" },
];

export const registroDeGuarda = [
  { value: "Sim", label: "True" },
  { value: "Não", label: "False" },
  { value: "Carta Social", label: "Carta Social" },
  { value: "Registro de Guarda", label: "Registro de Guarda" },
];

export const necsEspecs = [
  { value: "Nenhuma",  label: "Nenhuma" },
  { value: "Auditiva", label: "Auditiva" },
  { value: "Física",   label: "Física" },
  { value: "Mental",   label: "Mental" },
  { value: "Visual",   label: "Visual" },
  { value: "Motora",   label: "Motora" },
];

export const fatorRH = [
  { value: "A+",  label: "A+" },
  { value: "A-",  label: "A-" },
  { value: "B+",  label: "B+" },
  { value: "B-",  label: "B-" },
  { value: "AB+", label: "AB+"},
  { value: "AB-", label: "AB-"},
  { value: "O+",  label: "O+" },
  { value: "O-",  label: "O-" },
];
	
export const localAcomp = [
  { value: "Hospital Público", label: "Hospital Publico" },
  { value: "Clínica da Família", label: "Clinica da Familia" },
  { value: "Hospital Particular", label: "Hospital Particular" },
  { value: "Consultório", label: "Consultório" },
  { value: "Outros", label: "Outros" }
];

export const freqAcomp = [
  { value: "1x semana", label: "1x semana" },
  { value: "1x mes", label: "1x mes" },
  { value: "1x a cada 3 meses", label: "1x a cada 3 meses" },
  { value: "1x a cada semestre", label: "1x a cada semestre" },
];				
				
export const chefeFamilia = [
  { value: "Mulher", label: "Mulher" },
  { value: "Homem", label: "Homem" },
];		
        
export const domicilio = [
  { value: "Próprio", label: "Proprio" },
  { value: "Alugado", label: "alugado" },
  { value: "Cedido/Emprestado", label: "cedido/emprestado" },
  { value: "Invasao", label: "invasao" },
  { value: "Outros", label: "outros" },
];
				

export default estados;
