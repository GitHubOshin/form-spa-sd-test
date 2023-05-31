export function savePersistentPersonalForm<T extends Record<string, unknown>>(
  formValues: T,
  key: keyof T,
  value: T[keyof T]
): void {
  const stringified = JSON.stringify({ ...formValues, [key]: value })
  console.log(stringified)
  localStorage?.set?.('form-personal-info', stringified)
}

export function clearPersistentPersonalForm() {
  window.localStorage?.removeItem?.('form-personal-info')
}
