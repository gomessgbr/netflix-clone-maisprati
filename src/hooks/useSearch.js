export function useSearch(){
  const onSearch = (e, callBackFunction) => {
    const inputSearchValue = e.target.value;
    callBackFunction(inputSearchValue);
  };

  return {
    onSearch
  }
}