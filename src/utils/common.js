export function getLog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('========================')
      resolve()
    }, 2000)
  })
}