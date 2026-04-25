import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { useUser } from '../../hooks/UserContext';
import { api } from '../../services/api';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link,
} from './styles';
import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter no minimo 6 catacteres')
        .required('Digite uma senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

const onSubmit = async (data) => {
  try {
    const request = api.post('/sessions', {
      email: data.email,
      password: data.password,
    });

    const response = await toast.promise(request, {
      pending: 'Verificando seus dados',
      success: 'Seja Bem Vindo 👌',
      error: 'Email ou Senha Incorretos 🤯',
    });

    const dataResponse = response.data;

    // 🔥 pega token de forma segura
    const token = dataResponse.token || dataResponse.auth?.token;

    if (!token) {
      console.log('RESPOSTA DO BACKEND:', dataResponse);
      throw new Error('Token não veio do backend');
    }

    const userData = {
      user: dataResponse.user || dataResponse,
      token,
    };

    localStorage.setItem(
      'devburger:userData',
      JSON.stringify(userData)
    );

    putUserData(userData);

    if (userData.user?.admin) {
      navigate('/admin/pedidos');
    } else {
      navigate('/');
    }

  } catch (error) {
    console.error('Erro ao logar:', error);
    toast.error('Erro inesperado! Tente novamente.');
  }
};
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span> Dev Burguer!</span>
          <br />
          Acesse com seu <span> Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>

        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
