import React from 'react';
import XucXac from './XucXac';
import { useSelector, useDispatch } from 'react-redux';

export default function DanhSachXucXac(props) {
  const dispatch = useDispatch();
  const mangXucXac = useSelector(state => state.GameBauCuaReducer.mangXucXac);
  return (
    <div className="mt-5 pt-3">
      <div className="bg-white" style={{ width: 350, height: 350, borderRadius: '50%' }}>
        <div className="row">
          <div
            className="col-12 text-right"
            style={{ marginTop: '0px', marginLeft: '75px' }}
          >
            <XucXac xucXac={mangXucXac[0]} />
          </div>
          <div
            className="col-6 text-right"
          >
            <XucXac xucXac={mangXucXac[1]} />
          </div>
          <div
            className="col-6 text-right"
          >
            <XucXac xucXac={mangXucXac[2]} />
          </div>
        </div>
        <div style={{ marginTop: '28%', marginLeft: '40%' }}>
          <button
            className="btn btn-success p-2"
            style={{ fontSize: '25px' }}
            onClick = {()=> {
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
