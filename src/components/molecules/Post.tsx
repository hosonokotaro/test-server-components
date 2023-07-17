type Props = {
  title: string;
  description: string;
};

export const Post = ({ title, description }: Props) => {
  return (
    <div>
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </div>
  );
};
