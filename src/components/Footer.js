import statusData from "../services/statusData";
import speciesData from "../services/speciesData";
import Select from './Select'

const Footer = ({
  setPage,
  page,
  statusOption,
  setSpeciesOption,
  setStatusOption,
  setCharacterTarget
}) => {
  return (
    <div className="page">
      <label className="back" onClick={() => setPage(page - 1)}>
        {page > 1 ? <label>&lt;</label> : null}
      </label>
      <Select
        statusOption={statusOption}
        data={speciesData}
        setSpeciesOption={setSpeciesOption}
        setPage={setPage}
        setCharacterTarget={setCharacterTarget}
      />

      <Select
        statusOption={statusOption}
        data={statusData}
        setSpeciesOption={setStatusOption}
        setPage={setPage}
        setCharacterTarget={setCharacterTarget}
      />
      <label className="next" onClick={() => setPage(page + 1)}>
        &gt;
      </label>
    </div>
  );
};

export default Footer;
