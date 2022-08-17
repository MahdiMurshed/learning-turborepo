export interface ICatCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

// eslint-disable-next-line no-unused-vars
const CatCard: React.FC<ICatCard> = ({ tag, title, body, author, time }) => {
  return <div>A card</div>;
};

export default CatCard;
