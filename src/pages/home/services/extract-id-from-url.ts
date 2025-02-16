export const extractIdFromUrl = (url: string) => {
  const urlParts = url.split('/')
  const id = urlParts[urlParts.length - 2]

  return Number(id)
}
