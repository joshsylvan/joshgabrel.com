export const getBaseFolderLayer = (path: string): string => {
  const pathSections = path.split("/");
  let relativePath = "";
  for (let i = 0; i < pathSections.length - 3; ++i) {
    relativePath += "../";
  }
  return relativePath;
};
