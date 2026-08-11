export interface Botaotri{
  title:string
  onPress?: () => void
  fundo: string,
  textoTamanho: number
  textoColor: string
}

export interface ImgUnivesal{
    width?: number | string;
    height?: number | string;
    url: string
    children?: React.ReactNode;
    alt?: string; 
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}

export interface Texto{
    tamanho: number
    color: string
    children?: React.ReactNode;
    peso?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    alinhamento?: 'auto' | 'left' | 'right' | 'center' | 'justify';
     borderRadius: number;
}

export interface listaUniversal<T = any> {
    dados: T[];
    renderItem?: (item: T, index: number) => React.ReactElement; // ← Adicionei ? aqui
    keyExtractor?: (item: T, index: number) => string;
    horizontal?: boolean;
    numColumns?: number;
    separador?: () => React.ReactElement;
    vazio?: () => React.ReactElement;
    estilo?: object;
}