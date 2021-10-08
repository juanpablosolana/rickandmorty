const Select = ({
  statusOption,
  specieOption,
  data,
  setSpeciesOption,
  setPage,
  setCharacterTarget,
  label
}) => {
  const change = (e) => {
    setSpeciesOption(e.target.value.toLocaleLowerCase());
    setPage(1);
    setCharacterTarget("")
  };
  return (
    <label>
      {label}
      <select
        value={label === "status" ? specieOption : statusOption}
        name="select"
        onChange={(e) =>
          e.target.value.toLocaleLowerCase() === "all"
            ? setSpeciesOption("")
            : change(e)
        }
      >
        {data.map((options) => {
          return (
            <option value={`${options}`} key={options}>
              {options}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Select