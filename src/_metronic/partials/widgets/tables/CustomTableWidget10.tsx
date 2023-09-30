/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import axios from 'axios'

type Props = {
  className: string
}



const CustomTableWidget10: React.FC<Props> = ({className}) => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true);
  const [cserror, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/transfer-listing');  // API endpoint'i buraya ekleyin
        setData(response.data);
        setLoading(false)

      } catch (error) {
        setError(cserror);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data)

  data.map((datas) => {
    console.log(datas._id)
  })

  if (loading) {
    return <p>Veri yükleniyor...</p>;
    
  }

  if (cserror) {
    return <p>Hata: ${`error.message`}</p>;
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Son Gelen Transfer Kayıtları</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Tümünü görmek için <a href="#">transferler</a> sayfasını görüntüleyin</span>
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
                <th className='min-w-120px'>Tarih</th>
                <th className='min-w-120px'>Saat</th>
                <th className='min-w-120px'>Uçuş Bilgileri</th>
                <th className='min-w-120px'>Durumu</th>
                <th className='min-w-120px'>Rezervasyon Numarası</th>
                <th className='min-w-120px'>Yönetin</th>

              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {data.map(item => {
                  const splitTarih = item.tarih.split(" ");
               return(
              <tr key={item._id}>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                    {
                      splitTarih[1]
                    }
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    {
                      splitTarih[0]
                    }
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                    13:05
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    {
                      splitTarih[0]
                    }
                  </span>
                </td>
                <td>
                <span className='text-muted fw-semibold text-muted'>
                    {
                      item.ucus_bilgisi
                    }
                  </span>
                </td>
                <td>
                <span className='fw-bold text-warning'>
                    {
                      item.durum
                    }
                  </span>
                </td>
                <td>
                <span className='fw-bold text-primary'>
                    {
                      item.rezervasyon_numarasi
                    }
                  </span>
                </td>
                <td>
                  <div className='d-flex justify-content-start flex-shrink-0'>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTIcon iconName='switch' className='fs-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTIcon iconName='pencil' className='fs-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                    >
                      <KTIcon iconName='trash' className='fs-3' />
                    </a>
                  </div>
                </td>
              </tr>
              );
              })}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {CustomTableWidget10}
