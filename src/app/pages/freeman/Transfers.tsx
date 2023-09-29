import React from 'react'
import TdList from '../../modules/widgets/components/TdList'
import PCharts from '../../modules/widgets/components/PCharts'
import PCDashs from '../../modules/widgets/components/PCDashs'
import TableCstm from '../../modules/widgets/components/TableCstm'

function Transfers() {
  return (
    <>
    <strong>Transferler Sayfası</strong>
    <TableCstm></TableCstm>

    <script src="assets/plugins/global/plugins.bundle.js"></script>
		<script src="assets/js/scripts.bundle.js"></script>
		<script src="assets/plugins/custom/datatables/datatables.bundle.js"></script>
		<script src="assets/js/custom/apps/file-manager/list.js"></script>
		<script src="assets/js/widgets.bundle.js"></script>
		<script src="assets/js/custom/widgets.js"></script>
		<script src="assets/js/custom/apps/chat/chat.js"></script>
		<script src="assets/js/custom/utilities/modals/create-campaign.js"></script>
		<script src="assets/js/custom/utilities/modals/users-search.js"></script>
    </>
  )
}

export default Transfers