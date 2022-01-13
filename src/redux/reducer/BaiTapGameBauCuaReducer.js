

const initialState = {
  danhSachCuoc: [
    { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png', diemCuoc: 0 },
    { ma: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png', diemCuoc: 0 },
    { ma: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png', diemCuoc: 0 },
    { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png', diemCuoc: 0 },
    { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png', diemCuoc: 0 },
    { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png', diemCuoc: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png' },
    { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png' },
    { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png' },
  ],
}

export const GameBauCuaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DAT_CUOC_BAU_CUA': {
      const danhSachCuocUpdate = [...state.danhSachCuoc]
      const index = danhSachCuocUpdate.findIndex((item) => item.ma === action.quanCuoc.ma);
      if (index !== -1) {
        if (action.tangGiam && state.tongDiem > 0) {
          danhSachCuocUpdate[index].diemCuoc += 100;
          state.tongDiem -= 100;
        }
        if (!action.tangGiam && danhSachCuocUpdate[index].diemCuoc > 0) {
          danhSachCuocUpdate[index].diemCuoc -= 100;
          state.tongDiem += 100;
        }
      }
      state.danhSachCuoc = danhSachCuocUpdate;
      return { ...state }
    }
    case 'PLAY_GAME_BAU_CUA': {
      const mangXucXacUpdate = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6);
        mangXucXacUpdate.push(state.danhSachCuoc[soNgauNhien]);
      }
      state.mangXucXac = mangXucXacUpdate;

      mangXucXacUpdate.forEach((xucXacNN) => {
        const index = state.danhSachCuoc.findIndex(xucXac => xucXac.ma === xucXacNN.ma);
        if (index !== -1) {
          state.tongDiem += state.danhSachCuoc[index].diemCuoc;
        }
      })
      state.danhSachCuoc.forEach(xucXac => {
        const index = mangXucXacUpdate.findIndex(xucXacNN => xucXacNN.ma === xucXac.ma);
        if (index !== -1) {
          state.tongDiem += xucXac.diemCuoc;
        }
      })
      state.danhSachCuoc = state.danhSachCuoc.map(quanCuoc => {
        return { ...quanCuoc, diemCuoc: 0 }
      })

      return { ...state }
    }
    case 'CHOI_LAI': {
      state.tongDiem = 1000;
      state.danhSachCuoc = state.danhSachCuoc.map(quanCuoc => {
        return { ...quanCuoc, diemCuoc: 0 }
      })
      return { ...state }
    }
    default:
      return { ...state }
  }
}
