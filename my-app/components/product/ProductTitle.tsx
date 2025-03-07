interface Props {
  title: string;
}

export default function ProductTitle({ title }: Props) {
  const MAX_CHARACTERS_FOR_TITLE = 70;
  const truncatedTitle = title.length > MAX_CHARACTERS_FOR_TITLE ? title.slice(0, MAX_CHARACTERS_FOR_TITLE) + "..." : title;

  return (
    <div className="tooltip flex-grow" data-tip={title}>
      <div className="text-gray-400 break-words">{truncatedTitle}</div>
    </div>
  )
};