import { CatCard, mockCatCardProps } from 'ui';

export default function Docs() {
  return (
    <div>
      <CatCard {...mockCatCardProps.base} />
    </div>
  );
}
