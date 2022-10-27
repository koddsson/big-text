function ready(): Promise<void> {
  return new Promise(resolve => {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      resolve()
    } else {
      document.addEventListener('DOMContentLoaded', () => resolve())
    }
  })
}

await ready()
const fullScreenButton = document.querySelector('button')
const input = document.querySelector('textarea')
fullScreenButton?.addEventListener('click', async () => {
  await input?.requestFullscreen()
  input?.focus()
})

export {}

