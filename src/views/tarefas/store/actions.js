// import axios from '@/plugins/axios'

export const listar = async ({ commit }, params) => {
  try {
    //Example use axios
    // const res = await axios.post('/login', dados)

    // if (!res.data.erro) {
    //   commit('dados', res.data.dados)
    // }

    const resultado = {
      dados: [
        {
          id: 0,
          titulo: 'Título da Tarefa',
          tipo: 0,
          tipoNome: 'Nome do Tipo',
          classificacao: 0,
          classificacaoNome: 'Nome da Classificacao',
          status: 0,
          statusNome: 'Nome do Status',
          conteudo: 'Conteúdo/Descrição da Tarefa',
          tarefaId: 0,
          inicioCronograma: 'yyyy-mm-ddTHH:nn:ss.sssZ000',
          fimCronograma: 'yyyy-mm-ddTHH:nn:ss.sssZ000',
          inicioEtapas: 'yyyy-mm-ddTHH:nn:ss.sssZ000',
          fimEtapas: 'yyyy-mm-ddTHH:nn:ss.sssZ000',
          cronograma: [
            {
              inicio: 'yyyy-mm-ddTHH:nn:ss.sssZ000',
              fim: 'yyyy-mm-ddTHH:nn:ss.sssZ000',
              status: 0
            },
            {
              inicio: 'yyyy-mm-ddTHH:nn:ss.sssZ000',
              fim: 'yyyy-mm-ddTHH:nn:ss.sssZ000',
              status: 1
            }
          ],
          etapas: [
            {
              inicio: 'yyyy-mm-ddTHH:nn:ss.sssZ000',
              fim: 'yyyy-mm-ddTHH:nn:ss.sssZ000',
              status: 0
            },
            {
              inicio: 'yyyy-mm-ddTHH:nn:ss.sssZ000',
              fim: 'yyyy-mm-ddTHH:nn:ss.sssZ000',
              status: 1
            }
          ]
        }
      ],
      tipos: {
        tipo: [
          {
            id: 0,
            nome: 'Nome do Tipo',
            descricao: 'Descrição do Tipo'
          }
        ],
        classificacao: [
          {
            id: 0,
            nome: 'Nome da Classificação',
            descricao: 'Descrição do Classificação'
          }
        ],
        status: [
          {
            id: 0,
            nome: 'Nome do Status',
            descricao: 'Descrição do Status'
          }
        ]
      }
    }

    commit('tipos', resultado.tipos)
    commit('registros', resultado.dados)

    return resultado
  } catch (error) {
    return error
  }
}
