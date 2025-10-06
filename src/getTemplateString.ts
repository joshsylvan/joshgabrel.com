const decoder = new TextDecoder("utf-8");

export const getTemplateString = (filePath: string): string => {
  const fileData = Deno.readFileSync(filePath);
  return decoder.decode(fileData);
};
