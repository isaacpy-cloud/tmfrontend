/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import axios from 'axios'

type Props = {
  className: string
}

const CustomTableFullScreenWidget10: React.FC<Props> = ({className}) => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [cserror, setError] = useState(null)
  const [modalTransferId, setmodalTransferId] = useState()

  const [modalState, setModalState] = useState({
    transferDurum: '',
    modalKalkisYeri: '',
    modalVarisYeri: '',
    modalTransferId: '',
    modalMusteriAdi: '',
    modalMusteriTelefon: '',
    modalSofor: '',
    modalAcenteFiyat: '',
    modalAltTedarikci: '',
    modalEkHizmet: '',
    modalMusteriNotu: '',
    modalTahsilatDurumu: '',
  })

  const [modalData, setModalData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/transfer-listing') // API endpoint'i buraya ekleyin
        setData(response.data)
        setLoading(false)
      } catch (error) {
        setError(cserror)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const modalTransferUpdate = async (rezervasyonId) => {
    try {
      setmodalTransferId(rezervasyonId)
      const transferData = await axios.post(
        'http://localhost:3000/api/transfer-update-information',
        {
          rezervasyonId: rezervasyonId,
        }
      )
      setModalData(transferData.data)
      modalData.map((data) => {
        setModalState((prevState) => ({
          ...prevState,
          transferDurum: data.durum,
          modalKalkisYeri: data.kalkis,
          modalVarisYeri: data.varis,
          modalMusteriAdi: data.musteri_adi,
          modalMusteriTelefon: data.musteri_tel,
          modalSofor: data.sofor,
          modalAcenteFiyat: data.acente_fiyat,
          modalEkHizmet: data.ek_hizmet,
          modalMusteriNotu: data.musteri_notu,
          modalTahsilatDurumu: data.yolcu_tahsilat,
          modalAltTedarikci: data.alt_tedarikci,
        }))
      })
    } catch (error) {
      console.log(error)
    }
  }

  data.map((datas) => {
    console.log(datas._id)
  })

  if (loading) {
    return <p>Veri yükleniyor...</p>
  }

  if (cserror) {
    return <p>Hata: ${`error.message`}</p>
  }
  const transfer_completed = async (rezervasyonId, recordChanged) => {
    try {
      const updateData = await axios.post('http://localhost:3000/transfer-update', {
        rid: rezervasyonId,
        rched: recordChanged,
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Son Gelen Transfer Kayıtları</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>
            Tümünü görmek için <a href='#'>transferler</a> sayfasını görüntüleyin
          </span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <a
            href='#'
            className='btn btn-sm btn-light-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTIcon iconName='plus' className='fs-3' />
            Yeni Transfer Ekle
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-9-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>Tarih</th>
                <th className='min-w-150px'>Saat</th>
                <th className='min-w-150px'>Uçuş Bilgileri</th>
                <th className='min-w-150px'>Transfer Detayları</th>
                <th className='min-w-150px'>Tedarikçi</th>
                <th className='min-w-150px'>Alt Tedarikçi</th>
                <th className='min-w-150px'>Durum</th>
                <th className='min-w-150px'>Kalkış</th>
                <th className='min-w-150px'>Varış</th>
                <th className='min-w-150px'>Müşteri Adı</th>
                <th className='min-w-150px'>Kişi</th>
                <th className='min-w-150px'>Şoför</th>
                <th className='min-w-150px'>Acente Fiyat</th>
                <th className='min-w-150px'>Yolcu Tahsilat</th>
                <th className='min-w-150px'>Alt Tedarikçi Fiyat</th>
                <th className='min-w-150px'>Ek Hizmet</th>
                <th className='min-w-150px'>Müşteri Notu</th>
                <th className='min-w-150px'>Rezervasyon Numarası</th>
                <th className='min-w-150px'>Yönetin</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {data.map((item) => {
                const splitTarih = item.tarih.split(' ')
                let className = ''
                switch (item.durum) {
                  case 'Transfer Tamamlandı':
                    className = 'bg-success'
                    break
                  case 'Transfer Tamamlanmadı':
                    className = 'bg-white'
                    break
                  case 'Transferde Hata Oluştu':
                    className = 'bg-warning'
                    break
                  case 'No-Show':
                    className = 'bg-primary'
                    break
                  case 'Transfer İptal':
                    className = 'bg-danger'
                    break
                  default:
                    className = 'bg-white' // Varsayılan durum
                }
                return (
                  <tr key={item._id} className={className}>
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input widget-9-check'
                          type='checkbox'
                          value='1'
                        />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {splitTarih[1]}
                      </a>
                      <span className='text fw-semibold text-black d-block fs-7'>
                        {splitTarih[0]}
                      </span>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        13:05
                      </a>
                      <span className='text fw-semibold text-black d-block fs-7'>
                        {splitTarih[0]}
                      </span>
                    </td>
                    <td>
                      <span className='text fw-semibold'>{item.ucus_bilgisi}</span>
                    </td>
                    <td>
                      <span className='fw-bold text-gray-900'>{item.transfer_detay}</span>
                    </td>
                    <td>
                      <span className='fw-bold text-primary'>{item.tedarikci}</span>
                    </td>
                    <td>
                      <span className='fw-bold text-gray-900'>{item.alt_tedarikci}</span>
                    </td>
                    <td>
                      <span className='fw-bold text-black'>{item.durum}</span>
                    </td>
                    <td>
                      <span className='fw-bold text-gray-900'>{item.kalkis}</span>
                    </td>
                    <td>
                      <span className='fw-bold text-gray-900'>{item.varis}</span>
                    </td>
                    <td>
                      <span className='fw-bold text-gray-900'>
                        {item.musteri_adi + ' ' + item.musteri_tel}
                      </span>
                    </td>
                    <td>
                      <span className='fw-bold text-gray-900'>{item.kisi}</span>
                    </td>
                    <td>
                      <span className='fw-bold text-gray-900'>{item.sofor}</span>
                    </td>
                    <td>
                      <span className='fw-bold text-gray-900'>{item.acente_fiyat}</span>
                    </td>
                    <td>
                      <span className='fw-bold text-gray-900'>{item.alt_tedarikci_fiyat}</span>
                    </td>
                    <td>
                      <span className='fw-bold text-gray-900'>{item.ek_hizmet}</span>
                    </td>
                    <td>
                      <span className='fw-bold text-gray-900'>{item.yolcu_tahsilat}</span>
                    </td>
                    <td>
                      <span className='fw-bold text-gray-900'>{item.musteri_notu}</span>
                    </td>
                    <td>
                      <span className='fw-bold text-primary'>{item.rezervasyon_numarasi}</span>
                    </td>
                    <td>
                      <div className='d-flex justify-content-start flex-shrink-0'>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <KTIcon iconName='trash' className='fs-3' />
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          data-bs-toggle='modal'
                          data-bs-target='#kt_modal_1'
                          onClick={() => {
                            modalTransferUpdate(item.rezervasyon_numarasi)
                          }}
                        >
                          <KTIcon iconName='pencil' className='fs-3' />
                        </a>
                        <div className='ms-2'>
                          <button
                            type='button'
                            className='btn btn-sm btn-icon btn-light btn-active-light-primary me-2'
                            data-kt-menu-trigger='click'
                            data-kt-menu-placement='bottom-end'
                          >
                            <KTIcon iconName='switch' className='fs-3' />{' '}
                          </button>
                          <div
                            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4'
                            data-kt-menu='true'
                          >
                            <div className='menu-item px-3'>
                              <a
                                onClick={() => {
                                  transfer_completed(
                                    item.rezervasyon_numarasi,
                                    'Transfer Tamamlandı'
                                  )
                                }}
                                className='menu-link px-3'
                              >
                                Transfer Tamamlandı
                              </a>
                            </div>
                            <div className='menu-item px-3'>
                              <a
                                href='#'
                                className='menu-link px-3'
                                data-kt-filemanager-table='rename'
                                onClick={() => {
                                  transfer_completed(
                                    item.rezervasyon_numarasi,
                                    'Transfer Tamamlanmadı'
                                  )
                                }}
                              >
                                Transfer Tamamlanmadı
                              </a>
                            </div>
                            <div className='menu-item px-3'>
                              <a href='#' className='menu-link px-3' onClick={() => {
                                  transfer_completed(
                                    item.rezervasyon_numarasi,
                                    'Transferde Hata Oluştu'
                                  )
                                }}>
                                Transferde Hata Oluştu
                              </a>
                            </div>
                            <div className='menu-item px-3'>
                              <a
                                href='#'
                                className='menu-link px-3'
                                onClick={() => {
                                  transfer_completed(
                                    item.rezervasyon_numarasi,
                                    'No Show'
                                  )
                                }}
                              >
                                No-Show
                              </a>
                            </div>
                            <div className='menu-item px-3'>
                              <a
                                href='#'
                                className='menu-link text-danger px-3'
                                onClick={() => {
                                  transfer_completed(
                                    item.rezervasyon_numarasi,
                                    'Transfer İptal'
                                  )
                                }}
                              >
                                Transfer İptal
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>

      <div className='modal fade' tabIndex={-1} id='kt_modal_1'>
        <div className='modal-dialog modal-xl'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>{modalTransferId} Numaralı Kaydı Güncelliyorsunuz</h5>
              <div
                className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></div>
            </div>

            <div className='modal-body'>
              <div className='alert alert-warning d-flex align-items-center p-5 mb-10'>
                <span className='svg-icon svg-icon-2hx svg-icon-warning me-3'></span>

                <div className='d-flex flex-column'>
                  <h5 className='mb-1'>Transfer Değişiklik Uyarısı</h5>
                  <span>
                    Lütfen aşağıdaki değiştirdiğiniz alanları güncel bilgiler ile doldurunuz.
                    Yapılan değişikliklerin geri alınması mümkün değildir.
                  </span>
                </div>
              </div>

              <div className='col-lg-12 d-flex flex-center'>
                <div className='col-md-5 p-lg-8'>
                  <div className='mb-10'>
                    <label className='form-label'>Kalkış Yeri</label>
                    <input
                      type='text'
                      className='form-control'
                      value={modalState.modalKalkisYeri}
                      placeholder=''
                    />
                  </div>

                  <div className='mb-10'>
                    <label className='form-label'>Varış Yeri</label>
                    <input
                      type='text'
                      className='form-control'
                      value={modalState.modalVarisYeri}
                      placeholder=''
                    />
                  </div>

                  <div className='mb-10'>
                    <label className='form-label'>Müşteri Adı</label>
                    <input
                      type='text'
                      className='form-control'
                      value={modalState.modalMusteriAdi}
                      placeholder=''
                    />
                  </div>

                  <div className='mb-10'>
                    <label className='form-label'>Müşteri Telefon Numarası</label>
                    <input
                      type='text'
                      className='form-control'
                      value={modalState.modalMusteriTelefon}
                      placeholder=''
                    />
                  </div>

                  <div className='mb-10'>
                    <label className='form-label'>Şoför Seçiniz</label>
                    <input
                      type='text'
                      className='form-control'
                      value={modalState.modalSofor}
                      placeholder=''
                    />
                  </div>
                </div>

                <div className='col-md-5 p-lg-8'>
                  <div className='mb-10'>
                    <label className='form-label'>Acente Fiyatı</label>
                    <input
                      type='text'
                      className='form-control'
                      value={modalState.modalAcenteFiyat}
                      placeholder=''
                    />
                  </div>

                  <div className='mb-10'>
                    <label className='form-label'>Alt Tedarikçi Fiyat</label>
                    <input
                      type='text'
                      className='form-control'
                      value={modalState.modalAltTedarikci}
                      placeholder=''
                    />
                  </div>

                  <div className='mb-10'>
                    <label className='form-label'>Ek Hizmet İstenmiş mi?</label>
                    <input
                      type='text'
                      className='form-control'
                      value={modalState.modalEkHizmet}
                      placeholder=''
                    />
                  </div>

                  <div className='mb-10'>
                    <label className='form-label'>Müşteri Notu</label>
                    <input
                      type='text'
                      className='form-control'
                      value={modalState.modalMusteriNotu}
                      placeholder=''
                    />
                  </div>

                  <div className='mb-10'>
                    <label className='form-label'>Tahsilat Durumu</label>
                    <input
                      type='text'
                      className='form-control'
                      value={modalState.modalTahsilatDurumu}
                      placeholder=''
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='modal-footer'>
              <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                Kapat
              </button>
              <button type='button' className='btn btn-primary'>
                Değişiklikleri Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {CustomTableFullScreenWidget10}
