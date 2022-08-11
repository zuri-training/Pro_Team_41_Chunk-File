const animation = document.querySelector('.animation--body')
const wave = document.querySelector('#wave')
const logo = document.querySelector('.logo')

const fill = document.querySelector('#fill')

const toWhite = document.querySelectorAll('#toWhite')

const white = document.querySelector('#white')

const shape2 =
  'M469.539032,263.986786H-0.000001L0,229.890961c310.649475,58.156982,255.61113-98.5,469.539032-65.062302V263.986786z'
const shape3 =
  'M469.539032,263.986786H-0.000001L0,0c226.11113,0,182.887283-0.414484,469.539032,0V263.986786zz'

new TimelineMax({
  // onStart:
  repeat: 0,
  repeatDelay: 1,
  onComplete: displayNone,
})
  .to(wave, 0.5, {
    attr: { d: shape2 },
    ease: Power3.easeIn,
  })
  .to(wave, 0.5, {
    attr: { d: shape3 },
    ease: Power3.easeOut,
    fill: '#301E4E',
  })

  .to(fill, 0.5, {
    fill: '#fff',
  })

  .to(white, 0.3, {
    fill: '#fff',
  })

  .from(
    logo,
    0.2,
    {
      y: 75,
      fill: '#fff',
    },
    '-=.8',
  )

  .to(animation, 0.3, {
    opacity: 0,
  })

toWhite.forEach((white) =>
  gsap.to(white, {
    delay: 2,
    stroke: '#fff',
  }),
)

function displayNone() {
  animation.classList.add('none')
  console.log('done')
}
