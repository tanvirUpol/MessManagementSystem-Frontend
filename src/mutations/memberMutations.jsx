import { gql } from '@apollo/client';

const LOGIN_MEMBER = gql`
  mutation LoginUser($phone: String!, $password: String!) {
    loginMember(phone: $phone, password: $password) {
      phone
      token
    }
  }
`;

export { LOGIN_MEMBER };