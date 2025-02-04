// hooks/useNavigateToDetail.ts
import { useNavigate } from "react-router-dom";

export default function useNavigateToDetail() {
  const navigate = useNavigate();

  function getDetail(code: string) {
    navigate(`/detail/${code}`);
  }

  return { getDetail };
}
