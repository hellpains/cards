import s from './loader.module.scss'

export const Loader = () => {
  return (
    <svg
      className={s.loader}
      height={'200px'}
      preserveAspectRatio={'xMidYMid'}
      // style={'margin: auto; background: rgb(0, 0, 0); display: block; shape-rendering: auto;'}
      viewBox={'0 0 100 100'}
      width={'200px'}
      xmlns={'http://www.w3.org/2000/svg'}
      // xmlns:xlink={'http://www.w3.org/1999/xlink'}
    >
      <g>
        <circle cx={'60'} cy={'50'} fill={'#ea60d7'} r={'4'}>
          <animate
            attributeName={'cx'}
            begin={'-0.67s'}
            dur={'1s'}
            keyTimes={'0;1'}
            repeatCount={'indefinite'}
            values={'95;35'}
          ></animate>
          <animate
            attributeName={'fill-opacity'}
            begin={'-0.67s'}
            dur={'1s'}
            keyTimes={'0;0.2;1'}
            repeatCount={'indefinite'}
            values={'0;1;1'}
          ></animate>
        </circle>
        <circle cx={'60'} cy={'50'} fill={'#ea60d7'} r={'4'}>
          <animate
            attributeName={'cx'}
            begin={'-0.33s'}
            dur={'1s'}
            keyTimes={'0;1'}
            repeatCount={'indefinite'}
            values={'95;35'}
          ></animate>
          <animate
            attributeName={'fill-opacity'}
            begin={'-0.33s'}
            dur={'1s'}
            keyTimes={'0;0.2;1'}
            repeatCount={'indefinite'}
            values={'0;1;1'}
          ></animate>
        </circle>
        <circle cx={'60'} cy={'50'} fill={'#ea60d7'} r={'4'}>
          <animate
            attributeName={'cx'}
            begin={'0s'}
            dur={'1s'}
            keyTimes={'0;1'}
            repeatCount={'indefinite'}
            values={'95;35'}
          ></animate>
          <animate
            attributeName={'fill-opacity'}
            begin={'0s'}
            dur={'1s'}
            keyTimes={'0;0.2;1'}
            repeatCount={'indefinite'}
            values={'0;1;1'}
          ></animate>
        </circle>
      </g>
      <g transform={'translate(-15 0)'}>
        <path
          d={'M50 50L20 50A30 30 0 0 0 80 50Z'}
          fill={'#916bdd'}
          transform={'rotate(90 50 50)'}
        ></path>
        <path d={'M50 50L20 50A30 30 0 0 0 80 50Z'} fill={'#916bdd'}>
          <animateTransform
            attributeName={'transform'}
            dur={'1s'}
            keyTimes={'0;0.5;1'}
            repeatCount={'indefinite'}
            type={'rotate'}
            values={'0 50 50;45 50 50;0 50 50'}
          ></animateTransform>
        </path>
        <path d={'M50 50L20 50A30 30 0 0 1 80 50Z'} fill={'#916bdd'}>
          <animateTransform
            attributeName={'transform'}
            dur={'1s'}
            keyTimes={'0;0.5;1'}
            repeatCount={'indefinite'}
            type={'rotate'}
            values={'0 50 50;-45 50 50;0 50 50'}
          ></animateTransform>
        </path>
      </g>
    </svg>
  )
}
