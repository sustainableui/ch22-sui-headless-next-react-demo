function isDisplayModeStale(localStorageLocalizationTimestamp: string, localizationTimeout: number): boolean {
  const now = new Date().getTime();
  const backThen = new Date(localStorageLocalizationTimestamp).getTime();
  return now - backThen >= localizationTimeout;
}

export default isDisplayModeStale;
