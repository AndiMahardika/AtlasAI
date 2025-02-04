import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { IDetail } from "@/types/types";

const GET_DETAIL = gql`
  query GetCountryDetail($code: ID!) {
    country(code: $code) {
      name
      code
      emoji
      capital
      currency
      awsRegion
      phone
      subdivisions {
        name
      }
      languages {
        name
        native
        code
        rtl
      }
      continent {
        code
        name
        countries {
          code
          emoji
          name
          capital
          currency
        }
      }
      states {
        code
        name
      }
    }
  }
`;

export function useCountryDetail() {
  const { code } = useParams();
  const { data, loading, error } = useQuery(GET_DETAIL, { variables: { code } });

  return { country: data?.country as IDetail, loading, error };
}