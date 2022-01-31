import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StatusBar, Alert } from 'react-native';
import * as Yup from 'yup';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainParamList } from '../../@types';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer
} from './styles';
import { AlertModal } from '../../components/AlertModal';

type SignInNavigationProp = StackNavigationProp<MainParamList, 'SignIn'>;
type SignInProps = { navigation: SignInNavigationProp };

export function SignIn({ navigation }: SignInProps) {
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageModal, setMessageModal] = useState("");
  const [titleModal, setTitleModal] = useState("Desculpe, tivemos um imprevisto:");
  const [modal, setModal] = useState(false);

  const handleSignIn = async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup
          .string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup
          .string()
          .required('Senha obrigatória')
      });
      await schema.validate({ email, password });
      Alert.alert('Valido');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setTitleModal("Erro de validação:");
        setMessageModal(error.message);
        setModal(true);
      }
      setMessageModal(error.message);
      setModal(true);
    }
  }

  const handleSignUp = () => {
    navigation.navigate("SignUpFirstStep");
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <Title>Estamos{'\n'}quase lá.</Title>
            <SubTitle>Faça seu login para começar{'\n'}uma experiência incrível.</SubTitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <InputPassword
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button
              title="Entrar"
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />
            <Button
              title="Criar conta gratuita"
              onPress={handleSignUp}
              enabled={true}
              loading={false}
              color={theme.colors.background_secondary}
              light
            />
          </Footer>

          <AlertModal
            visible={modal}
            dismissModal={() => setModal(false)}
            message={messageModal}
            title={titleModal}
            hideButton={true}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};