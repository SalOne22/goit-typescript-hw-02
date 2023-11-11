/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface WithTitle {
  title: string;
}

class Component<T> {
  constructor (public props: T) {

  }
}

class Page extends Component<WithTitle> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};