export type Health = {
  id?: number;
  idParticipante: number;
  TipoSanguineo: string;
  PossuiAlergias: boolean;
  Alergias: string;
  PossuiProblemasSaude: boolean;
  ProblemasSaude: string;
  PossuiRestricaoAlimentar: boolean;
  RestricaoAlimentar: string;
  PossuiRestricaoMedicacao: boolean;
  RestricaoMedicacao: string;
  AcompanhamentoMedico: boolean;
  nomeMedico: string;
  EnfermidadeTratada: string;
  LocalAcompanhamento: string;
  FrequenciaAcompanhamento: string;
};
