import React from 'react'

export default function XucXac(props) {
  const { xucXac } = props;
  return (
    <>
      <div className="scene">
        <div className="cube">
          <img className="ml-3 cube__face front" style={{ width: '50px' }} src={xucXac.hinhAnh} alt="#"/>
          <img className="ml-3 cube__face back" style={{ width: '50px' }} src="./img/BaiTapGameBauCua/bau.png" alt="#"/>
          <img className="ml-3 cube__face left" style={{ width: '50px' }} src="./img/BaiTapGameBauCua/ga.png" alt="#"/>
          <img className="ml-3 cube__face right" style={{ width: '50px' }} src="./img/BaiTapGameBauCua/ca.png" alt="#"/>
          <img className="ml-3 cube__face top" style={{ width: '50px' }} src="./img/BaiTapGameBauCua/tom.png" alt="#"/>
          <img className="ml-3 cube__face bottom" style={{ width: '50px' }} src="./img/BaiTapGameBauCua/cua.png" alt="#"/>
        </div>
      </div>
    </>
  )
}
