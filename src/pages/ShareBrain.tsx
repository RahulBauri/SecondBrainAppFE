import { useParams } from 'react-router-dom';

export const ShareBrain = () => {
  const params = useParams();
  return <div>{params.shareId}</div>;
};
