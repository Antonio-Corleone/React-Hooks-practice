import * as actGameBauCua from '../constants';

export const DatCuocGameBauCua = (quanCuoc)=> {
  return {
    type: actGameBauCua.DAT_CUOC_BAU_CUA,
    payload: quanCuoc,
  }
}