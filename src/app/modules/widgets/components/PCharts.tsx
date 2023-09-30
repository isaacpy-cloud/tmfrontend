import React from 'react'

function PCharts() {
  return (
    <>
    <div className="row g-5 g-xl-10 mb-xl-10">
  <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
    <div
      className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-center border-0 h-md-50 mb-5 mb-xl-10"
      style={{ backgroundColor: "#080655" }}
    >
      <div className="card-header pt-5">
        <div className="card-title d-flex flex-column">
          <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">69</span>
          <span className="text-white opacity-50 pt-1 fw-semibold fs-6">
            Aktif Transferler
          </span>
        </div>
      </div>
      <div className="card-body d-flex align-items-end pt-0">
        <div className="d-flex align-items-center flex-column mt-3 w-100">
          <div className="d-flex justify-content-between fw-bold fs-6 text-white opacity-50 w-100 mt-auto mb-2">
            <span>12 Transfer İşlemde</span>
            <span>32%</span>
          </div>
          <div className="h-8px mx-3 w-100 bg-light-danger rounded">
            <div
              className="bg-danger rounded h-8px"
              role="progressbar"
              style={{ width: "32%" }}
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="card card-flush h-md-50 mb-5 mb-xl-10">
      <div className="card-header pt-5">
        <div className="card-title d-flex flex-column">
          <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">1.412</span>
          <span className="text-gray-400 pt-1 fw-semibold fs-6">
            Toplam Transfer
          </span>
        </div>
      </div>
      <div className="card-body d-flex flex-column justify-content-end pe-0">
        <span className="fs-6 fw-bolder text-gray-800 d-block mb-2">
          Operasyon Çalışanları
        </span>
        <div className="symbol-group symbol-hover flex-nowrap">
          <div
            className="symbol symbol-35px symbol-circle"
            data-bs-toggle="tooltip"
            title="Alan Warden"
          >
            <span className="symbol-label bg-warning text-inverse-warning fw-bold">
              A
            </span>
          </div>
          <div
            className="symbol symbol-35px symbol-circle"
            data-bs-toggle="tooltip"
            title="Michael Eberon"
          >
            <img alt="Pic" src={`${process.env.PUBLIC_URL}/media/avatars/300-11.jpg`} />
          </div>
          <div
            className="symbol symbol-35px symbol-circle"
            data-bs-toggle="tooltip"
            title="Susan Redwood"
          >
            <span className="symbol-label bg-primary text-inverse-primary fw-bold">
              S
            </span>
          </div>
          <div
            className="symbol symbol-35px symbol-circle"
            data-bs-toggle="tooltip"
            title="Melody Macy"
          >
            <img alt="Pic" src={`${process.env.PUBLIC_URL}/media/avatars/300-2.jpg`} />
          </div>
          <div
            className="symbol symbol-35px symbol-circle"
            data-bs-toggle="tooltip"
            title="Perry Matthew"
          >
            <span className="symbol-label bg-danger text-inverse-danger fw-bold">
              P
            </span>
          </div>
          <div
            className="symbol symbol-35px symbol-circle"
            data-bs-toggle="tooltip"
            title="Barry Walter"
          >
            <img alt="Pic" src={`${process.env.PUBLIC_URL}/media/avatars/300-12.jpg`} />
          </div>
          <a
            href="#"
            className="symbol symbol-35px symbol-circle"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_view_users"
          >
            <span className="symbol-label bg-dark text-gray-300 fs-8 fw-bold">
              +3
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
    <div className="card card-flush h-md-50 mb-5 mb-xl-10">
      <div className="card-header pt-5">
        <div className="card-title d-flex flex-column">
          <div className="d-flex align-items-center">
            <span className="fs-4 fw-semibold text-gray-400 me-1 align-self-start">
              ₺
            </span>
            <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">
              25.134
            </span>
            <span className="badge badge-light-success fs-base">
              <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1" />
              13.5%
            </span>
          </div>
          <span className="text-gray-400 pt-1 fw-semibold fs-6">
            Eylül Ayı Toplam Kazanç
          </span>
        </div>
      </div>
      <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
        <div className="d-flex flex-center me-5 pt-2">
          <div
            id="kt_card_widget_17_chart"
            style={{ minWidth: 70, minHeight: 70 }}
            data-kt-size={70}
            data-kt-line={11}
          />
        </div>
        <div className="d-flex flex-column content-justify-center flex-row-fluid">
          <div className="d-flex fw-semibold align-items-center">
            <div className="bullet w-8px h-3px rounded-2 bg-success me-3" />
            <div className="text-gray-500 flex-grow-1 me-4">Transfer Geliri</div>
            <div className="fw-bolder text-gray-700 text-xxl-end">₺7,660</div>
          </div>
          <div className="d-flex fw-semibold align-items-center my-3">
            <div className="bullet w-8px h-3px rounded-2 bg-primary me-3" />
            <div className="text-gray-500 flex-grow-1 me-4">Şirket Yan Geliri</div>
            <div className="fw-bolder text-gray-700 text-xxl-end">₺2,820</div>
          </div>
          <div className="d-flex fw-semibold align-items-center">
            <div
              className="bullet w-8px h-3px rounded-2 me-3"
              style={{ backgroundColor: "#E4E6EF" }}
            />
            <div className="text-gray-500 flex-grow-1 me-4">Giderler</div>
            <div className="fw-bolder text-gray-700 text-xxl-end">₺45,257</div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-flush h-lg-50">
      <div className="card-header pt-5">
        <h3 className="card-title text-gray-800">Şirket Yükselenleri</h3>
        <div className="card-toolbar d-none">
          <div
            data-kt-daterangepicker="true"
            data-kt-daterangepicker-opens="left"
            className="btn btn-sm btn-light d-flex align-items-center px-4"
          >
            <div className="text-gray-600 fw-bold">Loading date range...</div>
            <i className="ki-outline ki-calendar-8 fs-1 ms-2 me-0" />
          </div>
        </div>
      </div>
      <div className="card-body pt-5">
        <div className="d-flex flex-stack">
          <div className="text-gray-700 fw-semibold fs-6 me-2">
            Ort. Aylık Kazanç
          </div>
          <div className="d-flex align-items-senter">
            <i className="ki-outline ki-arrow-up-right fs-2 text-success me-2" />
            <span className="text-gray-900 fw-bolder fs-6">7.8</span>
            <span className="text-gray-400 fw-bold fs-6">/10</span>
          </div>
        </div>
        <div className="separator separator-dashed my-3" />
        <div className="d-flex flex-stack">
          <div className="text-gray-700 fw-semibold fs-6 me-2">Ort. Müşteri Memnuniyeti</div>
          <div className="d-flex align-items-senter">
            <i className="ki-outline ki-arrow-down-right fs-2 text-danger me-2" />
            <span className="text-gray-900 fw-bolder fs-6">730</span>
          </div>
        </div>
        <div className="separator separator-dashed my-3" />
        <div className="d-flex flex-stack">
          <div className="text-gray-700 fw-semibold fs-6 me-2">
            Ort. Yıllık Kazanç
          </div>
          <div className="d-flex align-items-senter">
            <i className="ki-outline ki-arrow-up-right fs-2 text-success me-2" />
            <span className="text-gray-900 fw-bolder fs-6">₺72,309</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-12 col-xl-12 col-xxl-6 mb-5 mb-xl-0">
    <div className="card h-md-100">
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold text-dark">Bugün Nasılsınız?</span>
          <span className="text-muted mt-1 fw-semibold fs-7">
            Yapılacak 45 adet iş bulunmaktadır
          </span>
        </h3>
        <div className="card-toolbar">
          <a href="#" className="btn btn-sm btn-light">
            Şikayet Oluşturun
          </a>
        </div>
      </div>
      <div className="card-body pt-7 px-0">
        <ul className="nav nav-stretch nav-pills nav-pills-custom nav-pills-active-custom d-flex justify-content-between mb-8 px-5">
          <li className="nav-item p-0 ms-0">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_timeline_widget_3_tab_content_1"
            >
              <span className="fs-7 fw-semibold">Cuma</span>
              <span className="fs-6 fw-bold">20</span>
            </a>
          </li>
          <li className="nav-item p-0 ms-0">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_timeline_widget_3_tab_content_2"
            >
              <span className="fs-7 fw-semibold">Cumt</span>
              <span className="fs-6 fw-bold">21</span>
            </a>
          </li>
          <li className="nav-item p-0 ms-0">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_timeline_widget_3_tab_content_3"
            >
              <span className="fs-7 fw-semibold">Pazr</span>
              <span className="fs-6 fw-bold">22</span>
            </a>
          </li>
          <li className="nav-item p-0 ms-0">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger active"
              data-bs-toggle="tab"
              href="#kt_timeline_widget_3_tab_content_4"
            >
              <span className="fs-7 fw-semibold">Pzts</span>
              <span className="fs-6 fw-bold">23</span>
            </a>
          </li>
          <li className="nav-item p-0 ms-0">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_timeline_widget_3_tab_content_5"
            >
              <span className="fs-7 fw-semibold">Salı</span>
              <span className="fs-6 fw-bold">24</span>
            </a>
          </li>
          <li className="nav-item p-0 ms-0">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_timeline_widget_3_tab_content_6"
            >
              <span className="fs-7 fw-semibold">Car</span>
              <span className="fs-6 fw-bold">25</span>
            </a>
          </li>
          <li className="nav-item p-0 ms-0">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_timeline_widget_3_tab_content_7"
            >
              <span className="fs-7 fw-semibold">Per</span>
              <span className="fs-6 fw-bold">26</span>
            </a>
          </li>
          <li className="nav-item p-0 ms-0">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_timeline_widget_3_tab_content_8"
            >
              <span className="fs-7 fw-semibold">Cum</span>
              <span className="fs-6 fw-bold">27</span>
            </a>
          </li>
          <li className="nav-item p-0 ms-0">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_timeline_widget_3_tab_content_9"
            >
              <span className="fs-7 fw-semibold">Cmt</span>
              <span className="fs-6 fw-bold">28</span>
            </a>
          </li>
          <li className="nav-item p-0 ms-0">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_timeline_widget_3_tab_content_10"
            >
              <span className="fs-7 fw-semibold">Pzr</span>
              <span className="fs-6 fw-bold">29</span>
            </a>
          </li>
          <li className="nav-item p-0 ms-0">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_timeline_widget_3_tab_content_11"
            >
              <span className="fs-7 fw-semibold">Pzrt</span>
              <span className="fs-6 fw-bold">30</span>
            </a>
          </li>
        </ul>
        <div className="tab-content mb-2 px-9">
          <div
            className="tab-pane fade"
            id="kt_timeline_widget_3_tab_content_1"
          >
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  10:20 - 11:00
                  <span className="text-gray-400 fw-semibold fs-7"> &nbsp; Saat Aralığı</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  3 Adet Transfer girilecek şirket adına
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Atanan Kişi
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    &nbsp; Yener
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                Kaydı Görüntüle
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  12:00 - 13:40
                  <span className="text-gray-400 fw-semibold fs-7">&nbsp; Saat Aralığı</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  Operasyonel sistem incelemesi
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Atanan Kişi
                  <a
                    href="#"
                    className="text-danger opacity-75-hover fw-semibold"
                  >
                    &nbsp; Admin Ahmet
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                Kaydı Görüntüle
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  16:30 - 17:00
                  <span className="text-gray-400 fw-semibold fs-7">&nbsp; Saat Aralığı</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  Operasyonel tabloyu içe aktarma
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Atanan Kişi
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    &nbsp; Yener
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                Kaydı Görüntüle
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="kt_timeline_widget_3_tab_content_2"
          >
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  16:30 - 17:00
                  <span className="text-gray-400 fw-semibold fs-7">PM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  Marketing Campaign Discussion
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Mark Morris
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  12:00 - 13:40
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Degree Project Estimation Meeting
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Peter Marcus
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  10:20 - 11:00
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Degree Project Estimation Meeting
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Peter Marcus
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="kt_timeline_widget_3_tab_content_3"
          >
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-primary"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  10:20 - 11:00
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Degree Project Estimation Meeting
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Peter Marcus
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  12:00 - 13:40
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  Marketing Campaign Discussion
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Bob
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  16:30 - 17:00
                  <span className="text-gray-400 fw-semibold fs-7">PM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  Marketing Campaign Discussion
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Mark Morris
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade show active"
            id="kt_timeline_widget_3_tab_content_4"
          >
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  10:20 - 11:00
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Degree Project Estimation Meeting
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Peter Marcus
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  16:30 - 17:00
                  <span className="text-gray-400 fw-semibold fs-7">PM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  Dashboard UI/UX Design Review
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Bob
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  12:00 - 13:40
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  Marketing Campaign Discussion
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Mark Morris
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="kt_timeline_widget_3_tab_content_5"
          >
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  12:00 - 13:40
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Dashboard UI/UX Design Review
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Bob
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  10:20 - 11:00
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Degree Project Estimation Meeting
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Mark Morris
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  16:30 - 17:00
                  <span className="text-gray-400 fw-semibold fs-7">PM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  Marketing Campaign Discussion
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Peter Marcus
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="kt_timeline_widget_3_tab_content_6"
          >
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  10:20 - 11:00
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  Marketing Campaign Discussion
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Mark Morris
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-primary"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  16:30 - 17:00
                  <span className="text-gray-400 fw-semibold fs-7">PM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Degree Project Estimation Meeting
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Peter Marcus
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  12:00 - 13:40
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Dashboard UI/UX Design Review
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Bob
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="kt_timeline_widget_3_tab_content_7"
          >
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  12:00 - 13:40
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Degree Project Estimation Meeting
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Bob
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  10:20 - 11:00
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Dashboard UI/UX Design Review
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Peter Marcus
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  16:30 - 17:00
                  <span className="text-gray-400 fw-semibold fs-7">PM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  Marketing Campaign Discussion
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Mark Morris
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="kt_timeline_widget_3_tab_content_8"
          >
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  16:30 - 17:00
                  <span className="text-gray-400 fw-semibold fs-7">PM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  Marketing Campaign Discussion
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Peter Marcus
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  10:20 - 11:00
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Degree Project Estimation Meeting
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Mark Morris
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  12:00 - 13:40
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Dashboard UI/UX Design Review
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Bob
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="kt_timeline_widget_3_tab_content_9"
          >
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  12:00 - 13:40
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Degree Project Estimation Meeting
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Bob
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-primary"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  16:30 - 17:00
                  <span className="text-gray-400 fw-semibold fs-7">PM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  Marketing Campaign Discussion
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Mark Morris
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  10:20 - 11:00
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Dashboard UI/UX Design Review
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Peter Marcus
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="kt_timeline_widget_3_tab_content_10"
          >
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  12:00 - 13:40
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  Marketing Campaign Discussion
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Peter Marcus
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  10:20 - 11:00
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Dashboard UI/UX Design Review
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Bob
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  16:30 - 17:00
                  <span className="text-gray-400 fw-semibold fs-7">PM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Degree Project Estimation Meeting
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Mark Morris
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="kt_timeline_widget_3_tab_content_11"
          >
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  16:30 - 17:00
                  <span className="text-gray-400 fw-semibold fs-7">PM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Dashboard UI/UX Design Review
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Mark Morris
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  10:20 - 11:00
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  Marketing Campaign Discussion
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Peter Marcus
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
            <div className="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-primary"
              />
              <div className="flex-grow-1 me-5">
                <div className="text-gray-800 fw-semibold fs-2">
                  12:00 - 13:40
                  <span className="text-gray-400 fw-semibold fs-7">AM</span>
                </div>
                <div className="text-gray-700 fw-semibold fs-6">
                  9 Degree Project Estimation Meeting
                </div>
                <div className="text-gray-400 fw-semibold fs-7">
                  Lead by
                  <a
                    href="#"
                    className="text-primary opacity-75-hover fw-semibold"
                  >
                    Lead by Bob
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_project"
              >
                View
              </a>
            </div>
          </div>
        </div>
        <div className="float-end d-none">
          <a
            href="#"
            className="btn btn-sm btn-light me-2"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_create_project"
          >
            Add Lesson
          </a>
          <a
            href="#"
            className="btn btn-sm btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_create_app"
          >
            Call Sick for Today
          </a>
        </div>
      </div>
    </div>
    <div className="card card-flush d-none h-md-100">
      <div className="card-header mt-6">
        <div className="card-title flex-column">
          <h3 className="fw-bold mb-1">What's on the road?</h3>
          <div className="fs-6 text-gray-400">Total 482 participants</div>
        </div>
        <div className="card-toolbar">
          <select
            name="status"
            data-control="select2"
            data-hide-search="true"
            className="form-select form-select-solid form-select-sm fw-bold w-100px"
          >
            <option value={1} selected>
              Options
            </option>
            <option value={2}>Option 1</option>
            <option value={3}>Option 2</option>
            <option value={4}>Option 3</option>
          </select>
        </div>
      </div>
      <div className="card-body p-0">
        <ul className="nav nav-pills d-flex flex-nowrap hover-scroll-x py-2 ms-4">
          <li className="nav-item me-1">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_schedule_day_0"
            >
              <span className="text-gray-400 fs-7 fw-semibold">Fr</span>
              <span className="fs-6 text-gray-800 fw-bold">20</span>
            </a>
          </li>
          <li className="nav-item me-1">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_schedule_day_1"
            >
              <span className="text-gray-400 fs-7 fw-semibold">Sa</span>
              <span className="fs-6 text-gray-800 fw-bold">21</span>
            </a>
          </li>
          <li className="nav-item me-1">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_schedule_day_2"
            >
              <span className="text-gray-400 fs-7 fw-semibold">Su</span>
              <span className="fs-6 text-gray-800 fw-bold">22</span>
            </a>
          </li>
          <li className="nav-item me-1">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger active"
              data-bs-toggle="tab"
              href="#kt_schedule_day_3"
            >
              <span className="text-gray-400 fs-7 fw-semibold">Mo</span>
              <span className="fs-6 text-gray-800 fw-bold">23</span>
            </a>
          </li>
          <li className="nav-item me-1">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_schedule_day_4"
            >
              <span className="text-gray-400 fs-7 fw-semibold">Tu</span>
              <span className="fs-6 text-gray-800 fw-bold">24</span>
            </a>
          </li>
          <li className="nav-item me-1">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_schedule_day_5"
            >
              <span className="text-gray-400 fs-7 fw-semibold">We</span>
              <span className="fs-6 text-gray-800 fw-bold">25</span>
            </a>
          </li>
          <li className="nav-item me-1">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_schedule_day_6"
            >
              <span className="text-gray-400 fs-7 fw-semibold">Th</span>
              <span className="fs-6 text-gray-800 fw-bold">26</span>
            </a>
          </li>
          <li className="nav-item me-1">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_schedule_day_7"
            >
              <span className="text-gray-400 fs-7 fw-semibold">Fr</span>
              <span className="fs-6 text-gray-800 fw-bold">27</span>
            </a>
          </li>
          <li className="nav-item me-1">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_schedule_day_8"
            >
              <span className="text-gray-400 fs-7 fw-semibold">Sa</span>
              <span className="fs-6 text-gray-800 fw-bold">28</span>
            </a>
          </li>
          <li className="nav-item me-1">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_schedule_day_9"
            >
              <span className="text-gray-400 fs-7 fw-semibold">Su</span>
              <span className="fs-6 text-gray-800 fw-bold">29</span>
            </a>
          </li>
          <li className="nav-item me-1">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_schedule_day_10"
            >
              <span className="text-gray-400 fs-7 fw-semibold">Mo</span>
              <span className="fs-6 text-gray-800 fw-bold">30</span>
            </a>
          </li>
          <li className="nav-item me-1">
            <a
              className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger"
              data-bs-toggle="tab"
              href="#kt_schedule_day_11"
            >
              <span className="text-gray-400 fs-7 fw-semibold">Tu</span>
              <span className="fs-6 text-gray-800 fw-bold">31</span>
            </a>
          </li>
        </ul>
        <div className="tab-content px-9">
          <div id="kt_schedule_day_0" className="tab-pane fade show">
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  12:00 - 13:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Dashboard UI/UX Design Review
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Walter White</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  14:30 - 15:30
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Weekly Team Stand-Up
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Bob Harris</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  14:30 - 15:30
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Dashboard UI/UX Design Review
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Michael Walters</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
          </div>
          <div id="kt_schedule_day_1" className="tab-pane fade show active">
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  12:00 - 13:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Weekly Team Stand-Up
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Terry Robins</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  13:00 - 14:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Marketing Campaign Discussion
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Karina Clarke</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  12:00 - 13:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Creative Content Initiative
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">David Stevenson</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
          </div>
          <div id="kt_schedule_day_2" className="tab-pane fade show">
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  11:00 - 11:45
                  <span className="fs-7 text-gray-400 text-uppercase">am</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Development Team Capacity Review
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Kendell Trevor</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  12:00 - 13:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Marketing Campaign Discussion
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Naomi Hayabusa</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  12:00 - 13:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  9 Degree Project Estimation Meeting
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">David Stevenson</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
          </div>
          <div id="kt_schedule_day_3" className="tab-pane fade show">
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  12:00 - 13:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Creative Content Initiative
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Walter White</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  12:00 - 13:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Marketing Campaign Discussion
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Sean Bean</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  12:00 - 13:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Committee Review Approvals
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Karina Clarke</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
          </div>
          <div id="kt_schedule_day_4" className="tab-pane fade show">
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  13:00 - 14:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Development Team Capacity Review
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Yannis Gloverson</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  10:00 - 11:00
                  <span className="fs-7 text-gray-400 text-uppercase">am</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Weekly Team Stand-Up
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Michael Walters</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  13:00 - 14:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Creative Content Initiative
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Peter Marcus</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
          </div>
          <div id="kt_schedule_day_5" className="tab-pane fade show">
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  10:00 - 11:00
                  <span className="fs-7 text-gray-400 text-uppercase">am</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Lunch &amp; Learn Catch Up
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Yannis Gloverson</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  14:30 - 15:30
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Team Backlog Grooming Session
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Bob Harris</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  11:00 - 11:45
                  <span className="fs-7 text-gray-400 text-uppercase">am</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Project Review &amp; Testing
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Naomi Hayabusa</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
          </div>
          <div id="kt_schedule_day_6" className="tab-pane fade show">
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  14:30 - 15:30
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Creative Content Initiative
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Sean Bean</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  9:00 - 10:00
                  <span className="fs-7 text-gray-400 text-uppercase">am</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Team Backlog Grooming Session
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Terry Robins</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  11:00 - 11:45
                  <span className="fs-7 text-gray-400 text-uppercase">am</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Dashboard UI/UX Design Review
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Walter White</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
          </div>
          <div id="kt_schedule_day_7" className="tab-pane fade show">
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  10:00 - 11:00
                  <span className="fs-7 text-gray-400 text-uppercase">am</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Lunch &amp; Learn Catch Up
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Caleb Donaldson</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  14:30 - 15:30
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Dashboard UI/UX Design Review
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Walter White</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  10:00 - 11:00
                  <span className="fs-7 text-gray-400 text-uppercase">am</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Creative Content Initiative
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Terry Robins</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
          </div>
          <div id="kt_schedule_day_8" className="tab-pane fade show">
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  16:30 - 17:30
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Committee Review Approvals
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">David Stevenson</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  16:30 - 17:30
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Development Team Capacity Review
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Walter White</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  14:30 - 15:30
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Dashboard UI/UX Design Review
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Mark Randall</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
          </div>
          <div id="kt_schedule_day_9" className="tab-pane fade show">
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  12:00 - 13:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  9 Degree Project Estimation Meeting
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Mark Randall</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  13:00 - 14:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Project Review &amp; Testing
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Peter Marcus</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  16:30 - 17:30
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Team Backlog Grooming Session
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Bob Harris</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
          </div>
          <div id="kt_schedule_day_10" className="tab-pane fade show">
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  13:00 - 14:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Marketing Campaign Discussion
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Peter Marcus</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  16:30 - 17:30
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Lunch &amp; Learn Catch Up
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Naomi Hayabusa</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  10:00 - 11:00
                  <span className="fs-7 text-gray-400 text-uppercase">am</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Creative Content Initiative
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Walter White</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
          </div>
          <div id="kt_schedule_day_11" className="tab-pane fade show">
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  16:30 - 17:30
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Sales Pitch Proposal
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Kendell Trevor</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  14:30 - 15:30
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  Team Backlog Grooming Session
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Naomi Hayabusa</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
            <div className="d-flex flex-stack position-relative mt-8">
              <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0" />
              <div className="fw-semibold ms-5 text-gray-600">
                <div className="fs-5">
                  12:00 - 13:00
                  <span className="fs-7 text-gray-400 text-uppercase">pm</span>
                </div>
                <a
                  href="#"
                  className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                >
                  9 Degree Project Estimation Meeting
                </a>
                <div className="text-gray-400">
                  Lead by
                  <a href="#">Terry Robins</a>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-bg-light btn-active-color-primary btn-sm"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default PCharts