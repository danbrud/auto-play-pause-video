const video = document.querySelector('video')

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting && entry.target.paused) {
      entry.target.play()
    } else {
      entry.target.pause()
    }
  })
}, { threshold: 0.75 })

videoObserver.observe(video)