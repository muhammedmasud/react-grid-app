const GridHeader = (props) => {
    
    return (
            <div className="flex gap-4 items-center justify-center border mb-4 p-2">
        <label>Number of Columns:</label>
        <select onChange={props.handleColumnChange} value={props.numColumns} className='w-40'>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
        </select>
        <button onClick={props.addBox}>Add Box</button>
        <button onClick={props.resetGrid}>Reset</button>
      </div>
    )
}
export default GridHeader