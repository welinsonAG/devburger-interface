import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ImageIcon } from '@phosphor-icons/react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

import {
  Container,
  Form,
  InputGroup,
  Label,
  Input,
  Select,
  SubmitButton,
  LabelUpload,
  ErrorMessage,
  ContainerCheck
} from './styles';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';


const schema = yup.object({
  name: yup.string().required('Digite o nome do produto'),
  price: yup
    .number()
    .positive()
    .required('Digite o preço do produto')
    .typeError('Digite um valor númerico'),
  category: yup.object().required('Escolha uma categoria'),
  Offer: yup.boolean(),
  file: yup
    .mixed()
    .test('required', 'Envie uma imagem do produto', (value) => {
      return value && value.length > 0;
    })
    .test('fileSize', 'Carregue uma imagem de no máximo 5MB ', (value) => {
      return value && value.length > 0 && value[0].size <= 5000000;
    })
    .test('type', 'Tipo de arquivo válido apenas JPG, JPEG e PNG', (value) => {
      return (
        value &&
        value.length > 0 &&
        (value[0].type === 'image/jpeg' ||
          value[0].type === 'image/png' ||
          value[0].type === 'image/jpg')
      );
    }),
});

export function NewProduct() {
  const [fileName, setFileName] = useState('');
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

    
      setCategories(data);
    }

    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const productformData = new FormData();

    productformData.append('name', data.name);
    productformData.append('price', data.price * 100);
    productformData.append('category_id', data.category.id);
    productformData.append('file', data.file[0]);
    productformData.append('offer', data.offer);

    await toast.promise(api.post('/products', productformData), {
      pending: 'Adicione o produto',
      success: 'Produto criado com sucesso',
      error: 'Falha ao adicionar o produto tente novamente',
    });

    setTimeout(() => {
      navigate('/admin/produtos');
    }, 2000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <ImageIcon />
            <Input
              type="file"
              {...register('file')}
              accept="image/png, image/jpeg"
              onChange={(value) => {
                setFileName(value.target.files[0]?.name);

                register('file').onChange(value);
              }}
            />

            {fileName || 'Upload Imagem do Produto'}
          </LabelUpload>

          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Categorias"
                nenuPortalTarget={document.body}
              />
            )}
          />
          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGroup>
        <InputGroup>
          <ContainerCheck>
            <input type="checkbox" {...register('offer')} />
            <Label>Produto em oferta ?</Label>
          </ContainerCheck>
        </InputGroup>
        <SubmitButton>Adicionrar Produto</SubmitButton>
      </Form>
    </Container>
  );
}
