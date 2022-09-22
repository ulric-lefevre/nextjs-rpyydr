type Language = {
  id: number | string;
  name?: string;
  yearCreation: number;
  category: 'good' | 'bad';
  typing: 'none' | 'weak' | 'strong';
  relatedLanguages: Language[];
};

interface LanguageProps {
  language?: Language;
}

const Language: React.FC<LanguageProps> = ({ language = {} }) => {
  return (
    <span>
      <div>
        #{language.id}
        Language name: {language.name}
        Is good: {language.category == 'good' ? 'yes' : 'no'}
        Typing:{' '}
        {language.typing == 'none'
          ? 'no-typing'
          : language.typing == 'weak'
          ? 'quite low'
          : language.typing == 'strong'
          ? 'TypeScript :cool:'
          : 'never'}
        {language.relatedLanguages?.forEach((item) => (
          <Language language={item}></Language>
        ))}
      </div>
    </span>
  );
};

export { Language };

type Hook<Input, Output> = (input: Input) => Output;

export default function Factory<Props, ProcessedProps>(
  hook: Hook<Props, ProcessedProps>,
  component: React.ComponentType<Props & ProcessedProps>
): React.FC<Props> {
  const Component = component;

  return (props) => <Component {...props} {...hook(props)} />;
}
