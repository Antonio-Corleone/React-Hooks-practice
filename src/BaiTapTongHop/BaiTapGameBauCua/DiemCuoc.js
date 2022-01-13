import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function DiemCuoc(props) {
  const dispatch = useDispatch();
  const tienThuong = useSelector(state => state.GameBauCuaReducer.tongDiem);
  return (
    <div>
      <h3
        className="text-center display-4"
        style={{ color: '#58FA58' }}
      >
        GAME BẦU CUA CYBERLEARN
      </h3>
      <div className="text-center mt-5">
        <span
          className="p-3 text-white bg-danger"
          style={{
            fontSize: '20px',
            borderRadius: '5%'
          }}
        >
          Tiền Thưởng
          <span className="text-warning pl-2">{tienThuong.toLocaleString()}$</span>
        </span>
      </div>
      <div className="text-center mt-5">
        <button
          className="p-3 text-white bg-success"
          style={{
            fontSize: '15px',
            borderRadius: '5%',
            border: 'none'
          }}
          onClick={() => {
            dispatch({
              type: 'CHOI_LAI'
            })
          }}
        >
          Chơi lại
        </button>
      </div>
    </div>
  )
}
