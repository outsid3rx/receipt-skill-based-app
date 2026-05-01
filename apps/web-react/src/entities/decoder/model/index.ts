export const decode = (base64: string) => {
  const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0))
  const text = new TextDecoder().decode(bytes)

  return JSON.parse(text)
}
