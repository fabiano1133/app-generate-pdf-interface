import React from "react";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";
import * as yup from "yup";

import "./style.css";
import LoadingSpinner from "../Spinner/Spinner";
import axios from "axios";

const validationFields = yup.object().shape({
  descricaoImovel: yup.string().required("Este campo é obrigatório"),
  finalidadeLocacao: yup.string().required("Este campo é obrigatório"),
  cepImovel: yup.string().required("Este campo é obrigatório"),
  logradouroImovel: yup.string().required("Este campo é obrigatório"),
  complementoImovel: yup.string().required("Este campo é obrigatório"),
  numeroImovel: yup.string().required("Este campo é obrigatório"),
  bairroImovel: yup.string().required("Este campo é obrigatório"),
  cidadeImovel: yup.string().required("Este campo é obrigatório"),
  ufImovel: yup.string().required("Este campo é obrigatório"),
  contaContrato: yup.string().required("Este campo é obrigatório"),
  nomeLocador: yup.string().required("Este campo é obrigatório"),
  nacionalidadeLocador: yup.string().required("Este campo é obrigatório"),
  estadoCivilLocador: yup.string().required("Este campo é obrigatório"),
  ocupacaoLocador: yup.string().required("Este campo é obrigatório"),
  cpfLocador: yup.string().required("Este campo é obrigatório"),
  rgLocador: yup.string().required("Este campo é obrigatório"),
  orgaoExpedidorLocador: yup.string().required("Este campo é obrigatório"),
  ufExpedidorLocador: yup.string().required("Este campo é obrigatório"),
  cepLocador: yup.string().required("Este campo é obrigatório"),
  logradouroLocador: yup.string().required("Este campo é obrigatório"),
  numeroLocador: yup.string().required("Este campo é obrigatório"),
  complementoLocador: yup.string().required("Este campo é obrigatório"),
  bairroLocador: yup.string().required("Este campo é obrigatório"),
  cidadeLocador: yup.string().required("Este campo é obrigatório"),
  ufLocador: yup.string().required("Este campo é obrigatório"),
  nomeLocatario: yup.string().required("Este campo é obrigatório"),
  nacionalidadeLocatario: yup.string().required("Este campo é obrigatório"),
  estadoCivilLocatario: yup.string().required("Este campo é obrigatório"),
  cpfLocatario: yup.string().required("Este campo é obrigatório"),
  rgLocatario: yup.string().required("Este campo é obrigatório"),
  orgaoExpedidorLocatario: yup.string().required("Este campo é obrigatório"),
  ufExpedidorLocatario: yup.string().required("Este campo é obrigatório"),
  ocupacaoLocatario: yup.string().required("Este campo é obrigatório"),
  cepLocatario: yup.string().required("Este campo é obrigatório"),
  logradouroLocatario: yup.string().required("Este campo é obrigatório"),
  numeroLocatario: yup.string().required("Este campo é obrigatório"),
  complementoLocatario: yup.string().required("Este campo é obrigatório"),
  bairroLocatario: yup.string().required("Este campo é obrigatório"),
  cidadeLocatario: yup.string().required("Este campo é obrigatório"),
  ufLocatario: yup.string().required("Este campo é obrigatório"),
  prazoLocacao: yup.string().required("Este campo é obrigatório"),
  dataInicio: yup.string().required("Este campo é obrigatório"),
  dataFim: yup.string().required("Este campo é obrigatório"),
  valorAluguel: yup.string().required("Este campo é obrigatório"),
  valorAluguelEscrito: yup.string().required("Este campo é obrigatório"),
  fiador: yup.string().required("Este campo é obrigatório"),
  nacionalidadeFiador: yup.string().required("Este campo é obrigatório"),
  ocupacaoFiador: yup.string().required("Este campo é obrigatório"),
  estadoCivilFiador: yup.string().required("Este campo é obrigatório"),
  rgFiador: yup.string().required("Este campo é obrigatório"),
  orgaoExpedidorFiador: yup.string().required("Este campo é obrigatório"),
  ufExpedidorFiador: yup.string().required("Este campo é obrigatório"),
  cpfFiador: yup.string().required("Este campo é obrigatório"),
  cepFiador: yup.string().required("Este campo é obrigatório"),
  logradouroFiador: yup.string().required("Este campo é obrigatório"),
  numeroFiador: yup.string().required("Este campo é obrigatório"),
  complementoFiador: yup.string().required("Este campo é obrigatório"),
  bairroFiador: yup.string().required("Este campo é obrigatório"),
  cidadeFiador: yup.string().required("Este campo é obrigatório"),
  ufFiador: yup.string().required("Este campo é obrigatório"),
  foroContrato: yup.string().required("Este campo é obrigatório"),
  nomeCorretor: yup.string().required("Este campo é obrigatório"),
  nacionalidadeCorretor: yup.string().required("Este campo é obrigatório"),
  estadoCivilCorretor: yup.string().required("Este campo é obrigatório"),
  cpfCorretor: yup.string().required("Este campo é obrigatório"),
  rgCorretor: yup.string().required("Este campo é obrigatório"),
  orgaoExpedidorCorretor: yup.string().required("Este campo é obrigatório"),
  ufExpedidorCorretor: yup.string().required("Este campo é obrigatório"),
  creciCorretor: yup.string().required("Este campo é obrigatório"),
  logradouroCorretor: yup.string().required("Este campo é obrigatório"),
  numeroCorretor: yup.string().required("Este campo é obrigatório"),
  cepCorretor: yup.string().required("Este campo é obrigatório"),
  bairroCorretor: yup.string().required("Este campo é obrigatório"),
  cidadeCorretor: yup.string().required("Este campo é obrigatório"),
  ufCorretor: yup.string().required("Este campo é obrigatório"),
  honorariosCorretor: yup.string().required("Este campo é obrigatório"),
  bancoCorretor: yup.string().required("Este campo é obrigatório"),
  agenciaCorretor: yup.string().required("Este campo é obrigatório"),
  contaCorretor: yup.string().required("Este campo é obrigatório"),
  chavePixCorretor: yup.string().required("Este campo é obrigatório"),
});

export default function FormFiador() {
  const [message, setmessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [baixarPdf, setBaixarPdf] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationFields),
  });

  const sendData = async (data) =>
    api
      .post("/contrato-aluguel-fiador", data)
      .then((response) => {
        setmessage(response.data);
        setBaixarPdf("Baixar PDF");
      })
      .catch((error) => {
        if (error) {
          setMessageError(`Ops...Algo deu errado : ${error.message}`);
        }
      });

  const handleLoading = () => {
    setLoading(true);
    setMessageError("");
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const getCepImovel = (e) => {
    const cep = e.target.value;
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      setValue("ufImovel", response.data.uf);
      setValue("logradouroImovel", response.data.logradouro);
      setValue("bairroImovel", response.data.bairro);
      setValue("cidadeImovel", response.data.localidade);
      setFocus("numeroImovel");
    });
  };

  const getCepLocador = (e) => {
    const cep = e.target.value;
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      setValue("ufLocador", response.data.uf);
      setValue("logradouroLocador", response.data.logradouro);
      setValue("bairroLocador", response.data.bairro);
      setValue("cidadeLocador", response.data.localidade);
      setFocus("numeroLocador");
    });
  };

  const getCepLocatario = (e) => {
    const cep = e.target.value;
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      setValue("ufLocatario", response.data.uf);
      setValue("logradouroLocatario", response.data.logradouro);
      setValue("bairroLocatario", response.data.bairro);
      setValue("cidadeLocatario", response.data.localidade);
      setFocus("numeroLocatario");
    });
  };

  const getCepFiador = (e) => {
    const cep = e.target.value;
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      setValue("ufFiador", response.data.uf);
      setValue("logradouroFiador", response.data.logradouro);
      setValue("bairroFiador", response.data.bairro);
      setValue("cidadeFiador", response.data.localidade);
      setFocus("numeroFiador");
    });
  };
  return (
    <main>
      <div className="card-form">
        <h1>Preencha todos os dados</h1>
        <div className="line-form"></div>

        <div className="card-body-form">
          <form onSubmit={handleSubmit(sendData)}>
            <div className="section-card">
              <h2>Dados do imóvel</h2>
              <div className="fields">
                <label>Descrição *</label>
                <input
                  className="card-input"
                  type="text"
                  name="descricaoImovel"
                  {...register("descricaoImovel", { required: true })}
                />
                <p className="error-message">
                  {errors.descricaoImovel?.message}
                </p>
              </div>

              <div className="fields">
                <label>Finalidade *</label>
                <select
                  className="card-input"
                  name="finalidadeLocacao"
                  {...register("finalidadeLocacao", { required: true })}
                >
                  <option value="" disabled selected>
                    Escolha uma opção
                  </option>
                  <option value="comercial">Comercial</option>
                  <option value="residencial">Residencial</option>
                </select>
                <p className="error-message">
                  {errors.finalidadeLocacao?.message}
                </p>
              </div>

              <div className="fields">
                <label>CEP *</label>
                <InputMask
                  className="card-input"
                  mask="99999-999"
                  name="cepImovel"
                  {...register("cepImovel", { required: true })}
                  onBlur={getCepImovel}
                ></InputMask>
                <p className="error-message">{errors.cepImovel?.message}</p>
              </div>

              <div className="fields">
                <label>Endereço *</label>
                <input
                  className="card-input"
                  type="text"
                  name="logradouroImovel"
                  {...register("logradouroImovel", { required: true })}
                />
                <p className="error-message">
                  {errors.logradouroImovel?.message}
                </p>
              </div>

              <div className="fields">
                <label>Complemento *</label>
                <input
                  className="card-input"
                  type="text"
                  name="complementoImovel"
                  {...register("complementoImovel", { required: true })}
                />
                <p className="error-message">
                  {errors.complementoImovel?.message}
                </p>
              </div>

              <div className="fields">
                <label>Nº *</label>
                <input
                  className="card-input"
                  type="text"
                  name="numeroImovel"
                  {...register("numeroImovel", { required: true })}
                />
                <p className="error-message">{errors.numeroImovel?.message}</p>
              </div>

              <div className="fields">
                <label>Bairro *</label>
                <input
                  className="card-input"
                  type="text"
                  name="bairroImovel"
                  {...register("bairroImovel", { required: true })}
                />
                <p className="error-message">{errors.bairroImovel?.message}</p>
              </div>

              <div className="fields">
                <label>Cidade *</label>
                <input
                  className="card-input"
                  type="text"
                  name="cidadeImovel"
                  {...register("cidadeImovel", { required: true })}
                />
                <p className="error-message">{errors.cidadeImovel?.message}</p>
              </div>

              <div className="fields">
                <label>UF *</label>
                <input
                  className="card-input"
                  type="text"
                  name="ufImovel"
                  {...register("ufImovel", { required: true })}
                />
                <p className="error-message">{errors.ufImovel?.message}</p>
              </div>

              <div className="fields">
                <label>Conta Contrato (Nº Serviços Elétricos) *</label>
                <input
                  className="card-input"
                  type="text"
                  name="contaContrato"
                  {...register("contaContrato", { required: true })}
                />
                <p className="error-message">{errors.contaContrato?.message}</p>
              </div>
            </div>

            <div className="section-card">
              <h2>Dados do locador</h2>
              <div className="fields">
                <label>Nome *</label>
                <input
                  className="card-input"
                  type="text"
                  name="nomeLocador"
                  {...register("nomeLocador", { required: true })}
                />
                <p className="error-message">{errors.nomeLocador?.message}</p>
              </div>

              <div className="fields">
                <label>Nacionalidade *</label>
                <input
                  className="card-input"
                  type="text"
                  name="nacionalidadeLocador"
                  {...register("nacionalidadeLocador", { required: true })}
                />
                <p className="error-message">
                  {errors.nacionalidadeLocador?.message}
                </p>
              </div>

              <div className="fields">
                <label>Estado Civíl *</label>
                <input
                  className="card-input"
                  type="text"
                  name="estadoCivilLocador"
                  {...register("estadoCivilLocador", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.estadoCivilLocador?.message}
                </p>
              </div>

              <div className="fields">
                <label>Profissão *</label>
                <input
                  className="card-input"
                  type="text"
                  name="ocupacaoLocador"
                  {...register("ocupacaoLocador", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.ocupacaoLocador?.message}
                </p>
              </div>

              <div className="fields">
                <label>CPF *</label>
                <InputMask
                  className="card-input"
                  mask="999.999.999-99"
                  name="cpfLocador"
                  {...register("cpfLocador", { required: true })}
                ></InputMask>
                <p className="error-message">{errors.cpfLocador?.message}</p>
              </div>

              <div className="fields">
                <label>RG *</label>
                <input
                  className="card-input"
                  name="rgLocador"
                  {...register("rgLocador", { required: true })}
                ></input>
                <p className="error-message">{errors.rgLocador?.message}</p>
              </div>

              <div className="fields">
                <label>Orgão Expedidor (Ex: SSP) *</label>
                <input
                  className="card-input"
                  name="orgaoExpedidorLocador"
                  {...register("orgaoExpedidorLocador", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.orgaoExpedidorLocador?.message}
                </p>
              </div>

              <div className="fields">
                <label>UF Expedição *</label>
                <input
                  className="card-input"
                  name="ufExpedidorLocador"
                  {...register("ufExpedidorLocador", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.ufExpedidorLocador?.message}
                </p>
              </div>

              <div className="fields">
                <label>CEP *</label>
                <InputMask
                  mask="99999-999"
                  className="card-input"
                  name="cepLocador"
                  {...register("cepLocador", { required: true })}
                  onBlur={getCepLocador}
                ></InputMask>
                <p className="error-message">{errors.cepLocador?.message}</p>
              </div>

              <div className="fields">
                <label>Endereço *</label>
                <input
                  className="card-input"
                  name="logradouroLocador"
                  {...register("logradouroLocador", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.logradouroLocador?.message}
                </p>
              </div>

              <div className="fields">
                <label>Nº *</label>
                <input
                  className="card-input"
                  name="numeroLocador"
                  {...register("numeroLocador", { required: true })}
                ></input>
                <p className="error-message">{errors.numeroLocador?.message}</p>
              </div>

              <div className="fields">
                <label>
                  Complemento (Caso não haja preencher com "Não Há") *
                </label>
                <input
                  className="card-input"
                  name="complementoLocador"
                  {...register("complementoLocador", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.complementoLocador?.message}
                </p>
              </div>

              <div className="fields">
                <label>Bairro *</label>
                <input
                  className="card-input"
                  name="bairroLocador"
                  {...register("bairroLocador", { required: true })}
                ></input>
                <p className="error-message">{errors.bairroLocador?.message}</p>
              </div>

              <div className="fields">
                <label>Cidade *</label>
                <input
                  className="card-input"
                  name="cidadeLocador"
                  {...register("cidadeLocador", { required: true })}
                ></input>
                <p className="error-message">{errors.cidadeLocador?.message}</p>
              </div>

              <div className="fields">
                <label>UF *</label>
                <input
                  className="card-input"
                  name="ufLocador"
                  {...register("ufLocador", { required: true })}
                ></input>
                <p className="error-message">{errors.ufLocador?.message}</p>
              </div>
            </div>

            <div className="section-card">
              <h2>Dados do Locatário</h2>
              <div className="fields">
                <label>Nome *</label>
                <input
                  className="card-input"
                  type="text"
                  name="nomeLocatario"
                  {...register("nomeLocatario", { required: true })}
                />
                <p className="error-message">{errors.nomeLocatario?.message}</p>
              </div>

              <div className="fields">
                <label>Nacionalidade *</label>
                <input
                  className="card-input"
                  type="text"
                  name="nacionalidadeLocatario"
                  {...register("nacionalidadeLocatario", { required: true })}
                />
                <p className="error-message">
                  {errors.nacionalidadeLocatario?.message}
                </p>
              </div>

              <div className="fields">
                <label>Estado Civíl *</label>
                <input
                  className="card-input"
                  name="estadoCivilLocatario"
                  {...register("estadoCivilLocatario", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.estadoCivilLocatario?.message}
                </p>
              </div>

              <div className="fields">
                <label>CPF *</label>
                <InputMask
                  mask="999.999.999-99"
                  className="card-input"
                  name="cpfLocatario"
                  {...register("cpfLocatario", { required: true })}
                ></InputMask>
                <p className="error-message">{errors.cpfLocatario?.message}</p>
              </div>

              <div className="fields">
                <label>RG *</label>
                <input
                  className="card-input"
                  name="rgLocatario"
                  {...register("rgLocatario", { required: true })}
                ></input>
                <p className="error-message">{errors.rgLocatario?.message}</p>
              </div>

              <div className="fields">
                <label>Orgão Expedidor (Ex: SSP) *</label>
                <input
                  className="card-input"
                  name="orgaoExpedidorLocatario"
                  {...register("orgaoExpedidorLocatario", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.orgaoExpedidorLocatario?.message}
                </p>
              </div>

              <div className="fields">
                <label>UF Expedição *</label>
                <input
                  className="card-input"
                  name="ufExpedidorLocatario"
                  {...register("ufExpedidorLocatario", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.ufExpedidorLocatario?.message}
                </p>
              </div>

              <div className="fields">
                <label>Profissão *</label>
                <input
                  className="card-input"
                  name="ocupacaoLocatario"
                  {...register("ocupacaoLocatario", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.ocupacaoLocatario?.message}
                </p>
              </div>

              <div className="fields">
                <label>CEP *</label>
                <InputMask
                  mask="99999-999"
                  className="card-input"
                  name="cepLocatario"
                  {...register("cepLocatario", { required: true })}
                  onBlur={getCepLocatario}
                ></InputMask>
                <p className="error-message">{errors.cepLocatario?.message}</p>
              </div>

              <div className="fields">
                <label>Endereço *</label>
                <input
                  className="card-input"
                  name="logradouroLocatario"
                  {...register("logradouroLocatario", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.logradouroLocatario?.message}
                </p>
              </div>

              <div className="fields">
                <label>Nº *</label>
                <input
                  className="card-input"
                  name="numeroLocatario"
                  {...register("numeroLocatario", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.numeroLocatario?.message}
                </p>
              </div>

              <div className="fields">
                <label>Complemento *</label>
                <input
                  className="card-input"
                  name="complementoLocatario"
                  {...register("complementoLocatario", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.complementoLocatario?.message}
                </p>
              </div>

              <div className="fields">
                <label>Bairro *</label>
                <input
                  className="card-input"
                  name="bairroLocatario"
                  {...register("bairroLocatario", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.bairroLocatario?.message}
                </p>
              </div>

              <div className="fields">
                <label>Cidade *</label>
                <input
                  className="card-input"
                  name="cidadeLocatario"
                  {...register("cidadeLocatario", { required: true })}
                ></input>
                <p className="error-message">
                  {errors.cidadeLocatario?.message}
                </p>
              </div>

              <div className="fields">
                <label>UF *</label>
                <input
                  className="card-input"
                  name="ufLocatario"
                  {...register("ufLocatario", { required: true })}
                ></input>
                <p className="error-message">{errors.ufLocatario?.message}</p>
              </div>
            </div>

            <div className="section-card">
              <h2>Dados da Locação</h2>
              <div className="fields">
                <label>Finalidade *</label>
                <input
                  className="card-input"
                  type="text"
                  name="finalidadeLocacao"
                  {...register("finalidadeLocacao", { required: true })}
                />
                <p className="error-message">
                  {errors.finalidadeLocacao?.message}
                </p>
              </div>

              <div className="fields">
                <label>Prazo de vigência (Meses) *</label>
                <input
                  mask="99"
                  className="card-input"
                  type="text"
                  name="prazoLocacao"
                  {...register("prazoLocacao", { required: true })}
                />
                <p className="error-message">{errors.prazoLocacao?.message}</p>
              </div>

              <div className="fields">
                <label>Início *</label>
                <InputMask
                  mask="99/99/9999"
                  className="card-input"
                  type="text"
                  name="dataInicio"
                  {...register("dataInicio", { required: true })}
                />
                <p className="error-message">{errors.dataInicio?.message}</p>
              </div>

              <div className="fields">
                <label>Término *</label>
                <InputMask
                  mask="99/99/9999"
                  className="card-input"
                  type="text"
                  name="dataFim"
                  {...register("dataFim", { required: true })}
                />
                <p className="error-message">{errors.dataFim?.message}</p>
              </div>

              <div className="fields">
                <label>Valor Mensal *</label>
                <input
                  className="card-input"
                  type="text"
                  name="valorAluguel"
                  {...register("valorAluguel", { required: true })}
                />
                <p className="error-message">{errors.valorAluguel?.message}</p>
              </div>

              <div className="fields">
                <label>Valor Mensal (Por escrito) *</label>
                <input
                  className="card-input"
                  type="text"
                  name="valorAluguelEscrito"
                  {...register("valorAluguelEscrito", { required: true })}
                />
                <p className="error-message">
                  {errors.valorAluguelEscrito?.message}
                </p>
              </div>
            </div>

            <div className="section-card">
              <h2>Dados do Fiador</h2>
              <div className="fields">
                <label>Nome *</label>
                <input
                  className="card-input"
                  type="text"
                  name="fiador"
                  {...register("fiador", { required: true })}
                />
                <p className="error-message">{errors.fiador?.message}</p>
              </div>

              <div className="fields">
                <label>Nacionalidade *</label>
                <input
                  mask="99"
                  className="card-input"
                  type="text"
                  name="nacionalidadeFiador"
                  {...register("nacionalidadeFiador", { required: true })}
                />
                <p className="error-message">
                  {errors.nacionalidadeFiador?.message}
                </p>
              </div>

              <div className="fields">
                <label>Profissão *</label>
                <input
                  className="card-input"
                  type="text"
                  name="ocupacaoFiador"
                  {...register("ocupacaoFiador", { required: true })}
                />
                <p className="error-message">
                  {errors.ocupacaoFiador?.message}
                </p>
              </div>

              <div className="fields">
                <label>Estado Civíl *</label>
                <input
                  className="card-input"
                  type="text"
                  name="estadoCivilFiador"
                  {...register("estadoCivilFiador", { required: true })}
                />
                <p className="error-message">
                  {errors.estadoCivilFiador?.message}
                </p>
              </div>

              <div className="fields">
                <label>RG *</label>
                <input
                  className="card-input"
                  type="text"
                  name="rgFiador"
                  {...register("rgFiador", { required: true })}
                />
                <p className="error-message">{errors.rgFiador?.message}</p>
              </div>

              <div className="fields">
                <label>Orgão Expedidor (Ex: SSP) *</label>
                <input
                  className="card-input"
                  type="text"
                  name="orgaoExpedidorFiador"
                  {...register("orgaoExpedidorFiador", { required: true })}
                />
                <p className="error-message">
                  {errors.orgaoExpedidorFiador?.message}
                </p>
              </div>

              <div className="fields">
                <label>UF *</label>
                <input
                  className="card-input"
                  type="text"
                  name="ufExpedidorFiador"
                  {...register("ufExpedidorFiador", { required: true })}
                />
                <p className="error-message">
                  {errors.ufExpedidorFiador?.message}
                </p>
              </div>

              <div className="fields">
                <label>CPF *</label>
                <InputMask
                  mask="999.999.999-99"
                  className="card-input"
                  type="text"
                  name="cpfFiador"
                  {...register("cpfFiador", { required: true })}
                />
                <p className="error-message">{errors.cpfFiador?.message}</p>
              </div>

              <div className="fields">
                <label>CEP *</label>
                <InputMask
                  mask="99999-999"
                  className="card-input"
                  type="text"
                  name="cepFiador"
                  {...register("cepFiador", { required: true })}
                  onBlur={getCepFiador}
                />
                <p className="error-message">{errors.cepFiador?.message}</p>
              </div>

              <div className="fields">
                <label>Rua *</label>
                <input
                  className="card-input"
                  type="text"
                  name="logradouroFiador"
                  {...register("logradouroFiador", { required: true })}
                />
                <p className="error-message">
                  {errors.logradouroFiador?.message}
                </p>
              </div>

              <div className="fields">
                <label>Número *</label>
                <input
                  className="card-input"
                  type="text"
                  name="numeroFiador"
                  {...register("numeroFiador", { required: true })}
                />
                <p className="error-message">{errors.numeroFiador?.message}</p>
              </div>

              <div className="fields">
                <label>Complemento *</label>
                <input
                  className="card-input"
                  type="text"
                  name="complementoFiador"
                  {...register("complementoFiador", { required: true })}
                />
                <p className="error-message">
                  {errors.complementoFiador?.message}
                </p>
              </div>

              <div className="fields">
                <label>Bairro *</label>
                <input
                  className="card-input"
                  type="text"
                  name="bairroFiador"
                  {...register("bairroFiador", { required: true })}
                />
                <p className="error-message">{errors.bairroFiador?.message}</p>
              </div>

              <div className="fields">
                <label>Cidade *</label>
                <input
                  className="card-input"
                  type="text"
                  name="cidadeFiador"
                  {...register("cidadeFiador", { required: true })}
                />
                <p className="error-message">{errors.cidadeFiador?.message}</p>
              </div>

              <div className="fields">
                <label>UF *</label>
                <input
                  className="card-input"
                  type="text"
                  name="ufFiador"
                  {...register("ufFiador", { required: true })}
                />
                <p className="error-message">{errors.ufFiador?.message}</p>
              </div>

              <div className="fields">
                <label>Cidade Foro *</label>
                <input
                  className="card-input"
                  type="text"
                  name="foroContrato"
                  {...register("foroContrato", { required: true })}
                />
                <p className="error-message">{errors.foroContrato?.message}</p>
              </div>
            </div>

            <div className="section-card">
              <h2>Dados do(a) Corretor(a)</h2>
              <div className="fields">
                <label>Nome *</label>
                <input
                  className="card-input"
                  type="text"
                  name="nomeCorretor"
                  {...register("nomeCorretor", { required: true })}
                />
                <p className="error-message">{errors.nomeCorretor?.message}</p>
              </div>

              <div className="fields">
                <label>Nacionalidade *</label>
                <input
                  className="card-input"
                  type="text"
                  name="nacionalidadeCorretor"
                  {...register("nacionalidadeCorretor", { required: true })}
                />
                <p className="error-message">
                  {errors.nacionalidadeCorretor?.message}
                </p>
              </div>

              <div className="fields">
                <label>Estado Civíl *</label>
                <input
                  className="card-input"
                  type="text"
                  name="estadoCivilCorretor"
                  {...register("estadoCivilCorretor", { required: true })}
                />
                <p className="error-message">
                  {errors.estadoCivilCorretor?.message}
                </p>
              </div>

              <div className="fields">
                <label>CPF *</label>
                <InputMask
                  className="card-input"
                  mask="999.999.999-99"
                  type="text"
                  name="cpfCorretor"
                  {...register("cpfCorretor", { required: true })}
                />
                <p className="error-message">{errors.cpfCorretor?.message}</p>
              </div>

              <div className="fields">
                <label>RG *</label>
                <input
                  className="card-input"
                  type="text"
                  name="rgCorretor"
                  {...register("rgCorretor", { required: true })}
                />
                <p className="error-message">{errors.rgCorretor?.message}</p>
              </div>

              <div className="fields">
                <label>Orgão Expedidor *</label>
                <input
                  className="card-input"
                  type="text"
                  name="orgaoExpedidorCorretor"
                  {...register("orgaoExpedidorCorretor", { required: true })}
                />
                <p className="error-message">
                  {errors.orgaoExpedidorCorretor?.message}
                </p>
              </div>

              <div className="fields">
                <label>UF Expedição *</label>
                <input
                  className="card-input"
                  type="text"
                  name="ufExpedidorCorretor"
                  {...register("ufExpedidorCorretor", { required: true })}
                />
                <p className="error-message">
                  {errors.ufExpedidorCorretor?.message}
                </p>
              </div>

              <div className="fields">
                <label>CRECI *</label>
                <input
                  className="card-input"
                  type="text"
                  name="creciCorretor"
                  {...register("creciCorretor", { required: true })}
                />
                <p className="error-message">{errors.creciCorretor?.message}</p>
              </div>

              <div className="fields">
                <label>Endereço *</label>
                <input
                  className="card-input"
                  type="text"
                  name="logradouroCorretor"
                  {...register("logradouroCorretor", { required: true })}
                />
                <p className="error-message">
                  {errors.logradouroCorretor?.message}
                </p>
              </div>

              <div className="fields">
                <label>Nº *</label>
                <input
                  className="card-input"
                  type="text"
                  name="numeroCorretor"
                  {...register("numeroCorretor", { required: true })}
                />
                <p className="error-message">
                  {errors.numeroCorretor?.message}
                </p>
              </div>

              <div className="fields">
                <label>CEP *</label>
                <InputMask
                  className="card-input"
                  mask="99999-999"
                  type="text"
                  name="cepCorretor"
                  {...register("cepCorretor", { required: true })}
                />
                <p className="error-message">{errors.cepCorretor?.message}</p>
              </div>

              <div className="fields">
                <label>Bairro *</label>
                <input
                  className="card-input"
                  type="text"
                  name="bairroCorretor"
                  {...register("bairroCorretor", { required: true })}
                />
                <p className="error-message">
                  {errors.bairroCorretor?.message}
                </p>
              </div>

              <div className="fields">
                <label>Cidade *</label>
                <input
                  className="card-input"
                  type="text"
                  name="cidadeCorretor"
                  {...register("cidadeCorretor", { required: true })}
                />
                <p className="error-message">
                  {errors.cidadeCorretor?.message}
                </p>
              </div>

              <div className="fields">
                <label>UF *</label>
                <input
                  className="card-input"
                  type="text"
                  name="ufCorretor"
                  {...register("ufCorretor", { required: true })}
                />
                <p className="error-message">{errors.ufCorretor?.message}</p>
              </div>

              <div className="fields">
                <label>Honorários *</label>
                <input
                  className="card-input"
                  type="text"
                  name="honorariosCorretor"
                  {...register("honorariosCorretor", { required: true })}
                />
                <p className="error-message">
                  {errors.honorariosCorretor?.message}
                </p>
              </div>

              <div className="fields">
                <label>Instituição Bancária *</label>
                <input
                  className="card-input"
                  type="text"
                  name="bancoCorretor"
                  {...register("bancoCorretor", { required: true })}
                />
                <p className="error-message">{errors.bancoCorretor?.message}</p>
              </div>

              <div className="fields">
                <label>Agência (sem dígito) *</label>
                <input
                  className="card-input"
                  type="text"
                  name="agenciaCorretor"
                  {...register("agenciaCorretor", { required: true })}
                />
                <p className="error-message">
                  {errors.agenciaCorretor?.message}
                </p>
              </div>

              <div className="fields">
                <label>Conta (com o dígito) *</label>
                <input
                  className="card-input"
                  type="text"
                  name="contaCorretor"
                  {...register("contaCorretor", { required: true })}
                />
                <p className="error-message">{errors.contaCorretor?.message}</p>
              </div>

              <div className="fields">
                <label>Chave PIX *</label>
                <input
                  className="card-input"
                  type="text"
                  name="chavePixCorretor"
                  {...register("chavePixCorretor", { required: true })}
                />
                <p className="error-message">
                  {errors.chavePixCorretor?.message}
                </p>
              </div>
            </div>

            <div className="btn-generate">
              <button onClick={handleLoading} type="submit">
                GERAR CONTRATO
              </button>
            </div>

            <div className="messageSuccess">
              <a href={message} target="_blank" rel="noopener noreferrer">
                {baixarPdf}
              </a>
            </div>

            <div>{loading ? <LoadingSpinner /> : sendData}</div>

            <div className="messageError">
              <p>{messageError}</p>
            </div>

            <div className="pix-container">
              <a
                className="pix"
                href="https://nubank.com.br/pagar/n824k/r8sPdJK5DA"
              >
                Faça uma doação ao projeto
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
