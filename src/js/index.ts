const fullScreenButton = document.querySelector('button')
const input = document.querySelector('textarea')
if (!fullScreenButton.invokeTargetElement) {
  fullScreenButton?.addEventListener('click', async () => {
    await input?.requestFullscreen()
    input?.focus()
  })
}

export {}
