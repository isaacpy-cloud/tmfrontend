import React from "react";
import {
  ChartsWidget1,
  ChartsWidget4,
  ChartsWidget5,
  ChartsWidget7,
  ChartsWidget8,
  StatisticsWidget1,
  TablesWidget1,
  TablesWidget10,
  TablesWidget11,
  TablesWidget12,
  TablesWidget2,
  TablesWidget4,
  TablesWidget7,
  TablesWidget8,
  TablesWidget9,
} from "../../../../_metronic/partials/widgets";
import { ChartsWidget6 } from "../../../../_metronic/partials/widgets";
import { CustomTableWidget10 } from "../../../../_metronic/partials/widgets/tables/CustomTableWidget10";
import { CustomTableFullScreenWidget10 } from "../../../../_metronic/partials/widgets/tables/CustomTableFullScreenWidget10";

function TableCstm() {
  return (
    <>
      <div className="row g-5 g-xl-8">
        <div className="col-xl-12">
          <CustomTableFullScreenWidget10 className="mb-5 mb-xl-8" />
        </div>
      </div>
    </>
  );
}

export default TableCstm;
