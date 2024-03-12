import { useParams } from "react-router-dom";

export default function WorkDetail() {
  let { id } = useParams();

  return <div>{id}</div>;
}
