import { useEffect } from 'react';
import { API, CatCard, mockCatCardProps } from 'ui';

export default function Docs() {
  useEffect(() => {
    const dat = async () => {
      const data = await API.get('/api/hello');
      console.log(data);
    };
    dat();
  }, []);
  return (
    <div>
      <CatCard {...mockCatCardProps.base} />
    </div>
  );
}
