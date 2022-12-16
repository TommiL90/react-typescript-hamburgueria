
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiShoppingBag } from 'react-icons/fi';
import Input from '../../components/Input';
import Logo from '../../components/Logo'
import { StyledButton } from '../../styles/buttons';
import { Container } from '../../styles/Container'
import { FormContainer } from '../../styles/formContainer';
import { StyledTitle } from '../../styles/typography';
import { LoginPageContainer, LoginPageDiv, LoginPageSection, StyledLoginPage } from './style'
import { loginSchema } from './schema';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../../styles/spinner';
import spinner from '../../assets/spinner.svg';
import { UserContext } from '../../contexts/UserContext';


interface iFormLogin{
    email: string;
    password:string;
}


const LoginPage = () => {

    const { loginUser, loading } = useContext(UserContext)

    const navigate = useNavigate()

    const { register, handleSubmit, formState: {errors}, reset } = useForm<iFormLogin>({
        resolver: yupResolver(loginSchema)
    })

    const submit: SubmitHandler<iFormLogin> = data  => {

        loginUser(data)
        reset()
       
        
    }

  return (
    <StyledLoginPage>
        <Container>
            <LoginPageContainer>
                <LoginPageSection>
                    <Logo/>
                    <LoginPageDiv>
                        <div><FiShoppingBag/></div>
                        <p>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</p>
                    </LoginPageDiv>
                
                </LoginPageSection>
                    
                    <FormContainer>
        
                        <StyledTitle tag="h3" fontSize="h3" >Login</StyledTitle>
                        <form onSubmit={handleSubmit(submit)}>
                        <Input legend="E-mail" type="email" placeholder="Digite seu Email" register={register("email")}/>
                        {errors.email && <small>{errors.email.message}</small>}


                        <Input legend="Senha" type="password" placeholder="Digite sua senha" register={register("password")}/>
                        {errors.password && <small>{errors.password.message}</small>}


                        <StyledButton type="submit" buttonSize="default" buttonStyle="solidPrimary"
                        >{loading ? <Spinner src={spinner} alt="spinner"/> : "Logar"}</StyledButton>
                        </form>
                        <p>Crie sua conta para saborear muitas <br /> delícias e matar sua fome!</p>
                        <StyledButton 
                        onClick={()=> navigate("/register")}
                        type="button" buttonSize="default" buttonStyle="outline1" >Cadastre-se</StyledButton>
                    </FormContainer>
            </LoginPageContainer>
               
     
        </Container>
    </StyledLoginPage>
  )
}

export default LoginPage