import React from 'react';
import QuanCuoc from './QuanCuoc';
import { useSelector } from 'react-redux';



export default function DanhSachCuoc(props) {
  const danhSachCuoc = useSelector(state => state.GameBauCuaReducer.danhSachCuoc);
  return (
    <div className="row mt-5">
      {danhSachCuoc.map((quanCuoc, index) => {
        return (
          <div key={index} className="col-4">
            <QuanCuoc quanCuoc={quanCuoc} />
          </div>
        )
      })}
    </div>
  )
}
