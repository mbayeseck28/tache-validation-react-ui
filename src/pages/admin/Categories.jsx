import Table from "../../components/table/Table";
import HeaderTable from "../../components/headerTable/HeaderTable";
import { useContext } from "react";
import { CategorieContext } from "../../utils/contexte/CategorieContext";
import useSidebare from "../../utils/hooks/useSidebare";

const Categories = () => {
  const { table, table2, actions } = useContext(CategorieContext);
  console.log("awa");

  return (
    <div>
      <HeaderTable
        title="Liste categories"
        nomAjout="Ajouter un nouveau categorie"
      />
      <Table thead={table} tbody={table2} actions={actions} />
    </div>
  );
};

export default Categories;
