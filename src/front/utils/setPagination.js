export default function setPagination(setWords, setPageCount, data) {
  setWords(data.records);
  setPageCount(Math.ceil(data.recordsLength / 12));
}
