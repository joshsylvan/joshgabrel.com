interface FileDetails {
  name: string;
  extension: string;
}
export const getFileDetails = (fileEntry: Deno.DirEntry): FileDetails => {
  const regex = fileEntry.name.matchAll(/^([^\\]*)\.(\w+)$/g);
  if (!regex || fileEntry.isDirectory) {
    return { extension: "unknown", name: "invalid file" };
  }
  const result = regex.toArray();
  if (!result.length) {
    console.error("invalid file details!");
    return { extension: "unknown", name: "invalid file" };
  }
  // console.log(regex.toArray());
  const [_file, name, extension] = result[0];
  return {
    name,
    extension,
  };
};
