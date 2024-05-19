export async function enableMocking() {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    const { worker } = await import('./browser')
    return worker.start()
  }
  return Promise.resolve()
}
