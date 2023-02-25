const isUrl = (str: string): boolean => {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}

export default isUrl;