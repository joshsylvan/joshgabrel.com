export interface Route {
  isHtml: boolean;
  body: BodyInit;
  headers: HeadersInit,
  filePath?: string;
}

export type RouteMap = Record<string, Route>;
