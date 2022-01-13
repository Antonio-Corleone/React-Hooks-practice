import React from 'react';
import XucXac from './XucXac';
import { useSelector, useDispatch } from 'react-redux';

export default function DanhSachXucXac(props) {
  const dispatch = useDispatch();
  const mangXucXac = useSelector(state => state.GameBauCuaReducer.mangXucXac);
  return (
    <div className="mt-5 pt-3">
      <div className="bg-white" style={{ width: 300, height: 300, borderRadius: '50%' }}>
        <div className="row">
          <div
            className="col-6"
            style={{ marginTop: '0px', marginLeft: '75px' }}
          >
            <XucXac xucXac={mangXucXac[0]} />
          </div>
          <div
            className="col-4"
            style={{ marginTop: '-10%', marginLeft: '25px' }}
          >
            <XucXac xucXac={mangXucXac[1]} />
          </div>
          <div
            className="col-4"
            style={{ marginTop: '-10%', marginRight: '25px' }}
          >
            <XucXac xucXac={mangXucXac[2]} />
          </div>
        </div>
        <div style={{ marginTop: '30%', marginLeft: '40%' }}>
          <button
            className="btn btn-success p-2"
            style={{ fontSize: '25px' }}
            onClick={() => {
              dispatch({
                type: 'PLAY_GAME_BAU_CUA'
              })
            }}
          >
            Xốc
          </button>
        </div>
      </div>
    </div>
  )
}
