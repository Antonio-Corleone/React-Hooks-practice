import React from 'react';
import { animated, useSpring } from 'react-spring';

export default function XucXac(props) {
  const { xucXac } = props;
  const [propsDice, set] = useSpring(() => ({
    to: {
      xyz: [360, 360, 360]
    },
    from: {
      xyz: [0, 0, 0]
    },
    config: {
      duration: 500
    },
  }))
  set.start({reset: true})
  return (
    <>
      <div className="scene ml-5">
        <animated.div
          className="cube"
          style={{
            transform: propsDice.xyz.to((x, y, z) => `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
          }}>
          <div className="cube__face front">
            <img style={{ width: '100%' }} src={xucXac.hinhAnh} alt="#" />
          </div>
          <div className="cube__face back">
            <img style={{ width: '100%' }} src="./img/BaiTapGameBauCua/bau.png" alt="#" />
          </div>
          <div className="cube__face left">
            <img style={{ width: '100%' }} src="./img/BaiTapGameBauCua/ga.png" alt="#" />
          </div>
          <div className="cube__face right">
            <img style={{ width: '100%' }} src="./img/BaiTapGameBauCua/ca.png" alt="#" />
          </div>
          <div className="cube__face top">
            <img style={{ width: '100%' }} src="./img/BaiTapGameBauCua/tom.png" alt="#" />
          </div>
          <div className="cube__face bottom">
            <img style={{ width: '100%' }} src="./img/BaiTapGameBauCua/cua.png" alt="#" />
          </div>
        </animated.div>
      </div>
    </>
  )
}
