import React from 'react';
import './BaiTapGameBauCua.css';

import DiemCuoc from './DiemCuoc';
import DanhSachCuoc from './DanhSachCuoc';
import DanhSachXucXac from './DanhSachXucXac';

export default function BaiTapGameBauCua() {
  return (
    <div id="BaiTapGameBauCua" className="container-fluid">
      <DiemCuoc />
      <div className="row">
        <div className="col-8">
          <DanhSachCuoc />
        </div>
        <div className="col-4">
          <DanhSachXucXac />
        </div>
      </div>
    </div>
  )
}
