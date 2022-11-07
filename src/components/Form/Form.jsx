import React from 'react'
import { api } from '../../services/api'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import InputMask from "react-input-mask";
import * as yup from 'yup'

import './form.css'
import LoadingSpinner from '../Spinner/Spinner'
import axios from 'axios'

const validationFields = yup.object().shape({
    objContrato: yup.string().required('Este campo é obrigatório'),
    finalidade: yup.string().required('Este campo é obrigatório'),
    endObjeto: yup.string().required('Este campo é obrigatório'),
    numObjeto: yup.string().required('Este campo é obrigatório'),
    bairroObjeto: yup.string().required('Este campo é obrigatório'),
    cidadeObjeto: yup.string().required('Este campo é obrigatório'),
    cepObjeto: yup.string().required('Este campo é obrigatório'),
    locador: yup.string().required('Este campo é obrigatório'),
    nacionalidadeLocador: yup.string().required('Este campo é obrigatório'),
    estadoCivilLocador: yup.string().required('Este campo é obrigatório'),
    profissaoLocador: yup.string().required('Este campo é obrigatório'),
    cpfLocador: yup.string().required('Este campo é obrigatório'),
    rgLocador: yup.string().required('Este campo é obrigatório'),
    orgaoExpedidor: yup.string().required('Este campo é obrigatório'),
    ufExpedicao: yup.string().required('Este campo é obrigatório'),
    ruaLocador: yup.string().required('Este campo é obrigatório'),
    numLocador: yup.string().required('Este campo é obrigatório'),
    compLocador: yup.string().required('Este campo é obrigatório'),
    bairroLocador: yup.string().required('Este campo é obrigatório'),
    cidadeLocador: yup.string().required('Este campo é obrigatório'),
    ufLocador: yup.string().required('Este campo é obrigatório'),
    cepLocador: yup.string().required('Este campo é obrigatório'),
    locatario: yup.string().required('Este campo é obrigatório'),
    estadoCivilLocatario: yup.string().required('Este campo é obrigatório'),
    cpfLocatario: yup.string().required('Este campo é obrigatório'),
    rgLocatario: yup.string().required('Este campo é obrigatório'),
    orgaoExpedidorLocatario: yup.string().required('Este campo é obrigatório'),
    ufExpedicaoLocatario: yup.string().required('Este campo é obrigatório'),
    profissaoLocatario: yup.string().required('Este campo é obrigatório'),
    ruaLocatario: yup.string().required('Este campo é obrigatório'),
    numLocatario: yup.string().required('Este campo é obrigatório'),
    compLocatario: yup.string().required('Este campo é obrigatório'),
    bairroLocatario: yup.string().required('Este campo é obrigatório'),
    cidadeLocatario: yup.string().required('Este campo é obrigatório'),
    ufLocatario: yup.string().required('Este campo é obrigatório'),
    cepLocatario: yup.string().required('Este campo é obrigatório'),
    finalidadeLocacao: yup.string().required('Este campo é obrigatório'),
    prazoVigencia: yup.string().required('Este campo é obrigatório'),
    inicio: yup.string().required('Este campo é obrigatório'),
    termino: yup.string().required('Este campo é obrigatório'),
    valorMensal: yup.string().required('Este campo é obrigatório'),
    valorMensalAluguelEscrito: yup.string().required('Este campo é obrigatório'),
    valorGarantiaCaucao: yup.string().required('Este campo é obrigatório'),
    diaVencimento: yup.string().required('Este campo é obrigatório'),
    ciaEletrica: yup.string().required('Este campo é obrigatório'),
    nacionalidadeLocatario: yup.string().required('Este campo é obrigatório'),
})

export default function Form() {

    const [ message, setmessage ] = useState('')
    const [ messageError, setMessageError ] = useState('')
    const [baixarPdf, setBaixarPdf] = useState('')
    const [loading, setLoading] = useState(false)

    const {register, handleSubmit, setValue, setFocus, formState: { errors }} = useForm({
        resolver: yupResolver(validationFields)
    });

    const sendData = async data => api.post('/pdf', data).then((response) => {
        setmessage(response.data)
        setBaixarPdf('Baixar PDF')
    }).catch((error) => {
        if(error) {
            setMessageError(`Ops...Algo deu errado : ${error.message}`)
        }
    })


    const handleLoading = () => {
        setLoading(true)
        setMessageError('')
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }

    const getCepObjeto = (e) => {
        const cep = e.target.value
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
            setValue('ufObjeto', response.data.uf)
            setValue('endObjeto', response.data.logradouro)
            setValue('bairroObjeto', response.data.bairro)
            setValue('cidadeObjeto', response.data.localidade)
            setFocus('numObjeto')
        })
    }

    const getCepLocador = (e) => {
        const cep = e.target.value
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
            setValue('ufLocador', response.data.uf)
            setValue('ruaLocador', response.data.logradouro)
            setValue('bairroLocador', response.data.bairro)
            setValue('cidadeLocador', response.data.localidade)
    })
}

const getCepLocatario = (e) => {
    const cep = e.target.value
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
        setValue('ufLocatario', response.data.uf)
            setValue('ruaLocatario', response.data.logradouro)
            setValue('bairroLocatario', response.data.bairro)
            setValue('cidadeLocatario', response.data.localidade)
})

}
    return (
       <main>
        <div className='card-form'>
            <h1>Preencha todos os dados</h1>
            <div className='line-form'></div>

            <div className='card-body-form'>
                <form onSubmit={handleSubmit(sendData)}>
                
                <div className='section-card'>
                        <h2>Dados do imóvel</h2>
                    <div className='fields'>
                        <label>Descrição *</label>
                        <input className='card-input' type='text' name='objContrato' {...register('objContrato', {required: true})} />
                        <p className='error-message'>{errors.objContrato?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Finalidade *</label>
                        <select className='card-input' name='finalidade' {...register('finalidade', {required: true})}>
                            <option value="" disabled selected>Escolha uma opção</option>
                            <option value="comercial">Comercial</option>
                            <option value="residencial">Residencial</option>
                        </select>
                        <p className='error-message'>{errors.finalidade?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>CEP *</label>
                        <InputMask className='card-input' mask='99999-999' name='cepObjeto' {...register('cepObjeto', {required: true})} onBlur={getCepObjeto}></InputMask>
                        <p className='error-message'>{errors.cepObjeto?.message}</p>
                    </div>                 

                    <div className='fields'>
                        <label>Endereço *</label>
                        <input className='card-input' type='text' name='endObjeto' {...register('endObjeto', {required: true})} />
                        <p className='error-message'>{errors.endObjeto?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Nº *</label>
                        <input className='card-input' type='text' name='numObjeto' {...register('numObjeto', {required: true})} />
                        <p className='error-message'>{errors.numObjeto?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Bairro *</label>
                        <input className='card-input' type='text' name='bairroObjeto' {...register('bairroObjeto', {required: true})} />
                        <p className='error-message'>{errors.bairroObjeto?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Cidade *</label>
                        <input className='card-input' type='text' name='cidadeObjeto' {...register('cidadeObjeto', {required: true})} />
                        <p className='error-message'>{errors.cidadeObjeto?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>UF *</label>
                        <input className='card-input' type='text' name='ufObjeto' {...register('ufObjeto', {required: true})} />
                        <p className='error-message'>{errors.cidadeObjeto?.message}</p>
                    </div>

                </div>

                    <div className='section-card'>
                        <h2>Dados do locador</h2>
                    <div className='fields'>
                        <label>Nome *</label>
                        <input className='card-input' type='text' name='locador' {...register('locador', {required: true})} />
                        <p className='error-message'>{errors.locador?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Nacionalidade *</label>
                        <input className='card-input' type='text' name='nacionalidadeLocador' {...register('nacionalidadeLocador', {required: true})} />
                        <p className='error-message'>{errors.nacionalidadeLocador?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Estado Civíl *</label>
                        <input className='card-input' type='text' name='estadoCivilLocador' {...register('estadoCivilLocador', {required: true})}></input>
                        <p className='error-message'>{errors.estadoCivilLocador?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Profissão *</label>
                        <input className='card-input' type='text' name='profissaoLocador' {...register('profissaoLocador', {required: true})}></input>
                        <p className='error-message'>{errors.profissaoLocador?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>CPF *</label>
                        <InputMask className='card-input' mask='999.999.999-99' name='cpfLocador' {...register('cpfLocador', {required: true})}></InputMask>
                        <p className='error-message'>{errors.cpfLocador?.message}</p>
                    </div>


                    <div className='fields'>
                        <label>RG *</label>
                        <input className='card-input' name='rgLocador' {...register('rgLocador', {required: true})}></input>
                        <p className='error-message'>{errors.rgLocador?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Orgão Expedidor (Ex: SSP) *</label>
                        <input className='card-input' name='orgaoExpedidor' {...register('orgaoExpedidor', {required: true})}></input>
                        <p className='error-message'>{errors.orgaoExpedidor?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>UF Expedição *</label>
                        <input className='card-input' name='ufExpedicao' {...register('ufExpedicao', {required: true})}></input>
                        <p className='error-message'>{errors.ufExpedicao?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>CEP *</label>
                        <InputMask mask='99999-999' className='card-input' name='cepLocador' {...register('cepLocador', {required: true})} onBlur={getCepLocador}></InputMask>
                        <p className='error-message'>{errors.cepLocador?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Endereço *</label>
                        <input className='card-input' name='ruaLocador' {...register('ruaLocador', {required: true})}></input>
                        <p className='error-message'>{errors.ruaLocador?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Nº *</label>
                        <input className='card-input' name='numLocador' {...register('numLocador', {required: true})}></input>
                        <p className='error-message'>{errors.numLocador?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Complemento (Caso não haja preencher com "Não Há") *</label>
                        <input className='card-input' name='compLocador' {...register('compLocador', {required: true})}></input>
                        <p className='error-message'>{errors.compLocador?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Bairro *</label>
                        <input className='card-input' name='bairroLocador' {...register('bairroLocador', {required: true})}></input>
                        <p className='error-message'>{errors.bairroLocador?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Cidade *</label>
                        <input className='card-input' name='cidadeLocador' {...register('cidadeLocador', {required: true})}></input>
                        <p className='error-message'>{errors.cidadeLocador?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>UF *</label>
                        <input className='card-input' name='ufLocador' {...register('ufLocador', {required: true})}></input>
                        <p className='error-message'>{errors.ufLocador?.message}</p>
                    </div>


                    </div>

                    <div className='section-card'>
                        <h2>Dados do Locatário</h2>
                    <div className='fields'>
                        <label>Nome *</label>
                        <input className='card-input' type='text' name='locatario' {...register('locatario', {required: true})} />
                        <p className='error-message'>{errors.locatario?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Nacionalidade *</label>
                        <input className='card-input' type='text' name='nacionalidadeLocatario' {...register('nacionalidadeLocatario', {required: true})} />
                        <p className='error-message'>{errors.nacionalidadeLocatario?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Estado Civíl *</label>
                        <input className='card-input' name='estadoCivilLocatario' {...register('estadoCivilLocatario', {required: true})}></input>
                        <p className='error-message'>{errors.estadoCivilLocatario?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>CPF *</label>
                        <InputMask mask='999.999.999-99' className='card-input' name='cpfLocatario' {...register('cpfLocatario', {required: true})}></InputMask>
                        <p className='error-message'>{errors.cpfLocatario?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>RG *</label>
                        <input className='card-input' name='rgLocatario' {...register('rgLocatario', {required: true})}></input>
                        <p className='error-message'>{errors.rgLocatario?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Orgão Expedidor (Ex: SSP) *</label>
                        <input className='card-input' name='orgaoExpedidorLocatario' {...register('orgaoExpedidorLocatario', {required: true})}></input>
                        <p className='error-message'>{errors.orgaoExpedidorLocatario?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>UF Expedição *</label>
                        <input className='card-input' name='ufExpedicaoLocatario' {...register('ufExpedicaoLocatario', {required: true})}></input>
                        <p className='error-message'>{errors.ufExpedicaoLocatario?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Profissão *</label>
                        <input className='card-input' name='profissaoLocatario' {...register('profissaoLocatario', {required: true})}></input>
                        <p className='error-message'>{errors.profissaoLocatario?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>CEP *</label>
                        <InputMask mask='99999-999' className='card-input' name='cepLocatario' {...register('cepLocatario', {required: true})} onBlur={getCepLocatario}></InputMask>
                        <p className='error-message'>{errors.cepLocatario?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Endereço *</label>
                        <input className='card-input' name='ruaLocatario' {...register('ruaLocatario', {required: true})}></input>
                        <p className='error-message'>{errors.ruaLocatario?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Nº *</label>
                        <input className='card-input' name='numLocatario' {...register('numLocatario', {required: true})}></input>
                        <p className='error-message'>{errors.numLocatario?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Complemento *</label>
                        <input className='card-input' name='compLocatario' {...register('compLocatario', {required: true})}></input>
                        <p className='error-message'>{errors.compLocatario?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Bairro *</label>
                        <input className='card-input' name='bairroLocatario' {...register('bairroLocatario', {required: true})}></input>
                        <p className='error-message'>{errors.bairroLocatario?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Cidade *</label>
                        <input className='card-input' name='cidadeLocatario' {...register('cidadeLocatario', {required: true})}></input>
                        <p className='error-message'>{errors.cidadeLocatario?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>UF *</label>
                        <input className='card-input' name='ufLocatario' {...register('ufLocatario', {required: true})}></input>
                        <p className='error-message'>{errors.ufLocatario?.message}</p>
                    </div>

                    
                    </div>

                    <div className='section-card'>
                        <h2>Dados da Locação</h2>
                    <div className='fields'>
                        <label>Finalidade *</label>
                        <input className='card-input' type='text' name='finalidadeLocacao' {...register('finalidadeLocacao', {required: true})} />
                        <p className='error-message'>{errors.finalidadeLocacao?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Prazo de vigência (Meses) *</label>
                        <input mask='99' className='card-input' type='text' name='prazoVigencia' {...register('prazoVigencia', {required: true})} />
                        <p className='error-message'>{errors.prazoVigencia?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Início *</label>
                        <InputMask mask='99/99/9999' className='card-input' type='text' name='inicio' {...register('inicio', {required: true})} />
                        <p className='error-message'>{errors.inicio?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Término *</label>
                        <InputMask mask='99/99/9999' className='card-input' type='text' name='termino' {...register('termino', {required: true})} />
                        <p className='error-message'>{errors.termino?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Valor Mensal *</label>
                        <input className='card-input' type='text' name='valorMensal' {...register('valorMensal', {required: true})} />
                        <p className='error-message'>{errors.valorMensal?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Valor Mensal (Por escrito) *</label>
                        <input className='card-input' type='text' name='valorMensalAluguelEscrito' {...register('valorMensalAluguelEscrito', {required: true})} />
                        <p className='error-message'>{errors.valorMensalAluguelEscrito?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Valor da caução *</label>
                        <input className='card-input' type='text' name='valorGarantiaCaucao' {...register('valorGarantiaCaucao', {required: true})} />
                        <p className='error-message'>{errors.valorGarantiaCaucao?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Dia de Vencimento *</label>
                        <InputMask mask='99' className='card-input' type='text' name='diaVencimento' {...register('diaVencimento', {required: true})} />
                        <p className='error-message'>{errors.diaVencimento?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>CIA Elétrica *</label>
                        <input className='card-input' type='text' name='ciaEletrica' {...register('ciaEletrica', {required: true})} />
                        <p className='error-message'>{errors.ciaEletrica?.message}</p>
                    </div>
                    
                    </div>

                    <div className='section-card'>
                        <h2>Dados do(a) Corretor(a)</h2>
                    <div className='fields'>
                        <label>Nome *</label>
                        <input className='card-input' type='text' name='nomeCorretor' {...register('nomeCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Nacionalidade *</label>
                        <input className='card-input' type='text' name='nacionalidadeCorretor' {...register('nacionalidadeCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Estado Civíl *</label>
                        <input className='card-input' type='text' name='estadoCivilCorretor' {...register('estadoCivilCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>CPF *</label>
                        <InputMask className='card-input' mask='999.999.999-99' type='text' name='cpfCorretor' {...register('cpfCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>RG *</label>
                        <input className='card-input' type='text' name='rgCorretor' {...register('rgCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Orgão Expedidor *</label>
                        <input className='card-input' type='text' name='orgaoExpedidorCorretor' {...register('orgaoExpedidorCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>UF Expedição *</label>
                        <input className='card-input' type='text' name='ufExpedicaoCorretor' {...register('ufExpedicaoCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>CRECI *</label>
                        <input className='card-input' type='text' name='numCreci' {...register('numCreci', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Endereço *</label>
                        <input className='card-input' type='text' name='ruaCorretor' {...register('ruaCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Nº *</label>
                        <input className='card-input' type='text' name='numCorretor' {...register('numCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>CEP *</label>
                        <InputMask className='card-input' mask='99999-999' type='text' name='cepCorretor' {...register('cepCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Bairro *</label>
                        <input className='card-input' type='text' name='bairroCorretor' {...register('bairroCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Cidade *</label>
                        <input className='card-input' type='text' name='cidadeCorretor' {...register('cidadeCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>UF *</label>
                        <input className='card-input' type='text' name='ufCorretor' {...register('ufCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Honorários *</label>
                        <input className='card-input' type='text' name='valorServicoCorretor' {...register('valorServicoCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Valor por escrito *</label>
                        <input className='card-input' type='text' name='valorServicoEscrito' {...register('valorServicoEscrito', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Instituição Bancária *</label>
                        <input className='card-input' type='text' name='bancoCorretor' {...register('bancoCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Agência (sem dígito) *</label>
                        <input className='card-input' type='text' name='agCorretor' {...register('agCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Conta (com o dígito) *</label>
                        <input className='card-input' type='text' name='contaCorretor' {...register('contaCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>

                    <div className='fields'>
                        <label>Chave PIX *</label>
                        <input className='card-input' type='text' name='pixCorretor' {...register('pixCorretor', {required: true})} />
                        <p className='error-message'>{errors.campo?.message}</p>
                    </div>
                    
                    </div>



                    <div className='btn-generate'>
                        <button onClick={handleLoading} type='submit'>GERAR CONTRATO</button>
                    </div>

                    <div className='messageSuccess'>
                        <a href={message}>{baixarPdf}</a>
                    </div>

                    <div>
                        {loading ? <LoadingSpinner /> : sendData}
                    </div>

                    <div className='messageError'>
                        <p>{messageError}</p>
                    </div>

                    <div className='pix-container'>
                    <a className='pix' href="https://nubank.com.br/pagar/n824k/uqkAAKHBp4">Faça uma doação ao projeto</a> 
                    </div>
    
                </form>
                
            </div>
        </div>
       </main>
    )
}