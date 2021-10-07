const Select = ({
  statusOption,
  data,
  setSpeciesOption,
  setPage,
  setCharacterTarget,
}) => {
  const change = (e) => {
    setSpeciesOption(e.target.value.toLocaleLowerCase());
    setPage(1);
    setCharacterTarget("")
  };
  return (
    <select
      value={statusOption}
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
  );
};

export default Select