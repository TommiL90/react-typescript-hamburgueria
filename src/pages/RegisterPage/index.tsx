import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import { StyledButton } from "../../styles/buttons";
import { Container } from "../../styles/Container";
import { FormContainer } from "../../styles/formContainer";
import { StyledTitle } from "../../styles/typography";
import {
  RegisterPageContainer,
  RegisterPageDiv,
  RegisterPageSection,
  StyledRegisterPage,
} from "./style";
import { registerSchema } from "./schema";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Spinner } from '../../styles/spinner';
import spinner from '../../assets/spinner.svg';


interface iRegisterForm {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const RegisterPage = () => {


  const { loading, registerUser } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iRegisterForm> = (data) => {

    registerUser(data);
    reset();
  };

  return (
    <StyledRegisterPage>
      <Container>
        <RegisterPageContainer>
          <RegisterPageSection>
            <Logo />
            <RegisterPageDiv>
              <div>
                <FiShoppingBag />
              </div>
              <p>
                A vida é como um sanduíche, é preciso recheá-la com os{" "}
                <strong>melhores</strong> ingredientes.
              </p>
            </RegisterPageDiv>
          </RegisterPageSection>

          <FormContainer>
            <div>
              <StyledTitle tag="h3" fontSize="h3">
                Cadastro
              </StyledTitle>
              <Link to={"/login"}>Retornar para o login</Link>
            </div>
            <form onSubmit={handleSubmit(submit)}>
              <Input
                legend="Nome"
                type="text"
                placeholder="Digite seu nome"
                {...register("name")}
              />
              {errors.name && <small>{errors.name.message}</small>}

              <Input
                legend="Email"
                type="email"
                placeholder="Digite seu Email"
                {...register("email")}
              />
              {errors.email && <small>{errors.email.message}</small>}

              <Input
                legend="Senha"
                type="password"
                placeholder="Digite senha"
               {...register("password")}
              />
              {errors.password && <small>{errors.password.message}</small>}

              <Input
                legend="Confirmar Senha"
                type="password"
                placeholder="Confirme senha"
                {...register("repeatPassword")}
              />
              {errors.repeatPassword && (
                <small>{errors.repeatPassword.message}</small>
              )}

              <StyledButton
                type="submit"
                buttonSize="default"
                buttonStyle="outline2"
              >{loading ? <Spinner src={spinner} alt="spinner"/> : "Cadastrar"}
              </StyledButton>
            </form>
          </FormContainer>
        </RegisterPageContainer>
      </Container>
    </StyledRegisterPage>
  );
};

export default RegisterPage;


