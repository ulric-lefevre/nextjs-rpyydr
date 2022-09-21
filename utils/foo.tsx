type Language = {
  id: number | string;
  name?: string;
  yaerCreation: number;
  category: 'good' | 'bad';
  typing: 'none' | 'weak' | 'strong';
  relatedLanguages: Language[];
};

interface FooProps {
  language?: Language;
}

const Foo: React.FC<FooProps> = ({ language = {} }) => {
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
          <Foo language={item}></Foo>
        ))}
      </div>
    </span>
  );
};

export default Foo;

type Hook<I, O> = (input: I) => O;

export function Factory<HIP, HOP>(
  hook: Hook<HIP, HOP>,
  component: React.ComponentType<HIP & HOP>
): React.FC<HIP> {
  const Component = component;

  return (props) => <Component {...props} {...hook(props)} />;
}
