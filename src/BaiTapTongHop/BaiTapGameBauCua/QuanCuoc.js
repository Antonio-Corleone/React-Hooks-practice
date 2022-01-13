import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';


export default function QuanCuoc(props) {

  const dispatch = useDispatch();
  const [plusState, setPlusState] = useState(true);
  const [abstractState, setAbstractState] = useState(true);
  const { plusBtn } = useSpring({
    from: { plusBtn: 0 },
    plusBtn: plusState ? 1 : 0,
    config: { duration: 500 },
  })
  const { abstractBtn } = useSpring({
    from: { abstractBtn: 0 },
    abstractBtn: abstractState ? 1 : 0,
    config: { duration: 500 },
  })
  const { quanCuoc } = props;
  return (
    <div className="mt-3">
      <img
        src={quanCuoc.hinhAnh}
        style={{ width: '250px' }}
        alt="#"
      />
      <div className="bg-success mt-2 pb-2 text-center" style={{ bordeRadius: '10px', width: '250px' }}>
        <animated.button
          style={{
            scale: plusBtn.to({
              range: [0, 0.25, 0.5, 0.75, 1],
              output: [1, 1.25, 1, 1.25, 1],
            }),
          }}
          className="btn btn-danger mr-3"
          onClick={() => {
            setPlusState(!plusState)
            dispatch({
              type: 'DAT_CUOC_BAU_CUA',
              quanCuoc,
              tangGiam: true,
            })
          }}
        >
          <i className="fa fa-plus"></i>
        </animated.button>
        <span style={{ color: 'yellow', fontSize: 25 }} className="mt-2">{quanCuoc.diemCuoc}</span>
        <animated.button
          style={{
            scale: abstractBtn.to({
              range: [0, 0.25, 0.5, 0.75, 1],
              output: [1, 1.25, 1, 1.25, 1],
            }),
          }}
          className="btn btn-danger ml-3"
          onClick={() => {
            setAbstractState(!abstractState)
            dispatch({
              type: 'DAT_CUOC_BAU_CUA',
              quanCuoc,
              tangGiam: false,
            })
          }}
        >
          -
        </animated.button>
      </div>
    </div>
  )
}
