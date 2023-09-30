/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
    <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Yönetim Panelleri</span>
        </div>
      </div>

      <SidebarMenuItem
        to='/main-analytics'
        icon='bi bi-speedometer'
        title="Yönetim Paneli"
        fontIcon='bi-speedometer'
      />

<SidebarMenuItem
        to='/testing-page'
        icon='bi bi-bank2'
        title="Muhasebe"
        fontIcon='bi bi-bank'
      />

<SidebarMenuItem
        to='/testing-page'
        icon='bi bi-clock-history'
        title="Yapılacaklar"
        fontIcon='bi bi-clock-history'
      />


<SidebarMenuItem
        to='/testing-page'
        icon='bi bi-airplane-engines'
        title="Transferler"
        fontIcon='bi bi-airplane-engines'
      />


<div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Şirket İşleri</span>
        </div>
      </div>


      <SidebarMenuItemWithSub
        to='/testing-page'
        icon='bi bi-box-arrow-down'
        title="Transfer Yönetimi"
        fontIcon='bi bi-envelope-arrow-down'
      >
        <SidebarMenuItem to='/crafted/widgets/lists' title='Transfer Ekle' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/lists' title='Transfer Sil' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/lists' title='Transfer Geçmişi' hasBullet={true} />
      </SidebarMenuItemWithSub>

<SidebarMenuItemWithSub
        to='/testing-page'
        icon='bi bi-car-front'
        title="Araç Yönetimi"
        fontIcon='bi bi-airplane-engines'
      >
        <SidebarMenuItem to='/crafted/widgets/lists' title='Araç Ekle' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/lists' title='Araç Sil' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/lists' title='Araç İşleri' hasBullet={true} />
      </SidebarMenuItemWithSub>

<SidebarMenuItemWithSub
        to='/testing-page'
        icon='bi bi-person-check'
        title="Personel Yönetimi"
        fontIcon='bi bi-airplane-engines'
      >
        <SidebarMenuItem to='/crafted/widgets/lists' title='Personel Ekle' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/lists' title='Personel Sil' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/lists' title='Personel İşleri' hasBullet={true} />
      </SidebarMenuItemWithSub>

<SidebarMenuItemWithSub
        to='/testing-page'
        icon='bi bi-person-vcard'
        title="İştirak Yönetimi"
        fontIcon='bi bi-airplane-engines'
      >
        <SidebarMenuItem to='/crafted/widgets/lists' title='İştirak Ekle' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/lists' title='İştirak Sil' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/lists' title='İştirak Geçmişi' hasBullet={true} />
      </SidebarMenuItemWithSub>
      
     
      
      
      
    </>
  )
}

export {SidebarMenuMain}
